"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[8519],{85060:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-91cc7f3c",path:"/java8/04-stream.html",title:"Stream API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"生成：创建 Stream",slug:"生成-创建-stream",children:[{level:3,title:"由集合&数组生成 Stream",slug:"由集合-数组生成-stream",children:[]},{level:3,title:"直接创建 Stream",slug:"直接创建-stream",children:[]}]},{level:2,title:"中间操作：处理 Stream 中的数据序列",slug:"中间操作-处理-stream-中的数据序列",children:[{level:3,title:"filter 方法",slug:"filter-方法",children:[]},{level:3,title:"map 方法",slug:"map-方法",children:[]},{level:3,title:"anyMatch / allMatch / noneMatch 判断",slug:"anymatch-allmatch-nonematch-判断",children:[]}]},{level:2,title:"数据收集",slug:"数据收集",children:[{level:3,title:"iterator 方法",slug:"iterator-方法",children:[]},{level:3,title:"toArray 方法",slug:"toarray-方法",children:[]},{level:3,title:"collect：收录到集合",slug:"collect-收录到集合",children:[]},{level:3,title:"collect：收录到 Map",slug:"collect-收录到-map",children:[]}]}],filePathRelative:"java8/04-stream.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},21035:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const t=(0,s(66252).uE)('<h1 id="stream-api" tabindex="-1"><a class="header-anchor" href="#stream-api" aria-hidden="true">#</a> Stream API</h1><p>Stream 是 Java 8 中处理集合的关键抽象概念，它可以指定你希望对集合进行的操作。</p><p>当你使用 Stream 时，你会通过 3 个阶段来建立一个操作流水线。</p><table><thead><tr><th style="text-align:center;">#</th><th style="text-align:left;">阶段</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">生成</td><td style="text-align:left;">创建一个 Stream 。</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">操作</td><td style="text-align:left;">在一个或多个步骤中，指定将初始 Stream 转换为另一个 Stream 的中间操作。</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">数据收集</td><td style="text-align:left;">使用一个终止操作来产生一个结果。该操作会强制它之前的延迟操作立即执行。在这之后，该 Stream 就不会再被使用了。</td></tr></tbody></table><p>例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goodbye&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> \n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span>\n    <span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>                  <span class="token comment">// 1. 生成</span>\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token operator">::</span><span class="token function">toUpperCase</span><span class="token punctuation">)</span>       <span class="token comment">// 2. 操作</span>\n    <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3. 数据收集</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="生成-创建-stream" tabindex="-1"><a class="header-anchor" href="#生成-创建-stream" aria-hidden="true">#</a> 生成：创建 Stream</h2><h3 id="由集合-数组生成-stream" tabindex="-1"><a class="header-anchor" href="#由集合-数组生成-stream" aria-hidden="true">#</a> 由集合&amp;数组生成 Stream</h3><p>Stream 作为元素的『序列』，自然而然，我们想到通过集合、数组生成 Stream 。</p><p>Java 8 在 Collection 接口中新添加了 <strong>.stream</strong> 方法，可以将任何集合转化为一个 Stream 。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果你面对的是一个数组，也可以用静态的 <strong>Stream.of</strong> 方法将它转化为一个 Stream 。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goodbye&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Stream.of</strong> 方法有一个重载形式，接收可变长度的参数：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>xxx<span class="token punctuation">,</span> xxx<span class="token punctuation">,</span> xxx<span class="token punctuation">,</span> xxx<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 本质上等同于</span>\nstream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>另外，JDK 的 <strong>Arrays</strong> 工具类中也提供了一个 <strong>.stream</strong> 方法用以将数组转化为 Stream 。</p><p>特别地，当数组元素类型 T 是原始类型，静态方法 <strong>.stream(T[])</strong> 将返回原始类型的 Stream ：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">IntStream</span> stream <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="直接创建-stream" tabindex="-1"><a class="header-anchor" href="#直接创建-stream" aria-hidden="true">#</a> 直接创建 Stream</h3><p>除了由集合和数组生成 Stream，Stream API 为 Stream 提供了静态方法 <strong>.generate(Supplier)</strong> 方法、 <strong>.iterator(Final T, final UnaryOperator&lt;T&gt; f)</strong> 方法，直接创建 Stream 。</p><blockquote><p>这里需要注意的是，上一章节中，通过数组&amp;集合生成的 Stream 对象中的数据的数量是确定的，即为数组和集合中的数据的数量。 而通过 <strong>.generate</strong> 和 <strong>.iterator</strong> 方法生成的 Stream 对象中的数据的数量是无限的，即，你向 Stream 对象每次『要』一个对象时它都会每次生成一个返回给你，从而达到『无限个』的效果。</p></blockquote><p>通常直接创建的 Stream 对象会结合 <strong>.limit()</strong> 方法使用。</p><p><code>Stream.generate(Supplier)</code> 通过参数 Supplier 获取 Stream 序列的新元素。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token operator">::</span><span class="token function">random</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>.iterator</strong> 方法要求你提供两个参数：</p><ul><li><p>数据序列中的第一个数。这个数字需要使用者认为指定，通常也被称为『种子』。</p></li><li><p>根据『前一个数字』计算『下一个数字』的计算规则。</p></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">-&gt;</span> n <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, ...</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>整个序列的值就是：x, f(x), f(f(x)), f(f(f(x))), ...</p><h2 id="中间操作-处理-stream-中的数据序列" tabindex="-1"><a class="header-anchor" href="#中间操作-处理-stream-中的数据序列" aria-hidden="true">#</a> 中间操作：处理 Stream 中的数据序列</h2><p>所谓的中间操作，指的就是对 Stream 中的数据使用流转换方法。</p><p>filter 和 map 方法是 stream 最常见的两个流转换方法。</p><h3 id="filter-方法" tabindex="-1"><a class="header-anchor" href="#filter-方法" aria-hidden="true">#</a> filter 方法</h3><p><strong>.filter</strong> 是过滤转换，它将产生一个新的流，其中『<strong>包含符合某个特定条件</strong>』的所有元素。逻辑上就是『<strong>选中</strong>』的功能。</p><p>例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goodbye&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> newStream <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;h&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newStream<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>.filter</strong> 方法的参数是一个 <strong>Predicate&lt;T&gt;</strong> 对象——即一个从 T 到 boolean 的函数。</p><h3 id="map-方法" tabindex="-1"><a class="header-anchor" href="#map-方法" aria-hidden="true">#</a> map 方法</h3><p>我们经常需要对一个流中的值进行某种形式的转换。这是可以考虑使用 <strong>.map</strong> 方法，并传递给它一个负责进行转换的函数。</p><p>例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>newStream <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token operator">::</span><span class="token function">toUpperCase</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="anymatch-allmatch-nonematch-判断" tabindex="-1"><a class="header-anchor" href="#anymatch-allmatch-nonematch-判断" aria-hidden="true">#</a> anyMatch / allMatch / noneMatch 判断</h3><p>anyMatch / allMatch / noneMatch 三个方法用于判断 Stream 中的元素是否『<strong>至少有一个</strong>』、『<strong>全部都</strong>』、『<strong>全部都不</strong>』满足某个条件。因此，这三个方法的返回值都是 boolean 值。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> b <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">anyMatch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="数据收集" tabindex="-1"><a class="header-anchor" href="#数据收集" aria-hidden="true">#</a> 数据收集</h2><p>当经过第 2 步的操作之后，你肯定会需要查看或收集流中<small>（经过处理）</small>的数据。</p><h3 id="iterator-方法" tabindex="-1"><a class="header-anchor" href="#iterator-方法" aria-hidden="true">#</a> iterator 方法</h3><p>Stream 的 iterator 方法会返回一个传统风格的迭代器，用于访问元素。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> it <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> str <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="toarray-方法" tabindex="-1"><a class="header-anchor" href="#toarray-方法" aria-hidden="true">#</a> toArray 方法</h3><p>Stream 的 <strong>.toArray</strong> 方法会返回一个包含了流中所有元素的数组。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>不过， <strong>.toArray</strong> 方法返回的是一个 <code>Object[]</code> 数组。如果想获得一个正确类型的数组，可以将数组类型的构造函数传递给它：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注意，这里是 String[] 而不是 String</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="collect-收录到集合" tabindex="-1"><a class="header-anchor" href="#collect-收录到集合" aria-hidden="true">#</a> collect：收录到集合</h3><p>如果你想将 Stream 中的数据收录到集合中，那么你可以使用 <strong>.collect</strong> 方法。</p><blockquote><p>不过最原始最底层的 <strong>.collect</strong> 方法看起来比较『奇怪』：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>stream<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">HashSet</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">,</span> <span class="token class-name">HashSet</span><span class="token operator">::</span><span class="token function">add</span><span class="token punctuation">,</span> <span class="token class-name">HashSet</span><span class="token operator">::</span><span class="token function">addAll</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nstream<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token operator">::</span><span class="token function">add</span><span class="token punctuation">,</span> <span class="token class-name">ArrayList</span><span class="token operator">::</span><span class="token function">addAll</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这里的第一第二个参数好理解，比较奇怪的是第三个参数。这里需要用到集合的 <strong>.addAll</strong> 方法是因为会将 Stream 中的数据先存放于多个集合中，最后再将多个集合合并成一个总的集合中再返回<small>（这种『奇怪』的行为是和 Stream API 的并发特性有关）</small>。</p></blockquote><p>为此，Stream 提供了几个重载的 <strong>.collect</strong> 方法简化使用：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>stream<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nstream<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nstream<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="collect-收录到-map" tabindex="-1"><a class="header-anchor" href="#collect-收录到-map" aria-hidden="true">#</a> collect：收录到 Map</h3><p>假设你有一个 <code>Stream&lt;Student&gt;</code>，并且你想将其中的元素收集到一个 map 中，这样你随后可以通过他们的 ID 来进行查找。为了实现这个目的，你可以再 <strong>.collect</strong> 方法中使用 <strong>Collectors.toMap</strong> 。</p><p><strong>Collectors.toMap</strong> 有两个函数参数，分别用来生成 map 的 key 和 value。例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span>\n    <span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toMap</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> <span class="token class-name">Student</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>一般来说，Map 的 value 通常会是 Student 元素，这样的话可以实使用 <code>Function.identity()</code> 作为第二个参数，来实现这个效果。（你可以将它视为固定用法）。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span>\n    <span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toMap</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> <span class="token class-name">Function</span><span class="token punctuation">.</span><span class="token function">identity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',64),p={render:function(n,a){return t}}}}]);