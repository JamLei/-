"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[8779],{25499:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-582b9e74",path:"/windows/20-nodejs-npm.html",title:"node.js 和 NPM 的安装",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"01. node.js 和 npm 的下载安装",slug:"_01-node-js-和-npm-的下载安装",children:[]},{level:2,title:"02. npm 的全局安装和局部安装",slug:"_02-npm-的全局安装和局部安装",children:[]},{level:2,title:"03. 中央仓库和淘宝镜像",slug:"_03-中央仓库和淘宝镜像",children:[]},{level:2,title:"04. npm 全局安装包及使用",slug:"_04-npm-全局安装包及使用",children:[]},{level:2,title:"05. 设置 cache 和 prefix",slug:"_05-设置-cache-和-prefix",children:[]},{level:2,title:"06. npm 局部安装包及使用",slug:"_06-npm-局部安装包及使用",children:[]},{level:2,title:"07. 两种安装方式的由来（了解、自学）",slug:"_07-两种安装方式的由来-了解、自学",children:[]},{level:2,title:"08. 命令总结",slug:"_08-命令总结",children:[]}],filePathRelative:"windows/20-nodejs-npm.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},8693:(n,s,a)=>{a.r(s),a.d(s,{default:()=>x});var e=a(66252);const p=(0,e._)("h1",{id:"node-js-和-npm-的安装",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#node-js-和-npm-的安装","aria-hidden":"true"},"#"),(0,e.Uk)(),(0,e._)("strong",null,"node.js 和 NPM 的安装")],-1),t=(0,e._)("h2",{id:"_01-node-js-和-npm-的下载安装",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_01-node-js-和-npm-的下载安装","aria-hidden":"true"},"#"),(0,e.Uk)(" 01. node.js 和 npm 的下载安装")],-1),l=(0,e.Uk)("在 "),r={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("官网"),d=(0,e.Uk)(" 下载 node 的长期支持"),i=(0,e._)("small",null,"（LTS）",-1),c=(0,e.Uk)("版本。例如，当前"),g=(0,e._)("small",null,"（2020-11-5）",-1),m=(0,e.Uk)("最新的长期支持版是 "),u=(0,e._)("strong",null,"node-v14.15.0",-1),b=(0,e.Uk)(" 。"),h=(0,e.uE)('<blockquote><p>Windows 7 只能安装 v13.14 版，更高的版本不支持 Win 7 。</p></blockquote><p>node 的安装包中已包含 npm 。无需再找 npm 的安装包。</p><p>安装结束后，直接在命令行<small>（cmd）</small>中执行 <strong>node -v</strong> 和 <strong>npm -v</strong>，会看到它们俩的版本信息，即证明安装成功。</p><blockquote><p>node.js 相当于 JDK，如果你不安装 node.js 那么你无法在你的 PC 上运行 JavaScript 代码。<small>（你最多只能在你的浏览器中运行 JavaScript 代码）</small>。这种情况下，你连『<strong>在终端上输出显示 <code>hello world</code></strong> 』这样的小功能都无法实现。</p><p>npm 相当于 Maven，确切地说相当于是 Maven 的部分功能<small>（包管理）</small>。通过它，你可以下载你的项目中所需要的包，并管理包和你的项目之间、包和包之间的依赖关系。</p></blockquote><h2 id="_02-npm-的全局安装和局部安装" tabindex="-1"><a class="header-anchor" href="#_02-npm-的全局安装和局部安装" aria-hidden="true">#</a> 02. npm 的全局安装和局部安装</h2><p>虽然我们可以用 Maven 来类比 NPM，但是 NPM 中有『<strong>全局安装</strong>』和『<strong>本地安装</strong>』的区别，而 Maven 中并没有这样的概念。</p><p>因此，npm 的本地仓库就细分为：『<strong>本地全局安装仓库</strong>』和『<strong>本地局部安装仓库</strong>』。</p><blockquote><p>全局安装仓库和本地局部安装仓库一共是 <strong>1 + N</strong> 个。</p></blockquote><p>在 JavaScript / node.js 领域我们通过 npm 来下载、管理包。其实，这里的『<strong>包</strong>』分为两种：</p><ul><li><p>一种包本质上是命令、工具、软件。我们下载这个包的目的是为了系统<small>（的命令行）</small>中能『多』出来一个命令使用。例如 <strong>vue-cli</strong> 和 <strong>cnpm</strong> 。</p><p>对于这种本质上是『命令』的包，我们要通过全局安装将它们下载、安装到『本地的全局仓库』中。</p></li><li><p>另一种包，就和 Java 领域中使用 Maven 下载的包一样，是就普普通通的包，是在项目中要引用、使用到的 JavaScript 代码、CSS 代码等。例如，<strong>vue</strong> 和 <strong>bootstrap</strong> 。</p><p>对于这种本质上是『代码』包，我们要通过局部安装将他们下载、安装到『本地的局部仓库』中。</p></li></ul><h2 id="_03-中央仓库和淘宝镜像" tabindex="-1"><a class="header-anchor" href="#_03-中央仓库和淘宝镜像" aria-hidden="true">#</a> 03. 中央仓库和淘宝镜像</h2><p>无论是全局安装还是局部安装，我们使用 npm 时都会从中央仓库下载包。</p><p>你可通过下述命令查看到这个默认的中央仓库的网址：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config get registry\n\n<span class="token comment"># 不出意外显示的应该是：&quot;https://registry.npmjs.org/&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>但是从默认的中央仓库下载包是速度很感人。通常，我们会利用淘宝提供的国内镜像来提升下载速度。</p><ul><li><p>方案一：在不改配置的情况下，每当你使用 <strong>npm install -g</strong> 命令时，多附带一个参数，强行指定当前的下载操作从你指定的淘宝的仓库下载。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g xxx --registry<span class="token operator">=</span>https://registry.npm.taobao.org\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当然，这种方案用起来比较麻烦。</p></li><li><p>方案二：修改配置，替换掉默认的中央仓库网址。让 npm 命令下载时总是从淘宝的仓库下载。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>推荐这个方案。</strong></p></li><li><p>方案三：下载、使用淘宝提供的 cnpm 。</p><p>这个方案本质上是『<strong>方案一</strong>』的简化版。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g cnpm --registry<span class="token operator">=</span>https://registry.npm.taobao.org\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装 xxx 包时，使用命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cnpm <span class="token function">install</span> -g xxx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><small>有人反应这种方式下载的包的依赖上有时可能会有问题。所以优先还是考虑方案二。</small></p></li></ul><h2 id="_04-npm-全局安装包及使用" tabindex="-1"><a class="header-anchor" href="#_04-npm-全局安装包及使用" aria-hidden="true">#</a> 04. npm 全局安装包及使用</h2><p>当你使用 <strong>npm install xxx -g</strong> 命令去全局安装 xxx 库时，npm 会从网络上的『<strong>中央仓库</strong>』下载包到你的『<strong>本地全局仓库</strong>』。</p><blockquote><p><strong>-g</strong> 是 <strong>--global</strong> 的简写，表示当前的安装操作是全局安装。</p></blockquote><p>如果你没有改动过你的 npm 的设置，你的本地全局仓库应该在：</p><p><strong>C:\\Users\\&lt;用户名&gt;\\AppData\\Roaming\\npm\\node_modules</strong> 。</p><p>这里需要注意的是 <strong>AppData</strong> 是一个隐藏文件夹。你需要想办法看到它。关于这个文件夹：</p><ol><li><p>径你可以通过 <strong>npm root -g</strong> 命令查看得到它。</p></li><li><p>在Windows 的文件资源管理器中你可以通过 <strong>%APPDATA%\\npm\\node_modules</strong> 可以直接进入到这个目录，<code>%appdata%</code> 大小写不敏感。</p></li></ol><p>另外，<code>%APPDATA%</code> = <code>HOMEPATH%</code> + <code>\\AppData</code> 。</p><p>全局安装后， <strong>%APPDATA%\\npm\\node_modules</strong> 目录下会出现你所安装的 xxx 库的源码，而上一级目录，即 <strong>%APPDATA%\\npm</strong> 则会出现这个库的可执行程序。</p><p>由于 <strong>npm</strong> 是 node.js 的默认的包管理工具。因此，通过 <strong>npm</strong> 全局安装的包无需额外的配置，你就可在命令行中使用它。</p><blockquote><p>在 Windows 上全局安装包<small>（命令）</small>，你可以通过 where 命令查看该命令在哪。</p></blockquote><h2 id="_05-设置-cache-和-prefix" tabindex="-1"><a class="header-anchor" href="#_05-设置-cache-和-prefix" aria-hidden="true">#</a> 05. 设置 cache 和 prefix</h2><p>有些教程会在 npm<small>（和 cnpm）</small>安装之后，去修改它的 <strong>cache</strong> 和 <strong>prefix</strong> 这两个配置项。这两个配置项指向了两个本地的目录。</p><p>对于初学者和非专业前端开发人员而言，不需要去改变这两个目录的默认位置。它们不影响 npm 的使用。</p><blockquote><p>初学者无论安装什么软件、工具。<strong>可改可不改的配置一律不要改。</strong></p><p>不过在 Ubuntu 上，由于路径的权限问题，为了图省事，可以考虑修改这两个路径：</p><p>npm config set cache $HOME/node<br> npm config set prefix $HOME/node</p></blockquote><h2 id="_06-npm-局部安装包及使用" tabindex="-1"><a class="header-anchor" href="#_06-npm-局部安装包及使用" aria-hidden="true">#</a> 06. npm 局部安装包及使用</h2><p>与全局安装对应的是局部安装。之前反复提到过，全局安装安装的包本质上是命令、是工具、是软件。而局部安装的包，才是我们开发中要用到的“那种”包。</p><p>如果在安装命令 <code>npm install xxx</code> 中没有出现 <strong>--global</strong>，或其简写 <strong>-g</strong> ，那么就意味着是局部安装。即，相当于安装命令自带了 <strong>--save-dev</strong> ，即， <strong>--save-dev</strong> 是 <code>npm install</code> 的默认值。</p><p>局部安装都是安装在『<strong>当前项目中</strong>』的。即，通常在使用局部安装命令时，你是在项目所在的位置执行安装命令。</p><p>局部安装结束后，你的当前项目的 <strong>node_modules</strong> 目录下会出现一个你所安装的包的文件夹，其中有该包的内容。至此，你在你的项目中也就可以引用、使用这个包。</p><p>另外，你所安装的这个包的信息，会记录在前项目的 <strong>package.json</strong> 文件中。</p><hr><blockquote><p>『<strong>全局安装</strong>』的包无法在项目中使用，因为，我们反复强调过：全局安装的包不是我们项目中要用到的“那种包”。</p><ul><li>『全局安装』安装的是的命令，是软件；</li><li>『局部安装』安装的是才是库。</li></ul></blockquote><p>局部安装的包在项目中可以通过 <strong>.require</strong> 的方式使用。例如：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> webapck <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> xxx <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_07-两种安装方式的由来-了解、自学" tabindex="-1"><a class="header-anchor" href="#_07-两种安装方式的由来-了解、自学" aria-hidden="true">#</a> 07. 两种安装方式的由来（了解、自学）</h2><p>早期的 npm 的包的安装方式只有全局安装，并没有局部安装的概念，所有下载的包都放在了全局的仓库中。<small>这和 Java 的 Maven 的行为很像。</small></p><p>但是 npm 在这里有个小问题：<strong>全局安装没有办法下载/安装同一个包的多个版本。</strong></p><p>以 Java 的 Maven 做类比，在 Maven 中如果你下载了同一个包的多个版本，那么在本地仓库中它们的目录结构会是如下形式：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xxx\n│── 1.0\n│   └── ...\n│── 1.1\n│   └── ...\n│── 1.2\n│   └── ...\n└── 等\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>但是 npm 没有这版本这层文件夹，即，npm 全局安装所下载的总是 xxx 包的『<strong>当前最新版本</strong>』。形如：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xxx\n└── ...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这就导致了一个问题：你的 PC 上的两个不同的项目使用的如果是『<strong>同一个包的两个不同版本</strong>』，那么这里完全没有办法满足这个需求。</p><p>为此，npm 才提出了『<strong>局部安装</strong>』的概念，各个项目各下各的、各装各的、各用各的，各人玩各人的，互不干扰。</p><p>这样以前的安装方式<small>（即，全局安装）</small>的用途就越来越弱，最终慢慢退化成用来安装命令类的包。</p><h2 id="_08-命令总结" tabindex="-1"><a class="header-anchor" href="#_08-命令总结" aria-hidden="true">#</a> 08. 命令总结</h2><dl><dt>node -v</dt><dd>查看所安装的 node 环境的版本信息</dd><dt>npm -v</dt><dd>查看所安装的包管理器 npm 的版本信息</dd><dt>npm config get registry</dt><dd>查看 npm 所使用的网络仓库网址</dd><dt>npm config set registry https://registry.npm.taobao.org/</dt><dd>更换 npm 所使用的网络仓库网址。换为淘宝提供的镜像网址。</dd><dt>npm install xxx -g</dt><dd>从网络仓库下载并全局安装 xxx 包。</dd><dd><small>npm install xxx --global</small></dd><dt>%APPDATA%\\npm\\node_modules</dt><dd>npm 全局安装的包的安装路径</dd><dt>%APPDATA%\\npm</dt><dd>npm 全局安装的包的可执行文件的所在路径</dd><dt>npm uninstall -g vue-cli</dt><dd>npm 全局卸载 vue-cli<small>（1.x、2.x 版本）</small></dd><dt>npm install -g @vue/cli</dt><dd>npm 全局安装 vue-cli<small>（3.x 版本）</small></dd><dt>npm install xxx</dt><dd>从网络仓库下载并局部安装 xxx 包<small>（到当前项目）</small>。</dd><dd><small>npm install xxx --save-dev</small></dd><dt>npm install -g yarn</dt><dd>通过 npm 安装它的竞争对手 yarn 。</dd><dt>yarn -v</dt><dd>查看包管理器 yarn 的版本信息</dd><dt>yarn config get registry</dt><dd>查看包管理器 yarn 的网络仓库网址。</dd><dt>yarn config set registry http://registry.npm.taobao.org/</dt><dd>将包管理器 yarn 的网络仓库网址指定为淘宝镜像。</dd></dl>',53),x={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,t,(0,e._)("p",null,[l,(0,e._)("a",r,[o,(0,e.Wm)(a)]),d,i,c,g,m,u,b]),h],64)}}}}]);