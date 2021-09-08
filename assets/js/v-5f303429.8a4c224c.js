"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[5636],{41340:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-5f303429",path:"/spring-mvc/105-%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E8%AE%BF%E9%97%AE.html",title:"SpringMVC 中的静态资源访问",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"后缀形式没有『静态资源访问』问题",slug:"后缀形式没有『静态资源访问』问题",children:[]},{level:2,title:"/ 和 /* 会遇到『静态资源访问』问题",slug:"和-会遇到『静态资源访问』问题",children:[]},{level:2,title:"解决方案一",slug:"解决方案一",children:[]},{level:2,title:"解决方案二",slug:"解决方案二",children:[]}],filePathRelative:"spring-mvc/105-静态资源访问.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},28161:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(66252).uE)('<h1 id="springmvc-中的静态资源访问" tabindex="-1"><a class="header-anchor" href="#springmvc-中的静态资源访问" aria-hidden="true">#</a> SpringMVC 中的静态资源访问</h1><h2 id="后缀形式没有『静态资源访问』问题" tabindex="-1"><a class="header-anchor" href="#后缀形式没有『静态资源访问』问题" aria-hidden="true">#</a> 后缀形式没有『静态资源访问』问题</h2><p>如果你将 DispatcherServlet 的 <strong>url-pattern</strong> 配置成后缀形式，<small>例如，<code>*.do</code></small>，那么，DispatcherServlet 就只会处理特定形式的请求，而将静态资源的请求 URI『漏给』Servlet 容器提供的 Default Servlet 。</p><p>而 Servlet 容器的 Defautl Servlet 的处理逻辑是：将 URI 看作一个文件的路径名，在对应的位置去找这个文件，读取其内容，并将读到的内容发回给请求方。这也正是我们期望的对静态资源的处理方式。</p><blockquote><p>因此，非 RESTful 风格的 Java Web 项目就采用这种方案。不要无缘无故去掉 URI 中的后缀，自找麻烦。</p></blockquote><h2 id="和-会遇到『静态资源访问』问题" tabindex="-1"><a class="header-anchor" href="#和-会遇到『静态资源访问』问题" aria-hidden="true">#</a> / 和 /* 会遇到『静态资源访问』问题</h2><p>当你将 <strong>DispatcherServlet</strong> 的 <strong>&lt;url-pattern&gt;</strong> 配置成 <strong><code>/</code></strong> 或 <strong><code>/*</code></strong> 时，会遇到静态资源访问问题。</p><p>不过，它俩的原因不太一样：</p><ul><li><p><strong>&lt;url-pattern&gt;/&lt;/url-pattern&gt;</strong> 的原因</p><p>由于 url-pattern 设置成了 <strong><code>/</code></strong> ，因此，<strong>DispatcherServlet</strong> 的身份将变为『Default Servlet』，而 Servlet 容器自带的『Default Servlet』则不再起作用。</p><p>但问题是，DispatcherServlet 的对 URI 的处理逻辑中又没有像 Servlet 容器自带的『Default Servlet』那样的处理静态资源的逻辑，那么最终，Dispatcher Servlet 最终无法对静态资源访问的 URI 做出正确处理，而导致 404 。</p></li><li><p><strong>&lt;url-pattern&gt;/*&lt;/url-pattern&gt;</strong> 的原因</p><p>由于 url-pattern 设置成了 <strong><code>/*</code></strong> ，而 <strong><code>/*</code></strong> 的优先级和范畴又异常强大，因此，啥请求都走到了 <strong>DispatcherServelt</strong> 这里，包括静态资源请求。</p><p>虽然，Servlet 容器自带的『Default Servlet』此时是存在的，但是没有任何请求会『漏到』它这里，它会『闲着无所事事』。</p><p>在 Servlet 容器自带的『Default Servlet』闲得蛋疼的同时，DispatcherServlet 的对 URI 的处理逻辑中又没有对静态资源的处理逻辑，那么最终，Dispatcher Servlet 最终无法对静态资源访问的 URI 做出正确处理，而导致 404 。</p></li></ul><h2 id="解决方案一" tabindex="-1"><a class="header-anchor" href="#解决方案一" aria-hidden="true">#</a> 解决方案一</h2><p>通过配置，让 DispatcherServlet 去『利用』Servlet 容器的自带的『Default Servlet』，这样，从外观上看，DispatcherServlet 就具备了处理静态资源的能力，自然也就解决了静态资源访问问题。</p><ul><li><p>配置文件版：spring-web.xml</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>default-servlet-handler</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>考虑到并非所有的容器的默认的 DefaultSevlet 的 name 并非是 <strong>default</strong> ，所以在非 Tomcat 容器中，需要手动指定其 name 。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>default-servlet-handler</span> <span class="token attr-name">default-servlet-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“所使用的</span> <span class="token attr-name">Web</span> <span class="token attr-name">服务器默认使用的</span> <span class="token attr-name">Servlet</span> <span class="token attr-name">名称”</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>Tomcat, Jetty, JBoss, and GlassFish：&quot;default&quot;</p></li><li><p>Google App Engine：&quot;_ah_default&quot;</p></li><li><p>WebLogic：&quot;FileServlet&quot;</p></li><li><p>WebSphere：&quot;SimpleFileServlet&quot;</p></li></ul></li><li><p>Java 代码配置版：SprinbWebConfig.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureDefaultServletHandling</span><span class="token punctuation">(</span><span class="token class-name">DefaultServletHandlerConfigurer</span> configurer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    configurer<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><h2 id="解决方案二" tabindex="-1"><a class="header-anchor" href="#解决方案二" aria-hidden="true">#</a> 解决方案二</h2><p>再通过配置<small>（<strong>mvc:resources</strong>）</small>『告诉』DispatcherServlet，哪些请求是静态资源请求，<small>而不是 Servlet 请求</small>。</p><p>假定项目的目录结构如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>webapp\n│── img\n│   ├── ...\n│   └── ...\n│── js\n│   ├── ...\n│   └── ...\n│── css\n│   ├── ...\n│   └── ...\n└── WEB-INF\n    └── jsp\n        ├── ...\n        └── ...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>.jsp 页面类似如下：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>${pageContext.request.contextPath}/css/bootstrap.min.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>${pageContext.request.contextPath}/js/jquery.2.1.1.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>${pageContext.request.contextPath}/js/bootstrap.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们需要表达这样的逻辑：但凡以 <strong>/xxx</strong> 开始的请求，都是针对 <strong>/xxx/</strong> 目录下的静态资源的访问。</p><ul><li><p>配置文件版：spring-web.xml</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xxx/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xxx/**<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>   \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>location</strong> 元素表示 <strong>webapp</strong> 目录下的 <strong>xxx</strong> 目录；<strong>mapping</strong> 元素表示以 <strong>/xxx</strong> 开头的所有请求路径。</p><p>例如：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/img/**<span class="token punctuation">&quot;</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/img/<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>   \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/js/**<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/js/<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>    \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>resources</span> <span class="token attr-name">mapping</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/css/**<span class="token punctuation">&quot;</span></span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/css/<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>代码配置版：SpringWebConfig.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    registry\n        <span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/img/**&quot;</span><span class="token punctuation">)</span> \n            <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/img/&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/js/**&quot;</span><span class="token punctuation">)</span> \n            <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/js/&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/css/**&quot;</span><span class="token punctuation">)</span> \n            <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/css/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// classpath: 可省略</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul>',20),e={render:function(n,s){return t}}}}]);