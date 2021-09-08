"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[353],{73945:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-36a5610e",path:"/windows/14-Elasticsearch%E8%A7%A3%E5%8E%8B%E7%89%88.html",title:"Elasticsearch 解压版",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装 Elasticsearch",slug:"安装-elasticsearch",children:[{level:3,title:"下载解压",slug:"下载解压",children:[]},{level:3,title:"配置",slug:"配置",children:[]},{level:3,title:"运行",slug:"运行",children:[]}]},{level:2,title:"安装 Kibana",slug:"安装-kibana",children:[{level:3,title:"下载",slug:"下载",children:[]},{level:3,title:"配置",slug:"配置-1",children:[]}]},{level:2,title:"安装 IK 分词器",slug:"安装-ik-分词器",children:[]}],filePathRelative:"windows/14-Elasticsearch解压版.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},98945:(s,a,n)=>{n.r(a),n.d(a,{default:()=>A});var e=n(66252);const t=(0,e.uE)('<h1 id="elasticsearch-解压版" tabindex="-1"><a class="header-anchor" href="#elasticsearch-解压版" aria-hidden="true">#</a> Elasticsearch 解压版</h1><p>有些软件对于安装路径有一定的要求，例如：路径中不能有空格，不能有中英文，不能有特殊符号，等等。</p><p>为了避免不必要的麻烦，也懒得一一辨别踩坑，我们人为作出「<strong>统一的约定</strong>」：</p><ul><li><p>安装版的软件，一律安装在软件的默认安装路径，不要去改变它。<small>默认在哪就是哪，别动。</small></p></li><li><p>解压版的软件，一律安装在：<strong>D:\\ProgramFiles</strong> 。这是一个没中文、没空格的路径！</p></li></ul><blockquote><p>Elasticsearch 只有解压版本，没有安装版</p></blockquote>',5),l=(0,e.Uk)("Elastic 官网："),p={href:"https://www.elastic.co/cn/",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("https://www.elastic.co/cn/"),o=(0,e.uE)('<p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/es-install-01.png" alt=""></p><p>Elastic 有一条完整的产品线及解决方案：Elasticsearch、Kibana、Logstash 等，前面说的三个就是大家常说的 ELK 技术栈。</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/es-install-02.png" alt=""></p><p>Elasticsearch 具备以下特点：</p><ul><li><p>分布式，无需人工搭建集群<small>（solr 就需要人为配置，使用 Zookeeper 作为注册中心）</small>；</p></li><li><p>Restful 风格，一切 API 都遵循 Restful 原则，容易上手；</p></li><li><p>近实时搜索，数据更新在 Elasticsearch 中几乎是完全同步的。</p></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>kibana 从 7.11 开始升级了 node.js 的版本，因此，从这个版本开始不再支持 win7，也就是说，win7 能使用的 kibana 的最后的版本是 <strong>7.10.2</strong> 。</p></div><h2 id="安装-elasticsearch" tabindex="-1"><a class="header-anchor" href="#安装-elasticsearch" aria-hidden="true">#</a> 安装 Elasticsearch</h2><h3 id="下载解压" tabindex="-1"><a class="header-anchor" href="#下载解压" aria-hidden="true">#</a> 下载解压</h3><blockquote><p>解压路径中不要有中文和空格！</p></blockquote><p>从官网下载 Elasticsearch 和 Kibana，<small>注意两者版本要一致，例如，必须都是 <code>7.10.2</code> 。</small></p><blockquote><p>如果是在 Linux 安装运行，需要注意的是，出于安全考虑，elasticsearch 默认不允许以 root 账号运行。</p></blockquote><p>将 Elasticsearch 和 Kibana 解压到 <code>D:\\ProgramFiles</code> 。</p><p>两者的目录分别是：</p><ul><li><p>D:\\ProgramFiles\\elasticsearch-7.10.2</p></li><li><p>D:\\ProgramFiles\\kibana-7.10.2-windows-x86_64</p></li></ul><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p><em>本步骤是可选操作</em></p><p>我们进入 <code>elasticsearch-7.10.2/config</code> 目录：</p><p>需要修改的配置文件有两个：</p><ul><li><p>elasticsearch.yml</p></li><li><p>jvm.options</p></li></ul><h4 id="jvm-options" tabindex="-1"><a class="header-anchor" href="#jvm-options" aria-hidden="true">#</a> jvm.options</h4><p>Elasticsearch 基于 Lucene 的，而 Lucene 底层是 java 实现，因此我们需要配置 jvm 参数。</p><p>编辑 jvm.options：</p><ul><li><p>默认配置如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-Xms1g\n-Xmx1g\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>内存占用太多了，我们调小一些：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-Xms512m\n-Xmx512m\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h4 id="elasticsearch-yml" tabindex="-1"><a class="header-anchor" href="#elasticsearch-yml" aria-hidden="true">#</a> elasticsearch.yml</h4><p><code>elasticsearch.yml</code> 配置文件暂时不用改动。</p><h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3><p>进入 <code>elasticsearch-7.10.2\\bin</code> 目录</p>',27),r=(0,e.Uk)("双击 "),c=(0,e._)("code",null,"elasticsearch.bat",-1),u=(0,e.Uk)("，启动成功时，会显示 "),d=(0,e._)("code",null,"started",-1),h=(0,e.Uk)(" 字样，并且可我们在浏览器中访问："),m={href:"http://127.0.0.1:9200",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("http://127.0.0.1:9200"),k=(0,e.Uk)("，可见类似如下内容："),g=(0,e.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;DESKTOP-T540P&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;cluster_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;elasticsearch&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;cluster_uuid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;XvelzExUQgud2iqO9QLA4w&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;number&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;7.10.2&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build_flavor&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;zip&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build_hash&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;747e1cc71def077253878a59143c1f785afa92b9&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2021-01-13T00:42:12.435326Z&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build_snapshot&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lucene_version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;8.7.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;minimum_wire_compatibility_version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;6.8.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;minimum_index_compatibility_version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;6.0.0-beta1&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;tagline&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;You Know, for Search&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="安装-kibana" tabindex="-1"><a class="header-anchor" href="#安装-kibana" aria-hidden="true">#</a> 安装 Kibana</h2><p>Kibana 是一个基于 Node.js 的 Elasticsearch 索引库数据统计工具，可以利用 Elasticsearch 的聚合功能，生成各种图表，如柱形图，线状图，饼图等。</p><p>而且还提供了操作 Elasticsearch 索引数据的控制台，并且提供了一定的 API 提示，非常有利于我们学习 Elasticsearch 的语法。</p><p>版本与 elasticsearch 保持一致，也是 <code>7.10.2</code> 。</p><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><blockquote><p>解压路径中不要有中文和空格！</p></blockquote><p>略</p><p><strong>务必保证 Kibana 和 Elasticsearch<small>（以及未来的 IK 分词器）</small>版本号相同！</strong></p><p><strong>务必保证 Kibana 和 Elasticsearch<small>（以及未来的 IK 分词器）</small>版本号相同！</strong></p><p><strong>务必保证 Kibana 和 Elasticsearch<small>（以及未来的 IK 分词器）</small>版本号相同！</strong></p><h3 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h3><p>进入 <strong>kibana-7.10.2-windows-x86_64/config</strong> 目录，查看其配置文件 <strong>kibana.yml</strong> 配置文件。</p><p>该配置文件中，最重要的一项配置是 <code>elasticsearch.hosts</code><small>（该配置项以前叫 <em>elasticsearch.url</em> ）</small>，该配置项要指向 Elasticsearch 服务器的访问地址和端口。</p><p>例如: <code>http://192.168.56.101:9200</code>。如果，Elasticsearch 在你的本机，那么这个地址就是 <code>http://localhost:9200</code> 或者是 <code>http://127.0.0.1:9200</code> 。</p>',15),q=(0,e.Uk)("进入 Kibana 安装目录下的 "),v=(0,e._)("strong",null,"bin",-1),_=(0,e.Uk)(" 目录，双击 "),f=(0,e._)("strong",null,"kibana.bat",-1),x=(0,e.Uk)(" 启动。"),y=(0,e._)("small",null,"（启动过程比较耗时，耐心等待）",-1),E=(0,e.Uk)("。发现 kibana 的监听端口是 5601 。因此，我们可访问："),w={href:"http://127.0.0.1:5601",target:"_blank",rel:"noopener noreferrer"},j=(0,e.Uk)("http://127.0.0.1:5601"),K=(0,e._)("h2",{id:"安装-ik-分词器",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#安装-ik-分词器","aria-hidden":"true"},"#"),(0,e.Uk)(" 安装 IK 分词器")],-1),U=(0,e.Uk)("IK 分词器的下载地址在 "),I={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},P=(0,e._)("em",null,"https://github.com/medcl/elasticsearch-analysis-ik/releases",-1),L=(0,e.uE)('<p>将 elasticsearch-analysis-ik <small>（版本与 Elasticsearch 一致）</small>解压到 Elasticsearch 目录的 <code>plugins</code> 目录<small>（<code>elasticsearch-7.10.2\\plugins</code>）</small>中：</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/es-ik-install-01.png" alt="es-ik-install-01"></p><p>注意目录结构及目录名！<small>另外，plugins 目录中不要有无关的内容。</small></p><p>注意目录结构及目录名！<small>另外，plugins 目录中不要有无关的内容。</small></p><p>注意目录结构及目录名！<small>另外，plugins 目录中不要有无关的内容。</small></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>elasticsearch\n│── plugins\n│    └── analysis-ik\n│        ├── commons-codec-1.9.jar\n│        └── 其它内容\n└── 其它内容\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/es-ik-install-02.png" alt="es-ik-install-02"></p><p>然后重启 elasticsearch 。</p><ul><li><p>测试分词器</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>POST _analyze\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;analyzer&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;text&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;中国驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><p>IK 分词器有两种类型：</p><table><thead><tr><th style="text-align:left;">IK 分词器类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">ik_smart</td><td style="text-align:left;">会做最粗粒度的拆分。</td></tr><tr><td style="text-align:left;">ik_max_word</td><td style="text-align:left;">会将文本做最细粒度的拆分，会穷尽各种可能。</td></tr></tbody></table><p>以上述例子为例，<code>ik_max_word</code> 拆出了 15 项，而 <code>ik_smart</code> 拆出 11 项<small>（不同版本的 ik 分词器可能会略有不同）</small>。</p>',12),A={render:function(s,a){const n=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[l,(0,e._)("a",p,[i,(0,e.Wm)(n)])]),o,(0,e._)("p",null,[r,c,u,d,h,(0,e._)("a",m,[b,(0,e.Wm)(n)]),k]),g,(0,e._)("p",null,[q,v,_,f,x,y,E,(0,e._)("a",w,[j,(0,e.Wm)(n)])]),K,(0,e._)("p",null,[U,(0,e._)("a",I,[P,(0,e.Wm)(n)])]),L],64)}}}}]);