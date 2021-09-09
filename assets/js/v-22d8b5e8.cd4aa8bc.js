"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[3466],{29085:(n,t,s)=>{s.r(t),s.d(t,{data:()=>a});const a={key:"v-22d8b5e8",path:"/ajax/AJAX-01-%E5%9F%BA%E7%A1%80.html",title:"AJAX 基础",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基本概念",slug:"基本概念",children:[]},{level:2,title:"HTTP 请求的 content-type",slug:"http-请求的-content-type",children:[]},{level:2,title:"HTTP 响应的 content-type",slug:"http-响应的-content-type",children:[]},{level:2,title:"AJAX 请求和 content-type",slug:"ajax-请求和-content-type",children:[]},{level:2,title:"application/json 和 request.getReader()",slug:"application-json-和-request-getreader",children:[]},{level:2,title:"人造『奇葩』请求",slug:"人造『奇葩』请求",children:[{level:3,title:"人造奇葩请求一",slug:"人造奇葩请求一",children:[]},{level:3,title:"人造“奇葩”请求二",slug:"人造-奇葩-请求二",children:[]},{level:3,title:"人造奇葩请求三",slug:"人造奇葩请求三",children:[]}]}],filePathRelative:"ajax/AJAX-01-基础.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},79125:(n,t,s)=>{s.r(t),s.d(t,{default:()=>e});const a=(0,s(66252).uE)('<h1 id="ajax-基础" tabindex="-1"><a class="header-anchor" href="#ajax-基础" aria-hidden="true">#</a> AJAX 基础</h1><blockquote><p>结合 Postman 验证本章节内容。</p></blockquote><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>传统 Web 应用的缺点：</p><ul><li><p>独占式的请求</p></li><li><p>频繁的页面刷新</p></li></ul><p>当下的前端开发通常都会借助 Ajax 技术，Ajax 并没有太多新的内容，但 Ajax 丰富了前端开发的功能。</p><p>Ajax 技术的核心概念就是两个：『<strong>异步</strong>』和『<strong>局部刷新</strong>』。</p><p>AJAX 的全称是 Asynchronous JavaScript XML（异步 JavaScript 和 XML），从 AJAX 的组合名称可以看出 AJAX 其实并不是一种技术，而是多种技术的组合，每种技术都有其独特之处，合在一起就成了功能强大的技术。AJAX 的出现揭开了无刷新页面的新时代。</p><p>利用 AJAX 技术， Web 前端只需要在后台与服务器进行少量数据交换。</p><p>AJAX 采用了异步交互的方式，从而改变了同步交互过程中的“请求 - 等待 - 请求 - 等待”的模式。</p><p>异步，是指基于 Ajax 的应用与服务器通信的方式。对于</p><ul><li>传统的 Web 应用，每次用户发送请求，向服务器请求获得新数据时，浏览器都会完全丢弃当前页面，而等待重新加载新的页面。而在服务器完全响应之前，用户浏览器将一片空白，用户的动作必须中断。而</li><li>异步是指用户发送请求后，无须等待，请求在后台发送，不会阻塞用户当前活动。用户无须等待第一次请求得到完全响应，即可发送第二次请求。</li></ul><p>简单来说，AJAX 的工作原理是通过 <strong>xmlHttpRequest</strong> 对象来向服务器发出异步请求。<strong>xmlHttprequest</strong> 可以同步或异步返回 Web 服务器的响应，并且能以文本或一个 DOM 文档形式返回内容。</p><p>普通的 Web 项目的工作流程是：</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/ajax/img/ajax_1.png" alt="ajax_1"></p><blockquote><ol><li>发起 &lt;请求-1&gt;</li><li>获得 &lt;页面-1&gt;</li><li>发起 &lt;请求-2&gt;</li><li>获得 &lt;页面-2&gt;</li><li>发起 &lt;请求-3&gt;</li><li>获得 &lt;页面-3&gt;</li><li>...</li></ol></blockquote><p>Ajax 的 Web 项目的流程是：</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/ajax/img/ajax_2.png" alt="ajax_2"></p><blockquote><ol><li>发起 &lt;请求-1&gt;</li><li>获得 &lt;页面-1&gt;</li><li>发起 &lt;请求-2&gt;</li><li>获得 数据，修改 &lt;页面-1&gt;</li><li>发起 &lt;请求-3&gt;</li><li>获得 数据，修改 &lt;页面-1&gt;</li><li>...</li></ol></blockquote><p>Ajax 的核心是 <strong>XMLHttpRequest</strong> 对象（<small>首次出现于 IE5，如今已被 HTML5 制定为正式规范。</small>）。XMLHttpRequest 提供了异步通信的能力，通过它浏览器可以向服务器发送异步的请求，也可通过它读取服务器响应。</p><p>JavaScript 主要完成 Ajax 如下事情：</p><ul><li><p>创建 <strong>XMLHttpRequest</strong> 对象；</p></li><li><p>通过 <strong>XMLHttpRequest</strong> 对象向服务器发送请求；</p></li><li><p>创建回调函数，监视服务器响应状态，在服务器响应完成后，回调函数启动；</p></li><li><p>回调函数通过 DOM 动态更新 HTML 页面；</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建XMLHttpRequest对象</span>\n\n<span class="token comment">// ajax 是异步的，设置回调函数</span>\nrequest<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 状态发生变化时，函数被回调</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 成功完成</span>\n        <span class="token comment">// 判断响应状态码</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 成功，通过 responseText 拿到响应的文本:</span>\n            <span class="token keyword">return</span> <span class="token function">success</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 失败，根据响应码判断失败原因:</span>\n            <span class="token keyword">return</span> <span class="token function">fail</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token comment">// HTTP 请求还在继续...</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 发送请求:</span>\nrequest<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/api/categories&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrequest<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span> <span class="token comment">//设置请求头</span>\nrequest<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//到这一步，请求才正式发出</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="http-请求的-content-type" tabindex="-1"><a class="header-anchor" href="#http-请求的-content-type" aria-hidden="true">#</a> HTTP 请求的 content-type</h2><p>HTTP 请求的请求头中会有一个较为重要的键值对：<strong>content-type</strong>，它的值常见有 2 个：<strong>application/x-www-form-urlencoded</strong> 和 <strong>application/json</strong> 。</p><p>HTTP 请求的 <strong>content-type</strong> 决定了：本次请求所提交的参数<small>（例如，登录请求所携带的用户名和密码信息）</small>是 <strong>Query String</strong> 格式，还是 <strong>JSON String</strong> 格式。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>HTTP 请求提交的参数数据，无论是 Query String 格式，还是 JSON String 格式，都只是格式的不同，其数据内容是完全一致的。</p></div><blockquote><p>就像同样一句话，<small>（在不考虑同音字引起歧义的情况下）</small>我用拼音写，还是用汉字写，本质上并没有区别，两种写法传递的信息，表达的含义是一样的，它们只是『写法』不同而已。</p></blockquote><ul><li><p><strong>Query String</strong></p><p>如果，你的 HTTP 请求头中的 <strong>content-type</strong> 的值为 <strong>application/x-www-form-urlencoded</strong> 。那么，你的登录请求的请求参数<small>（用户名和密码）</small>，就应该是 <strong>Query String</strong> 形式。形如：</p><pre><code>username=tom&amp;password=123456\n</code></pre></li><li><p><strong>JSON String</strong></p><p>如果，你的 HTTP 请求的 <strong>content-type</strong> 的值为 application/json。那么，你的登录请求的参数<small>（用户名和密码）</small>，就因该是 <strong>JSON String</strong> 形式。形如：</p><pre><code>{ &quot;username&quot; : &quot;tom&quot;, &quot;password&quot; : &quot;123456&quot; }\n</code></pre></li></ul><p>再次强调一遍，上述的两种格式，显而易见，只是格式的不同。它俩表达的含义、传递的数据本质上是一样的！</p><h2 id="http-响应的-content-type" tabindex="-1"><a class="header-anchor" href="#http-响应的-content-type" aria-hidden="true">#</a> HTTP 响应的 content-type</h2><p>HTTP 响应的响应头中也有一个 <strong>content-type</strong> 键值对，它的值我们常见两种：<strong>text/html</strong> 和 <strong>application/json</strong> 。</p><p>HTTP 响应头中的 content-type 决定了：浏览器接收到你<small>（通过 Tomcat）</small>发回给它的数据之后，它接下来干什么。</p><ul><li><p>如果，你的 HTTP 响应的 content-type 的值为 <code>text/html</code> 。那么，你<small>（通过 Tomcat）</small>回给浏览器的数据『理应』是一个 HTML 格式的字符串。</p></li><li><p>如果，你的 HTTP 响应的 content-type 的值为 <code>application/json</code> 。那么，你<small>（通过 Tomcat）</small>回给浏览器的数据『理应』一个 JSON 格式字符串。</p></li></ul><h2 id="ajax-请求和-content-type" tabindex="-1"><a class="header-anchor" href="#ajax-请求和-content-type" aria-hidden="true">#</a> AJAX 请求和 content-type</h2><p>当前浏览器发出的是否是 AJAX 请求与 content-type 无关，而是与是否使用了 JavaScript 的 XMLHttpRequest 有关。</p><p>所以一个常见的『<strong>标准错误答案</strong>』是：HTTP 请求头的 <strong>content-type</strong> 的值为 <strong>application/json</strong> ，则意味着当前请求是 AJAX 请求。</p><p>正确的观点应该是：AJAX 请求只和 <strong>XMLHttpRequest</strong> 对象有关。通过 <strong>XMLHttpRequest</strong> 发出的请求就是 AJAX 请求，反之则不是。</p><table><thead><tr><th style="text-align:left;">#</th><th style="text-align:left;">参数风格</th><th style="text-align:left;">content-type</th><th style="text-align:left;">Servlet 获取参数</th></tr></thead><tbody><tr><td style="text-align:left;">普通请求一</td><td style="text-align:left;">query-string 格式</td><td style="text-align:left;">application/x-www-form-urlencoded</td><td style="text-align:left;">request.getParameter()</td></tr><tr><td style="text-align:left;">普通请求二</td><td style="text-align:left;">json-string 格式</td><td style="text-align:left;">application/json</td><td style="text-align:left;">request.getReader()</td></tr><tr><td style="text-align:left;">AJAX 请求一</td><td style="text-align:left;">query-string 格式</td><td style="text-align:left;">application/x-www-form-urlencoded</td><td style="text-align:left;">request.getParameter()</td></tr><tr><td style="text-align:left;">AJAX 请求二</td><td style="text-align:left;">json-string 格式</td><td style="text-align:left;">application/json</td><td style="text-align:left;">request.getReader()</td></tr></tbody></table><p>其中，<code>普通请求二</code> 比较少见。</p><h2 id="application-json-和-request-getreader" tabindex="-1"><a class="header-anchor" href="#application-json-和-request-getreader" aria-hidden="true">#</a> application/json 和 request.getReader()</h2><p>由于 Servlet 中的 <strong>request.getParameter(&quot;...&quot;)</strong> 只对 <strong>content-type</strong> 值为 <strong>application/x-www-form-urlencoded</strong> 的情况有效有效。</p><p>当你的请求参数风格是 json-string 风格，即，HTTP 请求头的c ontent-type 值为 application/json 时，你的 Servlet 中的 <strong>request.getParameter(&quot;...&quot;)</strong> 方法的值为 <strong>null</strong>，是获取不到页面提交的参数的。</p><p>这种情况下，你需要自己“想办法”从 HTTP 请求的 Body 中，将请求参数取出来：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">String</span> str<span class="token punctuation">,</span> wholeStr <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>str <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    wholeStr <span class="token operator">+=</span> str<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>wholeStr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="人造『奇葩』请求" tabindex="-1"><a class="header-anchor" href="#人造『奇葩』请求" aria-hidden="true">#</a> 人造『奇葩』请求</h2><p>下面几种请求方式，在我们通过浏览器向后台发出 HTTP 请求时，是无法出现的，浏览器不会组装出这样的 HTTP 请求。它们都是我们通过 postman 这样的客户端工具<small>（或其它方式）</small>人为『造』出来的『奇葩』情况。</p><p>这些请求都是属于『看起来合乎 HTTP 规则要求，但是大家都不会这么用』的情况。</p><h3 id="人造奇葩请求一" tabindex="-1"><a class="header-anchor" href="#人造奇葩请求一" aria-hidden="true">#</a> 人造奇葩请求一</h3><ul><li><p>参数格式为 query-string 风格，但是 HTTP 请求头的 content-type 值为 application/json；</p></li><li><p>参数格式为 json-string 风格，但是 HTTP 请求头的 content-type 值为 application/x-www-form-urlencoded。</p></li></ul><p>上面两种都是属于：我口头告诉你我给你的是个苹果，但是实际上我手里递给你的是个梨。</p><p>虽然看似没有报错，它俩都属于逻辑上的 bug，本不应该出现这样的情况。</p><h3 id="人造-奇葩-请求二" tabindex="-1"><a class="header-anchor" href="#人造-奇葩-请求二" aria-hidden="true">#</a> 人造“奇葩”请求二</h3><p>发出 GET 请求，提交的参数是 json-string 风格，放在 HTTP 请求体中，HTTP 请求头中 content-type 值为 application/json 。</p><p>上诉请求的“奇葩”之处在于：</p><ol><li>正常情况下，Get 请求的请求参数一般都是 query-string 风格，<small>而不是 json-string；</small></li><li>正常情况下，Get 请求的请求参数都是拼接在 URL 后面，写在 HTTP 请求行中的，<small>而不是在请求体中；</small></li><li>正常情况下，Get 请求由于请求体中无内容，它的 HTTP 请求头中是没有 content-type 键值对的。</li></ol><p>相较于 <code>奇葩请求一</code> 而言，这样的请求不算太奇葩，因为，它不是一种错，只是少见。<small>大家更习惯于 get 的参数以 query-string 的格式拼接在 URL 后面，放在 HTTP 请求头中，HTTP 请求体空着。</small></p><p>有可能你会遇到这种请求，它并非特别“奇葩”、罕见。</p><h3 id="人造奇葩请求三" tabindex="-1"><a class="header-anchor" href="#人造奇葩请求三" aria-hidden="true">#</a> 人造奇葩请求三</h3><p>发出 POST 请求，提交的参数是 query-string，拼接在 URL 后面，放在 HTTP 请求行中。由于 HTTP 请求体中是空的，所有 HTTP 请求头中没有 content-type 键值对。</p><p>这种请求的奇葩之处在于：既然你想这么干，为什么不用 get 请求？</p><p>『完』</p>',62),e={render:function(n,t){return a}}}}]);