"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[4266],{3776:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-6c2eb16e",path:"/other/lock-02-zookeeper.html",title:"原理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"构造函数",slug:"构造函数",children:[]},{level:2,title:"获取锁",slug:"获取锁",children:[]},{level:2,title:"释放锁",slug:"释放锁",children:[]}],filePathRelative:"other/lock-02-zookeeper.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},99609:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const e=(0,s(66252).uE)('<p><span class="title">Zookeeper 实现分布式锁</span></p><h1 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h1><p>Zookeeper 实现分布式锁功能的核心流程在于创建【临时顺序节点 ZNode】以及采用 Watch 监听机制监听临时节点的增减，从而判断当前的线程是否能够获得【锁】。</p><h1 id="curator-framework" tabindex="-1"><a class="header-anchor" href="#curator-framework" aria-hidden="true">#</a> Curator Framework</h1><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.curator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>curator-recipes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- &lt;version&gt;4.2.0&lt;/version&gt; --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Curator 是 Zookeeper 开源的客户端框架，它封装了原生的 Zookeeper API，使用起来更加方便简洁。</p><p>curator-framework 的常用 API</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>create()</code></td><td style="text-align:left;">开始创建操作， 可以调用额外的方法（比如方式mode 或者后台执行 background）并在最后调用 <code>forPath()</code> 指定要操作的 ZNode</td></tr><tr><td style="text-align:left;"><code>delete()</code></td><td style="text-align:left;">开始删除操作. 可以调用额外的方法（版本 version 或者后台处理 background）<br>并在最后调用 <code>forPath()</code> 指定要操作的 ZNode</td></tr><tr><td style="text-align:left;"><code>checkExists() </code></td><td style="text-align:left;">开始检查 ZNode 是否存在的操作. 可以调用额外的方法（监控或者后台处理）<br>并在最后调用 <code>forPath()</code> 指定要操作的 ZNode</td></tr><tr><td style="text-align:left;"><code>getData()</code></td><td style="text-align:left;">开始获得 ZNode 节点数据的操作. 可以调用额外的方法（监控、后台处理或者获取状态）<br>并在最后调用 <code>forPath()</code> 指定要操作的 ZNode</td></tr><tr><td style="text-align:left;"><code>setData()</code></td><td style="text-align:left;">开始设置 ZNode 节点数据的操作. 可以调用额外的方法（版本或者后台处理）<br>并在最后调用 <code>forPath()</code> 指定要操作的 ZNode</td></tr><tr><td style="text-align:left;"><code>getChildren()</code></td><td style="text-align:left;">开始获得 ZNode 的子节点列表。 以调用额外的方法（监控、后台处理或者获取状态），<br>并在最后调用forPath()指定要操作的 ZNode</td></tr><tr><td style="text-align:left;"><code>inTransaction()</code></td><td style="text-align:left;">开始是原子 ZooKeeper 事务. 可以复合 create, setData, check, 和/或 delete 等操作<br>然后调用 <code>commit()</code> 作为一个原子操作提交</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">CuratorFramework</span> <span class="token function">curatorFramework</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">CuratorFramework</span> curatorFramework <span class="token operator">=</span> <span class="token class-name">CuratorFrameworkFactory</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">connectString</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:2181&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">namespace</span><span class="token punctuation">(</span><span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>\n            <span class="token comment">//  .namespace(&quot;middleware-distribute-lock&quot;)</span>\n                <span class="token punctuation">.</span><span class="token function">retryPolicy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RetryNTimes</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 重试 5 次，间隔 1 秒。</span>\n                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        curatorFramework<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> curatorFramework<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="curator-的分布式互斥锁" tabindex="-1"><a class="header-anchor" href="#curator-的分布式互斥锁" aria-hidden="true">#</a> Curator 的分布式互斥锁</h1><p>Curator 封装了分布式互斥锁的实现，最为常用的是 <em><strong><code>InterProcessMutex</code></strong></em> 。</p><p><em><strong><code>InterProcessMutex</code></strong></em> 基于 Zookeeper 实现了 <strong>分布式的公平可重入互斥锁</strong> 。<small>类似于单个 JVM 进程内的 <code>ReentrantLock</code></small>。</p><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 最常用</span>\n<span class="token keyword">public</span> <span class="token class-name">InterProcessMutex</span><span class="token punctuation">(</span><span class="token class-name">CuratorFramework</span> client<span class="token punctuation">,</span> <span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="获取锁" tabindex="-1"><a class="header-anchor" href="#获取锁" aria-hidden="true">#</a> 获取锁</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 无限等待</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 限时等待</span>\n<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token keyword">long</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="释放锁" tabindex="-1"><a class="header-anchor" href="#释放锁" aria-hidden="true">#</a> 释放锁</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',18),t={render:function(n,a){return e}}}}]);