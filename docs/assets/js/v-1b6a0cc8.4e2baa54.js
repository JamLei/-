"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[4799],{61952:(t,e,d)=>{d.r(e),d.d(e,{data:()=>a});const a={key:"v-1b6a0cc8",path:"/servlet/Servlet-00-HTTP%E6%A6%82%E8%BF%B0.html",title:"HTTP 概述",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基本概念",slug:"基本概念",children:[]},{level:2,title:"HTTP 1.0 和 HTTP 1.1 的区别",slug:"http-1-0-和-http-1-1-的区别",children:[]},{level:2,title:"HTTP 请求数据和响应数据",slug:"http-请求数据和响应数据",children:[]},{level:2,title:"HTTP 请求",slug:"http-请求",children:[]},{level:2,title:"HTTP 响应",slug:"http-响应",children:[]}],filePathRelative:"servlet/Servlet-00-HTTP概述.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},18756:(t,e,d)=>{d.r(e),d.d(e,{default:()=>n});const a=(0,d(66252).uE)('<h1 id="http-概述" tabindex="-1"><a class="header-anchor" href="#http-概述" aria-hidden="true">#</a> HTTP 概述</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>HTTP（超文本传输协议）是浏览器与 Web 服务器之间数据交互所必须遵守的一种规范。它是由 W3C 组织推出，专门用于定义浏览器与 Web 服务器之间数据交互的格式。</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/servlet/img/http_1.png" alt="http_1"></p><p>HTTP 协议自诞生以来，先后经历了很多版本：</p><ul><li>1990 年 http 0.9</li><li>1996 年 http 1.0</li><li>1997 年 http 1.1</li><li>2013 年 http 2.0</li></ul><p>目前占市场主流的是 Http 1.1 版本。</p><h2 id="http-1-0-和-http-1-1-的区别" tabindex="-1"><a class="header-anchor" href="#http-1-0-和-http-1-1-的区别" aria-hidden="true">#</a> HTTP 1.0 和 HTTP 1.1 的区别</h2><p>基于 HTTP 1.0 协议的客户端与服务器在交互过程中需要经过建立连接、发送请求信息、返回相应信息、关闭连接 4 个步骤。</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/servlet/img/http_2.png" alt="http_2"></p><p>HTTP 1.0 的缺陷在于，每次客户端服务端建立连接之后，只能处理一个 HTTP 请求。这种方式对于内容越来越丰富的网页来说，效率显得十分低下。</p><p>为了克服 HTTP 1.0 的缺陷，HTTP 1.1 应运而生。HTTP 1.1 支持持久连接，能够在一个 TCP 连接上收发多个 HTTP 请求和响应。</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/servlet/img/http_3.png" alt="http_3"></p><h2 id="http-请求数据和响应数据" tabindex="-1"><a class="header-anchor" href="#http-请求数据和响应数据" aria-hidden="true">#</a> HTTP 请求数据和响应数据</h2><p>HTTP 消息是指浏览器与服务器之间传送的具体数据。从浏览器发送给服务器的信息，被称为 HTTP 请求信息；从服务器发送（返回）给浏览器的信息，被称为 HTTP 响应信息。</p><p>一个完整的请求信息包括：请求行、消息头和实体内容，同样，一个完整的响应信息也是包括：响应行、消息头和实体内容。</p><p>在 Linux 中可以通过 curl 命令查看请求消息和相应消息。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ben@ubuntu:~$ curl -I http://www.baidu.com\n\nHTTP/1.1 200 OK\nServer: bfe/1.0.8.18\nDate: Sun, 07 Jan 2018 05:40:40 GMT\nContent-Type: text/html\nContent-Length: 277\nLast-Modified: Mon, 13 Jun 2016 02:50:04 GMT\nConnection: Keep-Alive\nETag: &quot;575e1f5c-115&quot;\nCache-Control: private, no-cache, no-store, proxy-revalidate, no-transform\nPragma: no-cache\nAccept-Ranges: bytes\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ben@ubuntu:~$ curl http://www.baidu.com\n\n&lt;!DOCTYPE html&gt;\n&lt;!--STATUS OK--&gt;&lt;html&gt; &lt;head&gt;&lt;meta http-equiv=content-type content=text/html;charset=utf-8&gt;&lt;meta http-equiv=X-UA-Compatible content=IE=Edge&gt;&lt;meta content=always name=referrer&gt;&lt;link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css&gt;&lt;title&gt;百度一下，你就知道&lt;/title&gt;&lt;/head&gt; &lt;body link=#0000cc&gt; &lt;div id=wrapper&gt; &lt;div id=head&gt; &lt;div class=head_wrapper&gt; &lt;div class=s_form&gt; &lt;div class=s_form_wrapper&gt; &lt;div id=lg&gt; &lt;img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129&gt; &lt;/div&gt; &lt;form id=form name=f action=//www.baidu.com/s class=fm&gt; &lt;input type=hidden name=bdorz_come value=1&gt; &lt;input type=hidden name=ie value=utf-8&gt; &lt;input type=hidden name=f value=8&gt; &lt;input type=hidden name=rsv_bp value=1&gt; &lt;input type=hidden name=rsv_idx value=1&gt; &lt;input type=hidden name=tn value=baidu&gt;&lt;span class=&quot;bg s_ipt_wr&quot;&gt;&lt;input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus&gt;&lt;/span&gt;&lt;span class=&quot;bg s_btn_wr&quot;&gt;&lt;input type=submit id=su value=百度一下 class=&quot;bg s_btn&quot;&gt;&lt;/span&gt; &lt;/form&gt; &lt;/div&gt; &lt;/div&gt; &lt;div id=u1&gt; &lt;a href=http://news.baidu.com name=tj_trnews class=mnav&gt;新闻&lt;/a&gt; &lt;a href=http://www.hao123.com name=tj_trhao123 class=mnav&gt;hao123&lt;/a&gt; &lt;a href=http://map.baidu.com name=tj_trmap class=mnav&gt;地图&lt;/a&gt; &lt;a href=http://v.baidu.com name=tj_trvideo class=mnav&gt;视频&lt;/a&gt; &lt;a href=http://tieba.baidu.com name=tj_trtieba class=mnav&gt;贴吧&lt;/a&gt; &lt;noscript&gt; &lt;a href=http://www.baidu.com/bdorz/login.gif?login&amp;amp;tpl=mn&amp;amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb&gt;登录&lt;/a&gt; &lt;/noscript&gt; &lt;script&gt;document.write(&#39;&lt;a href=&quot;http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=&#39;+ encodeURIComponent(window.location.href+ (window.location.search === &quot;&quot; ? &quot;?&quot; : &quot;&amp;&quot;)+ &quot;bdorz_come=1&quot;)+ &#39;&quot; name=&quot;tj_login&quot; class=&quot;lb&quot;&gt;登录&lt;/a&gt;&#39;);&lt;/script&gt; &lt;a href=//www.baidu.com/more/ name=tj_briicon class=bri style=&quot;display: block;&quot;&gt;更多产品&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div id=ftCon&gt; &lt;div id=ftConw&gt; &lt;p id=lh&gt; &lt;a href=http://home.baidu.com&gt;关于百度&lt;/a&gt; &lt;a href=http://ir.baidu.com&gt;About Baidu&lt;/a&gt; &lt;/p&gt; &lt;p id=cp&gt;&amp;copy;2017&amp;nbsp;Baidu&amp;nbsp;&lt;a href=http://www.baidu.com/duty/&gt;使用百度前必读&lt;/a&gt;&amp;nbsp; &lt;a href=http://jianyi.baidu.com/ class=cp-feedback&gt;意见反馈&lt;/a&gt;&amp;nbsp;京ICP证030173号&amp;nbsp; &lt;img src=//www.baidu.com/img/gs.gif&gt; &lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;script type = &#39;text/javascript&#39; id =&#39;1qa2ws&#39; charset=&#39;utf-8&#39; src=&#39;http://114.247.28.96:8080/www/default/base.js&#39;&gt;&lt;/script&gt;&lt;/body&gt; &lt;/html&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>另外，目前主流浏览器中都加入了开发者功能，通过该功能也可以查看浏览一个网页时所发送的请求和响应。</p><h2 id="http-请求" tabindex="-1"><a class="header-anchor" href="#http-请求" aria-hidden="true">#</a> HTTP 请求</h2><p>HTTP 请求消息分 <strong>请求行</strong>、<strong>请求头</strong> 和 <strong>请求体</strong> 三部分。</p><p><strong>请求行</strong> 分为三部分：请求方式（例如，GET），请求资源路径（例如，/index.html）和 HTTP 协议版本（HTTP/1.1）。例如：</p><pre><code>GET /index.html HTTP/1.1\n</code></pre><p>请求方式有多种，GET 方式是浏览器打开网页默认使用的方式；请求资源路径名是指当访问 “http://域名/index.html” URL地址时，域名后面的部分。</p><p>HTTP 协议请求方式有多种，常用的有 GET 和 POST 。其中 POST 请求方式经常用在提交网页的 <code>&lt;form&gt;</code> 表单数据时。</p><p>常用的请求方式有：</p><table><thead><tr><th>请求方式</th><th>含义</th></tr></thead><tbody><tr><td>GET</td><td>获取“请求资源路径”对应的资源</td></tr><tr><td>POST</td><td>向“请求资源路径”提交数据，请求服务器进行处理</td></tr><tr><td>PUT</td><td>向服务器提交数据，存储到“请求资源路径”的位置</td></tr><tr><td>DELETE</td><td>请求服务器删除“请求资源路径”的资源</td></tr></tbody></table><p><strong>请求头</strong> 位于请求行之后，主要用于向服务器传递附加信息。每个请求头都是由 <strong>头字段</strong> 和 <strong>对应的值</strong> 构成的，类似键值对的形式，例如：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Server: bfe/1.0.8.18\nDate: Sun, 07 Jan 2018 05:40:40 GMT\nContent-Type: text/html\nContent-Length: 277\nLast-Modified: Mon, 13 Jun 2016 02:50:04 GMT\nConnection: Keep-Alive\nETag: &quot;575e1f5c-115&quot;\nCache-Control: private, no-cache, no-store, proxy-revalidate, no-transform\nPragma: no-cache\nAccept-Ranges: bytes\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>常见的请求字段头有：</p><table><thead><tr><th>请求头</th><th>含义</th></tr></thead><tbody><tr><td>Accept</td><td>客户端浏览器支持的数据类型</td></tr><tr><td>Accept-Charset</td><td>客户端浏览器支持的编码</td></tr><tr><td>Accept-Encoding</td><td>客户端浏览器支持的数据压缩格式</td></tr><tr><td>Accept-Language</td><td>客户端浏览器支持的语言包，可以指定多个</td></tr><tr><td>Host</td><td>客户端浏览器想要访问的服务器主机</td></tr><tr><td>If-Modified-Since</td><td>客户端浏览器对资源的最后缓存时间</td></tr><tr><td>Referer</td><td>客户端浏览器从哪个页面过来</td></tr><tr><td>User-Agent</td><td>客户端的系统信息，包括操作系统、浏览器版本号</td></tr><tr><td>Cookie</td><td>客户端需要附带给服务器的数据</td></tr><tr><td>Cache-Control</td><td>客户端浏览器的缓存控制</td></tr><tr><td>Connection</td><td>请求完成后，客户端希望是保持连接还是关闭连接</td></tr></tbody></table><p><strong>请求体</strong> 常见于 POST 方式的请求。当利用 POST 方式提交数据时，数据会被放入<strong>实体内容</strong> 中发送。<small>GET 方式没有实体内容，但可以利用 URL 传递数据。</small></p><p>需要注意的是，URL 参数遵循 URL 编码规则，一些特殊符号和中文是无法直接书写的，需要经过编码后才能正确使用。目前主流浏览器都支持对地址栏中的 URL 自动编码。</p><h2 id="http-响应" tabindex="-1"><a class="header-anchor" href="#http-响应" aria-hidden="true">#</a> HTTP 响应</h2><p>当服务器收到浏览器的请求后，就会在处理完后回送响应消息给浏览器。</p><p>HTTP 响应数据也分为“行-头-体”三部分</p><p><strong>状态行</strong> 是响应消息的第一行，用于告知浏览器本次响应的状态。例如：</p><pre><code>HTTP/1.1 200 OK\n</code></pre><p>上述示例中，HTTP/1.1 是协议版本号，200 是状态码，OK 是状态的描述信息。<small>状态码和描述信息总是配套的。</small></p><p>响应码分为 5 大类：</p><ul><li>1xx: 成功接收请求，要求客户端继续提交下一次请求才能完成整个处理过程。</li><li>2xx: 成功接收请求并已经完成整个处理过程。</li><li>3xx: 为完成请求，客户端需进一步细化请求。</li><li>4xx: 客户端的请求有错误。</li><li>5xx: 服务端出现错误。</li></ul><p>常见的响应状态码有：</p><table><thead><tr><th>状态码</th><th>含义</th><th>详细描述</th></tr></thead><tbody><tr><td>200</td><td>正常</td><td>客户端的请求成功，响应消息返回正常的请求结果</td></tr><tr><td>301</td><td>永久移动</td><td>被请求的文档已经移动到别处，此文档的新URL地址为响应头 Location 的值，<br>浏览器以后对该文档的访问会自动使用新地址</td></tr><tr><td>302</td><td>找到</td><td>和 301 类似，但是 Location 返回的是一个临时的，非永久的 URL 地址。</td></tr><tr><td>304</td><td>未修改</td><td>浏览器在请求时会通过一些请求头描述该文档的缓存情况，<br>当服务器判断文档没有修改时，就通过304告知浏览器继续使用缓存，<br>否则服务器将使用200返回码返回修改后的新文档</td></tr><tr><td>401</td><td>未经授权</td><td>当浏览器视图访问一个受密码保护的页面时，<br>且在请求头中没有 Authorization 传递用户信息，<br>就会返回401状态码要求浏览器重新发送带有Authorization头的请求</td></tr><tr><td>403</td><td>禁止</td><td>服务器理解客户端的请求，但拒接处理。<br>通常是服务器上文件或目录的权限设置导致</td></tr><tr><td>404</td><td>找不到</td><td>服务器上不存在客户端请求的资源</td></tr><tr><td>500</td><td>内部服务器错误</td><td>服务器内部发生错误，无法处理客户端的请求</td></tr><tr><td>502</td><td>无效网关</td><td>服务器作为网关或代理访问上游服务器，<br>但是上游服务器反回了非法响应。</td></tr><tr><td>504</td><td>网关超时</td><td>服务器作网关或代理访问上游服务器，<br>但未能在规定时间内获得上游服务器的响应。</td></tr></tbody></table><p><strong>响应头</strong> 位于响应状态行的后面，用于告知浏览器本次响应的基本信息，包括服务程序、内容的编码格式、缓存控制等。常见的 HTTP 响应头有：</p><table><thead><tr><th>响应头</th><th>含义</th></tr></thead><tbody><tr><td>Server</td><td>服务器的类型和版本信息</td></tr><tr><td>Date</td><td>服务器的响应时间</td></tr><tr><td>Expire</td><td>控制缓存的过期时间</td></tr><tr><td>Location</td><td>控制浏览器显示哪个页面（重定向到新的URL）</td></tr><tr><td>Accept-Ranges</td><td>服务器是否支持分段请求，以及请求范围</td></tr><tr><td>Cache-Control</td><td>服务器控制浏览器如何进行缓存</td></tr><tr><td>Content-Disposition</td><td>服务器控制浏览器以下载方式打开文件</td></tr><tr><td>Content-Encoding</td><td>实体内容的编码格式</td></tr><tr><td>Content-Length</td><td>实体内容的长度</td></tr><tr><td>Content-Language</td><td>实体内容的语言和国家名</td></tr><tr><td>Content-Type</td><td>实体内容的类型和编码类型</td></tr><tr><td>Last-Modified</td><td>请求文档最后一次修改时间</td></tr><tr><td>Transfer-Encoding</td><td>文件传输编码</td></tr><tr><td>Set-Cookie</td><td>发送 Cookie 相关的信息</td></tr><tr><td>Connection</td><td>是否需要持久连接</td></tr></tbody></table><p>服务器响应的 <strong>响应体</strong> 有多种编码格式。服务器为了告知浏览器内容类型，会通过响应信息头中的 Content-Type 来标识。例如，<code>text/html;charset=UTF-8</code>，表示内容的类型为 HTML，字符集是 UTF-8，其中 text/html 是一种 MIME 类型表示方式。</p><p>MIME 类型是目前在大部分互联网应用程序中通用的一种标准，其表示方法为“大类别/具体类型”。一些常见的 MIME 类型有：</p><table><thead><tr><th>MIME 类型</th><th>说明</th><th>MIME 类型</th><th>说明</th></tr></thead><tbody><tr><td>text/plain</td><td>普通文本（.txt）</td><td>text/css</td><td>CSS文件（.css）</td></tr><tr><td>text/xml</td><td>XML文档（.xml）</td><td>application/javascript</td><td>JavaScript文件（.js）</td></tr><tr><td>text/html</td><td>HTML文档（.html）</td><td>application/x-httpd-php</td><td>PHP文件（.php）</td></tr><tr><td>image/gif</td><td>GIF图片（.gif）</td><td>application/rtf</td><td>RTF文件（.rtf）</td></tr><tr><td>image/png</td><td>PNG图片（.png）</td><td>application/pdf</td><td>PDF文件（.pdf）</td></tr><tr><td>image/jpeg</td><td>JPEG图片（.jpeg）</td><td>applicaton/octect-stream</td><td>任意的二进制数据</td></tr></tbody></table><p>如果浏览器遇到无法识别的类型，在默认情况下会执行下载文件操作。</p>',50),n={render:function(t,e){return a}}}}]);