"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[1175],{5356:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-20b101a2",path:"/mybatis/04-mybatis-%E5%88%86%E9%A1%B5.html",title:"MyBatis 进阶",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"RowBounds 分页",slug:"rowbounds-分页",children:[]},{level:2,title:"PageHelper 分页",slug:"pagehelper-分页",children:[]},{level:2,title:"PageInfo 对象属性描述",slug:"pageinfo-对象属性描述",children:[]}],filePathRelative:"mybatis/04-mybatis-分页.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},36856:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const t=(0,s(66252).uE)('<h1 id="mybatis-进阶" tabindex="-1"><a class="header-anchor" href="#mybatis-进阶" aria-hidden="true">#</a> MyBatis 进阶</h1><p>Mybatis 中实现分页功能有三种途径：</p><ul><li><p>RowBounds 分页<small>（不建议使用）</small></p></li><li><p>Example 分页<small>（简单情况可用)</small></p></li><li><p>PageHelper 分页</p></li></ul><h2 id="rowbounds-分页" tabindex="-1"><a class="header-anchor" href="#rowbounds-分页" aria-hidden="true">#</a> RowBounds 分页</h2><p>MyBatis 本身通过 RowBounds 对象提供了分页功能，你仅需为你的 dao 的查询方法多添加 RowBounds 类型的一个参数，并且不需要对配置文件做任何调整。</p><blockquote><p><small>RowBounds 也称原生分页、逻辑分页。</small></p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">RowBounds</span> bounds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RowBounds</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>bounds<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但是这种分页是一种 <strong>逻辑分页</strong>，MyBatis 并未使用 <strong>limit</strong> 子句，查询的仍是 <em>所有数据</em>，只是它仅给你“看”到了所有数据中的一部分，逻辑分页虽然完成了分页功能，但是它并未通过分页功能的对性能问题有所提升。</p><h2 id="pagehelper-分页" tabindex="-1"><a class="header-anchor" href="#pagehelper-分页" aria-hidden="true">#</a> PageHelper 分页</h2><p>PageHelper 是一款被广泛使用的 MyBatis 插件。它通过 Mybatis 的插件机制，巧妙地通过机制，在不需要配置文件（不需要写 limit 子句）的情况下，动态去修改你所执行的 SQL，在其后动态添加 limit 子句。</p><p>为了使用 PageHelper 需要引入相应的包：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>PageHelper 是一款 MyBaits 插件，使用它需要向 Mybatis 注册 PageHelper，并对它作出相关配置（<code>mybatis-config.xml</code>）。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- com.github.pagehelper 为 PageHelper 类所在包名 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span> <span class="token attr-name">interceptor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.github.pagehelper.PageInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- 使用下面的方式配置参数，后面会有所有的参数介绍 --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>helperDialect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mysql<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>pagehelper 有 4.x 和 5.x 两个版本，用法有所不同，并不是向下兼容，同样的配置在使用 4.x 或 5.x 版本中可能会报错。例如，上面的 <code>helperDialect</code> 就是 5.x 中的配置，在 4.x 中使用的是 <code>dialect</code> 。</p></div><p>如果 Mybatis 整合进了 Spring，除了上述这样配置外，还可以将相应的注册-配置工作就在 Spring 的配置文件中进行：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sqlSessionFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.mybatis.spring.SqlSessionFactoryBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">...</span><span class="token punctuation">/&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>plugins<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>array</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.github.pagehelper.PageInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>properties<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token comment">&lt;!--使用下面的方式配置参数，一行配置一个 --&gt;</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>\n            param1=value1\n            param2=value2\n            ...\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>array</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>插件的属性配置</strong>：</p><ul><li><p>helperDialect</p><p>用于指明底层数据库类型：oracle, mysql, mariadb, sqlite, hsqldb, postgresql, db2, sqlserver, informix, h2, sqlserver2012, derby</p></li><li><p>reasonable</p><p>是否启用『合理化』功能<br></p><p>启用（true）时，如果 <code>pageNum &lt; 1</code>，会返回第一页内容；如果 <code>pageNum &gt; pages</code>，会返回查询最后一页。<br></p><p>禁用（false）时，超出合理的范围会直接返回空数据。</p></li></ul><p>在使用 PageHelper 时，PageHelper 提供了两种风格来描述分页：</p><ul><li><p>offset / limit 组合</p><p><code>PageHelper.offsetPage(0, 3);</code><br></p><p>很显然，这种风格就是 SQL 语句的分页写法</p></li><li><p>pageNum / pageSize 组合</p><p><code>PageHelper.startPage(1, 10);</code><br></p><p>这种风格实际上是在模拟“人的语气”<br></p><p>插件作者建议推荐方式</p></li></ul><p>在你调用查询方法之前，调用 PageHelper 的上述两个方法中的任意一个，都可激活 PageHelper 插件的分页功能，使其动态地『帮』你修改SQL语句<small>（添加 <em>limit</em> 子句）</small>。而 Mybatis 的 select 返回的结果就返回的是一页数据。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> empDao<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> info <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><small><code>注意</code>，由于 PageHelper 插件的实现涉及到 ThreadLocal 原理，这导致一旦 PageHelper 生产了一个分页参数，但是没有被消费，这个参数就会一直保留在这个线程上。当这个线程再次被使用时，就可能导致不该分页的方法去消费这个分页参数，这就产生了莫名其妙的分页。所以，分页参数的创建代码，和查询方法的调用代码，必须“紧密的在一起”。</small></p></blockquote><p>PageHelper 插件流行的原因在于，它不仅仅能实现分页功能，而且还进一步封装了页面上的『<strong>分页导航条</strong>』所需要的所有相关信息。</p><p>使用这一个功能时，你需要创建 <em><strong>PageInfo</strong></em> 对象，并为其设置 4 个关键数据：</p><ul><li><p>页面上所需显示的数据<small>（分页查询的结果）</small></p></li><li><p>导航栏上导航数字的个数</p></li><li><p>当前页号</p></li><li><p>页面大小</p></li><li><p>总数据量</p></li></ul><p>例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// &lt;&lt; &lt; 2 3 [4] 5 6 &gt; &gt;&gt;</span>\n<span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> pageInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>empList<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npageInfo<span class="token punctuation">.</span><span class="token function">setPageNum</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前页的页号</span>\npageInfo<span class="token punctuation">.</span><span class="token function">setPageSize</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 页面大小，即，每页显示的数据量</span>\n<span class="token comment">// pageInfo.setTotal(32);  // 数据库中的总数据量。现在可省略，PageHelper 会自己去查。</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>创建 PageInfo 对象，并为其 4 个核心属性赋值后，便可以使用它：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;是否有下一页：{}&quot;</span><span class="token punctuation">,</span> pageInfo<span class="token punctuation">.</span><span class="token function">isHasNextPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;是否有上一页：{}&quot;</span><span class="token punctuation">,</span> pageInfo<span class="token punctuation">.</span><span class="token function">isHasPreviousPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;导航栏上第一个页号：{}&quot;</span><span class="token punctuation">,</span> pageInfo<span class="token punctuation">.</span><span class="token function">getNavigateFirstPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;导航栏上最后一个页号：{}&quot;</span><span class="token punctuation">,</span> pageInfo<span class="token punctuation">.</span><span class="token function">getNavigateLastPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;导航栏上的五个导航数字：{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>pageInfo<span class="token punctuation">.</span><span class="token function">getNavigatepageNums</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;共有 {} 页&quot;</span><span class="token punctuation">,</span> pageInfo<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;{} / {} &quot;</span><span class="token punctuation">,</span> pageInfo<span class="token punctuation">.</span><span class="token function">getPageNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pageInfo<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="pageinfo-对象属性描述" tabindex="-1"><a class="header-anchor" href="#pageinfo-对象属性描述" aria-hidden="true">#</a> PageInfo 对象属性描述</h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">举例</th></tr></thead><tbody><tr><td style="text-align:left;">int pageNum</td><td style="text-align:left;">当前页</td><td style="text-align:left;">比如，当前为第 <code>5</code> 页</td></tr><tr><td style="text-align:left;">int pageSize</td><td style="text-align:left;">每页的数量</td><td style="text-align:left;">比如，每页（计划/预期）显示 <code>10</code> 条数据</td></tr><tr><td style="text-align:left;">int size</td><td style="text-align:left;">当前页的数量</td><td style="text-align:left;">比如，以 98 条总数据为例，每页最多显示 <code>10</code> 条（最后一页显示 <code>8</code> 条数据）</td></tr><tr><td style="text-align:left;">int startRow</td><td style="text-align:left;">当前页面第一个元素在数据库中的行号</td><td style="text-align:left;">比如，以 98 条总数据的最后一页为例，第一条数据是第 <code>91</code> 条</td></tr><tr><td style="text-align:left;">int endRow</td><td style="text-align:left;">当前页面最后一个元素在数据库中的行号</td><td style="text-align:left;">比如，以 98 条总数据的最后一页为例，最后一条数据是第 <code>98</code> 条</td></tr><tr><td style="text-align:left;">int pages</td><td style="text-align:left;">总页数</td><td style="text-align:left;">比如，以 98 条总数据为例，每页显示 10 条（其中最后一页 8 条），因此共 <code>10</code> 页</td></tr><tr><td style="text-align:left;">int prePage</td><td style="text-align:left;">前一页</td><td style="text-align:left;">比如，当前是第 5 页，所以前一页为 <code>4</code></td></tr><tr><td style="text-align:left;">int nextPage</td><td style="text-align:left;">下一页</td><td style="text-align:left;">比如，当前是第 5 页，所以下一页为 <code>6</code></td></tr><tr><td style="text-align:left;">boolean isFirstPage</td><td style="text-align:left;">是否为第一页</td><td style="text-align:left;">比如，当前是第 5 页，不是第 1 页，所以为 <code>false</code></td></tr><tr><td style="text-align:left;">boolean isLastPage</td><td style="text-align:left;">是否为最后一页</td><td style="text-align:left;">比如，当前是第 5 页，不是最后 1 页，所以为 <code>false</code></td></tr><tr><td style="text-align:left;">boolean hasPreviousPage</td><td style="text-align:left;">是否有前一页</td><td style="text-align:left;">比如，当前是第 5 页，有前一页，所以为 <code>true</code></td></tr><tr><td style="text-align:left;">boolean hasNextPage</td><td style="text-align:left;">是否有下一页</td><td style="text-align:left;">比如，当前是第 5 页，有后一页，所以为 <code>true</code></td></tr><tr><td style="text-align:left;">int navigatePages</td><td style="text-align:left;">导航页码数</td><td style="text-align:left;">比如，页面导航栏显示 [3 4 5 6 7] 共 <code>5</code> 个数字</td></tr><tr><td style="text-align:left;">int[] navigatepageNums</td><td style="text-align:left;">所有导航页号</td><td style="text-align:left;">比如，页面导航栏显示 <code>[3 4 5 6 7]</code> 这 5 个数字</td></tr><tr><td style="text-align:left;">int navigateFirstPage</td><td style="text-align:left;">导航条上的第一页</td><td style="text-align:left;">比如，页面导航栏显示 [3 4 5 6 7] 时，第一页是第 <code>3</code> 页</td></tr><tr><td style="text-align:left;">int navigateLastPage</td><td style="text-align:left;">导航条上的最后一页</td><td style="text-align:left;">比如，页面导航栏显示 [3 4 5 6 7] 时，第一页是第 <code>7</code> 页</td></tr></tbody></table>',33),p={render:function(n,a){return t}}}}]);