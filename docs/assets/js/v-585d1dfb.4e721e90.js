"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[5807],{58194:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-585d1dfb",path:"/other/01-SnowFlake.html",title:"Twitter 的雪花算法（SnowFlake）",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"0. UUID",slug:"_0-uuid",children:[]},{level:2,title:"1. UUID 的缺点和一个『好』ID 的标准",slug:"_1-uuid-的缺点和一个『好』id-的标准",children:[]},{level:2,title:"2. SnowFlake 的原理",slug:"_2-snowflake-的原理",children:[]},{level:2,title:"3. Snowfake 实现源码",slug:"_3-snowfake-实现源码",children:[{level:3,title:"解决时间回拨问题",slug:"解决时间回拨问题",children:[]}]}],filePathRelative:"other/01-SnowFlake.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},16059:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<h1 id="twitter-的雪花算法-snowflake" tabindex="-1"><a class="header-anchor" href="#twitter-的雪花算法-snowflake" aria-hidden="true">#</a> Twitter 的雪花算法（SnowFlake）</h1><h2 id="_0-uuid" tabindex="-1"><a class="header-anchor" href="#_0-uuid" aria-hidden="true">#</a> 0. UUID</h2><p>UUID<small>（Universally Unique Identifier，<strong>通用唯一识别码</strong>）</small>是按照开放软件基金会（OSF）制定的标准计算，用到了以太网卡地址、纳秒级时间、芯片 ID 码和许多可能的数字。</p><p>UUID 是由一组 32 位数的 16 进制数字所构成，是故 UUID 理论上的总数为16<sup>32</sup>=2<sup>128</sup>，约等于 3.4 x 10<sup>123</sup>。</p><p>也就是说若每纳秒产生 1 百万个 UUID，要花 100 亿年才会将所有 UUID 用完。</p><p>UUID 通常以连字号分隔的五组来显示，形式为 <code>8-4-4-4-12</code>，总共有 36 个字符（即 32 个英数字母和 4 个连字号）。例如： <em><code>123e4567-e89b-12d3-a456-426655440000</code></em> 。</p><p>JDK 从 1.5 开始在 java.util 包下提供了一个 <strong>UUID</strong> 类用来生成 UUID：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">UUID</span> uuid <span class="token operator">=</span> UUID<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">String</span> uuidStr1 <span class="token operator">=</span> uuid<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">String</span> uuidStr2 <span class="token operator">=</span> uuidStr1<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_1-uuid-的缺点和一个『好』id-的标准" tabindex="-1"><a class="header-anchor" href="#_1-uuid-的缺点和一个『好』id-的标准" aria-hidden="true">#</a> 1. UUID 的缺点和一个『好』ID 的标准</h2><p>为了得到一个全局唯一 ID，很自然地就会想到 UUID 算法。但是，UUID 算法有明显的缺点：</p><ol><li><p>UUID 太长了。16 个字节（128 位），通常以 36 长度的字符串表示，很多场景不适用。</p></li><li><p>非纯数字。UUID 中会出现 ABCDEF 这些十六进制的字母，因此，在数据库和代码中，自然就不能存储在整型字段或变量中。因此，在数据库中以它作为主键，建立索引的代价比较大，性能有影响。</p></li><li><p>不安全。UUID 中会包含网卡的 MAC 地址。</p></li></ol><p>从 UUID 的缺点我们也能推导出一个『好』ID 的标准应该有哪些：</p><ol><li><p>最好是由纯数字组成。</p></li><li><p>越短越好，最好能存进整型变量和数据库的整型字段中。</p></li><li><p>信息安全。另外，『ID 连续』并非好事情。</p></li><li><p>在不连续的情况下，最好是递增的。即便不是严格递增，至少也应该是趋势递增。</p></li></ol><h2 id="_2-snowflake-的原理" tabindex="-1"><a class="header-anchor" href="#_2-snowflake-的原理" aria-hidden="true">#</a> 2. SnowFlake 的原理</h2><p>Snowflake 是 Twitter 开源的分布式 ID 生成算法。最初 Twitter 把存储系统从 MySQL 迁移到 Cassandra，因为Cassandra 没有顺序 ID 生成机制，所以 Twitter 开发了这样一套全局唯一 ID 生成服务。</p><p>SnowFlake 的优点是，整体上按照时间自增排序，并且整个分布式系统内不会产生 ID 碰撞<small>（由数据中心 ID 和机器 ID 作区分）</small>，并且效率较高。</p><p>经测试，SnowFlake 每秒能够产生 26 万 ID 左右。</p><p>Snowflake 会生成一个 long 类型的 id 值，Snowflake 对于 long 的各个位都有固定的规范：</p><p>SnowFlake 所生成的 ID 的结构如下（为便于理解，这里额外加上了 <code>-</code> 和空格作分隔符）:</p><blockquote><p>0 - 0000000000 0000000000 0000000000 0000000000 0 - 00000 00000 - 000000000000</p></blockquote><ul><li><p>最高位标识（1 位）</p><p>由于 long 基本类型在 Java 中是带符号的，最高位是符号位，正数是 0，负数是 1，所以 id 一般是正数，最高位是 0 。</p></li><li><p>毫秒级时间截（41 位）</p><p>注意，41 位时间截不是存储当前时间的时间截，而是存储时间截的差值（当前时间截 - 开始时间截) 得到的值，这里的的开始时间截，一般是我们的 id 生成器开始使用的时间，由我们程序来指定的<small>（如下面程序 IdGenerator 类的 <strong>startTime</strong> 属性）</small>。</p><p>41 位的时间截，可以使用 69 年。</p><p><strong><code>(1L &lt;&lt; 41) / (1000L * 60 * 60 * 24 * 365) = 69</code></strong></p></li><li><p>数据机器位（10 位）</p><p>这 10 位的机器位实际上是由 5 位的 data-center-id 和 5 位的 worker-id 。</p><p>在 Twitter 的设计中，最多支持 32 个数据中心<small>（地方）</small>，每个中心<small>（地方）</small>最多由 32 台电脑各自计算 ID 。即，总共允许存在 1024 台电脑各自计算 ID 。</p><p>每台电脑都由 data-center-id 和 worker-id 标识，逻辑上类似于联合主键的意思。</p></li><li><p>顺序号（12 位）</p><p>毫秒内的计数，12 位的计数顺序号支持每个节点每毫秒<small>（同一机器，同一时间截）</small>产生 4096 个 ID 序号。</p></li></ul><h2 id="_3-snowfake-实现源码" tabindex="-1"><a class="header-anchor" href="#_3-snowfake-实现源码" aria-hidden="true">#</a> 3. Snowfake 实现源码</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SnowflakeIdGenerator</span> <span class="token punctuation">{</span>\n\n    <span class="token comment">// ==============================Fields===========================================</span>\n\n    <span class="token comment">// 所占位数、位移、掩码/极大值</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> sequenceBits <span class="token operator">=</span> <span class="token number">12L</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> sequenceShift <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> sequenceMask <span class="token operator">=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> sequenceBits<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> workerIdBits <span class="token operator">=</span> <span class="token number">5L</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> workerIdShift <span class="token operator">=</span> sequenceBits<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> workerIdMask <span class="token operator">=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> workerIdBits<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> dataCenterIdBits <span class="token operator">=</span> <span class="token number">5L</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> dataCenterIdShift <span class="token operator">=</span> sequenceBits <span class="token operator">+</span> workerIdBits<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> dataCenterIdMask <span class="token operator">=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> dataCenterIdBits<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> timestampBits <span class="token operator">=</span> <span class="token number">41L</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> timestampLeftShift <span class="token operator">=</span> sequenceBits <span class="token operator">+</span> workerIdBits <span class="token operator">+</span> dataCenterIdBits<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> timestampMask <span class="token operator">=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> timestampBits<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * 开始时间截 (2015-01-01)\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> twepoch <span class="token operator">=</span> <span class="token number">1420070400000L</span><span class="token punctuation">;</span>\n     <span class="token comment">/*\n     * Instant instant = Instant.parse(&quot;2015-01-01T00:00:00Z&quot;);\n     * System.out.println(instant.getEpochSecond());\n     * System.out.println(instant.toEpochMilli());\n     */</span>\n\n\n    <span class="token keyword">private</span> <span class="token keyword">long</span> sequence <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">long</span> workerId<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">long</span> dataCenterId<span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * 上次生成 ID 的时间截\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">long</span> lastTimestamp <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1L</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//==============================Constructors=====================================</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">SnowflakeIdGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * 构造函数\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">workerId</span>     工作ID (0~31)\n     * <span class="token keyword">@param</span> <span class="token parameter">dataCenterId</span> 数据中心 ID (0~31)\n     */</span>\n    <span class="token keyword">public</span> <span class="token class-name">SnowflakeIdGenerator</span><span class="token punctuation">(</span><span class="token keyword">long</span> workerId<span class="token punctuation">,</span> <span class="token keyword">long</span> dataCenterId<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>workerId <span class="token operator">&gt;</span> workerIdMask <span class="token operator">||</span> workerId <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;workerId can&#39;t be greater than %d or less than 0&quot;</span><span class="token punctuation">,</span> workerIdMask<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataCenterId <span class="token operator">&gt;</span> dataCenterIdMask <span class="token operator">||</span> dataCenterId <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;dataCenterId can&#39;t be greater than %d or less than 0&quot;</span><span class="token punctuation">,</span> dataCenterIdMask<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>workerId <span class="token operator">=</span> workerId<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>dataCenterId <span class="token operator">=</span> dataCenterId<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// ============================== Methods ==========================================</span>\n\n    <span class="token doc-comment comment">/**\n     * 获得下一个 ID (该方法是线程安全的，synchronized)\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">long</span> <span class="token function">nextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">long</span> timestamp <span class="token operator">=</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 如果当前时间小于上一次 ID 生成的时间戳，说明系统时钟回退过，这个时候应当抛出异常。</span>\n        <span class="token comment">// 出现这种原因是因为系统的时间被回拨，或出现闰秒现象。</span>\n        <span class="token comment">// 你也可以不抛出异常，而是调用 tilNextMillis 进行等待</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>timestamp <span class="token operator">&lt;</span> lastTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>\n                    <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;Clock moved backwards. Refusing to generate id for %d milliseconds&quot;</span><span class="token punctuation">,</span> lastTimestamp <span class="token operator">-</span> timestamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 如果是同一时间生成的，则进行毫秒内序列</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>lastTimestamp <span class="token operator">==</span> timestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 相同毫秒内，序列号自增</span>\n            sequence <span class="token operator">=</span> <span class="token punctuation">(</span>sequence <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> sequenceMask<span class="token punctuation">;</span>\n            <span class="token comment">// 毫秒内序列溢出，即，同一毫秒的序列数已经达到最大</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>sequence <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">// 阻塞到下一个毫秒,获得新的时间戳</span>\n                timestamp <span class="token operator">=</span> <span class="token function">tilNextMillis</span><span class="token punctuation">(</span>lastTimestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 时间戳改变，毫秒内序列重置</span>\n        <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            sequence <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 将当前生成的时间戳记录为『上次时间戳』。『下次』生成时间戳时要用到。</span>\n        lastTimestamp <span class="token operator">=</span> timestamp<span class="token punctuation">;</span>\n\n        <span class="token comment">// 移位并通过或运算拼到一起组成 64 位的 ID</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>timestamp <span class="token operator">-</span> twepoch<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> timestampLeftShift<span class="token punctuation">)</span> <span class="token comment">// 时间戳部分</span>\n                <span class="token operator">|</span> <span class="token punctuation">(</span>dataCenterId <span class="token operator">&lt;&lt;</span> dataCenterIdShift<span class="token punctuation">)</span> <span class="token comment">// 数据中心部分</span>\n                <span class="token operator">|</span> <span class="token punctuation">(</span>workerId <span class="token operator">&lt;&lt;</span> workerIdShift<span class="token punctuation">)</span> <span class="token comment">// 机器标识部分</span>\n                <span class="token operator">|</span> sequence<span class="token punctuation">;</span> <span class="token comment">// 序列号部分</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * 阻塞到下一个毫秒，直到获得新的时间戳\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">lastTimestamp</span> 上次生成ID的时间截\n     * <span class="token keyword">@return</span> 当前时间戳\n     */</span>\n    <span class="token keyword">protected</span> <span class="token keyword">long</span> <span class="token function">tilNextMillis</span><span class="token punctuation">(</span><span class="token keyword">long</span> lastTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">long</span> timestamp <span class="token operator">=</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>timestamp <span class="token operator">&lt;=</span> lastTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            timestamp <span class="token operator">=</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> timestamp<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * 阻塞到下一个毫秒，直到获得新的时间戳\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">timestamp</span> 当前时间错\n     * <span class="token keyword">@param</span> <span class="token parameter">lastTimestamp</span> 上次生成ID的时间截\n     * <span class="token keyword">@return</span> 当前时间戳\n     */</span>\n    <span class="token keyword">protected</span> <span class="token keyword">long</span> <span class="token function">tilNextMillis</span><span class="token punctuation">(</span><span class="token keyword">long</span> timestamp<span class="token punctuation">,</span> <span class="token keyword">long</span> lastTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>timestamp <span class="token operator">&lt;=</span> lastTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            timestamp <span class="token operator">=</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> timestamp<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * 返回以毫秒为单位的当前时间\n     *\n     * <span class="token keyword">@return</span> 当前时间(毫秒)\n     */</span>\n    <span class="token keyword">protected</span> <span class="token keyword">long</span> <span class="token function">timeGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//==============================Test=============================================</span>\n\n    <span class="token doc-comment comment">/**\n     * 测试\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">SnowflakeIdGenerator</span> idWorker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SnowflakeIdGenerator</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">long</span> id <span class="token operator">=</span> idWorker<span class="token punctuation">.</span><span class="token function">nextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000000</span> <span class="token operator">+</span> <span class="token string">&quot;ms&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br></div></div><h3 id="解决时间回拨问题" tabindex="-1"><a class="header-anchor" href="#解决时间回拨问题" aria-hidden="true">#</a> 解决时间回拨问题</h3><p>原生的 Snowflake 算法是完全依赖于时间的，如果有时钟回拨的情况发生，会生成重复的 ID，市场上的解决方案也是不少。简单粗暴的办法有：</p><ul><li><p>最简单的方案，就是关闭生成唯一 ID 机器的时间同步。</p></li><li><p>使用阿里云的的时间服务器进行同步，2017 年 1 月 1 日的闰秒调整，阿里云服务器 NTP 系统 24 小时“消化”闰秒，完美解决了问题。</p></li><li><p>如果发现有时钟回拨，时间很短比如 5 毫秒，就等待，然后再生成。或者就直接报错，交给业务层去处理。</p></li></ul>',26),e={render:function(n,s){return p}}}}]);