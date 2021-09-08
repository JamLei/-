"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[9966],{89939:(s,e,l)=>{l.r(e),l.d(e,{data:()=>a});const a={key:"v-5ee5a3ab",path:"/linux/99-centos8-gogs.html",title:"CentOS-8 上 Gogs 的搭建",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"前期准备工作",slug:"前期准备工作",children:[]},{level:2,title:"二进制安装",slug:"二进制安装",children:[]},{level:2,title:"配置",slug:"配置",children:[]}],filePathRelative:"linux/99-centos8-gogs.md",git:{updatedTime:1629790307e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},32927:(s,e,l)=>{l.r(e),l.d(e,{default:()=>C});var a=l(66252);const n=(0,a._)("h1",{id:"centos-8-上-gogs-的搭建",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#centos-8-上-gogs-的搭建","aria-hidden":"true"},"#"),(0,a.Uk)(" CentOS-8 上 Gogs 的搭建")],-1),o=(0,a.Uk)("Gogs"),t=(0,a.Uk)("（"),i={href:"https://gogs.io/",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("https://gogs.io/"),p=(0,a.Uk)("）"),r=(0,a.Uk)("一款极易搭建的自助 Git 服务，它"),c=(0,a.uE)('<ul><li><p>易安装。您除了可以根据操作系统平台下载 二进制运行，还可以通过 Docker 或 Vagrant，以及 包管理 安装。</p></li><li><p>跨平台。任何 Go 语言 支持的平台都可以运行 Gogs，包括 Windows、Mac、Linux 以及 ARM。</p></li><li><p>轻量级。一个廉价的树莓派的配置足以满足 Gogs 的最低系统硬件要求。有些用户甚至还将 Gogs 运行在 NAS 设备上。</p></li></ul><p>预览：[此处缺图若干，看官网]</p><h2 id="前期准备工作" tabindex="-1"><a class="header-anchor" href="#前期准备工作" aria-hidden="true">#</a> 前期准备工作</h2><ol><li><p>在未来，Gogs 服务会以名为 <code>gogs</code> 的 Linux 系统账户进行操作。所以，</p><ul><li><p>要么，你需要提前在 CentOS 上创建名为 <code>gogs</code> 的账号；</p></li><li><p>要么，记得未来在进行初始化配置时，将 Gogs 用来操作的账户指定为一个已存在账户<small>（例如 root）</small>。</p></li></ul></li><li><p>在未来，我们会配置 Gogs 服务，让它将用户信息等数据存储于 MySQL 中，所以，我们的 CentOS 上需要安装 MySQL 数据库<small>（版本 &gt;= 5.7）</small>。</p></li><li><p>Gogs 在访问、操作 MySQL 时，默认是以名为 <code>gogs</code> 的 MySQL 账户连接服务器。所以，</p><ul><li><p>要么，你需要提前在 MySQL 中创建名为 <code>gogs</code> 的 MySQL 账号；</p></li><li><p>要么，接的未来在进行初始化配置时，将 Gogs 连接 MySQL 的账号指定为一个已存在账号<small>（例如，root）</small>。</p></li></ul></li><li><p>Gogs 要求你的 MySQL 中有一个名为 <code>gogs</code> 的 databse，因此，你需要提前在 MySQL 中创建它，并且，考虑到编码问题，Gogs 要求你使用 utf8mb4 编码。Gogs 为此特意提前准备好了 SQL 语句：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> gogs<span class="token punctuation">;</span>\n\n<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> gogs <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>Gogs 要求你的系统上要提前安装好 Git 。</p></li></ol><h2 id="二进制安装" tabindex="-1"><a class="header-anchor" href="#二进制安装" aria-hidden="true">#</a> 二进制安装</h2>',5),u=(0,a.Uk)("从 github 上下载安装包："),d={href:"https://github.com/gogs/gogs/releases",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("https://github.com/gogs/gogs/releases"),k=(0,a.Uk)(" 。"),m=(0,a._)("p",null,[(0,a.Uk)("当前"),(0,a._)("small",null,"（2021-04-01）"),(0,a.Uk)("最新版本是 0.12.3 。")],-1),_=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("检查前面所说的环境要求是否已满足。"),(0,a._)("small",null,"特别是名为 gogs 的 linux 账号和 gogs 的 mysql 账号，或，你已经准备好偷懒使用 root 。")])],-1),b=(0,a._)("li",null,[(0,a._)("p",null,"解压压缩包。")],-1),y=(0,a._)("li",null,[(0,a._)("p",null,"使用命令 cd 进入到刚刚创建的目录。")],-1),S=(0,a.Uk)("执行命令 "),f=(0,a._)("code",null,"./gogs web",-1),G=(0,a.Uk)(" 。 Gogs 默认会在端口 3000 启动 HTTP 服务，访问 "),U=(0,a._)("code",null,"/install",-1),v=(0,a.Uk)(" 以进行初始配置。"),w=(0,a.Uk)("例如，"),L={href:"http://localhost:3000/install",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("http://localhost:3000/install"),A=(0,a.Uk)(" 。 "),T=(0,a.uE)('<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><img src="https://hemiao3000.gitee.io/java-note-img/images/linux/img/gogs-01.png" alt="gogs-01"></p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/linux/img/gogs-02.png" alt="gogs-02"></p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/linux/img/gogs-03.png" alt="gogs-03"></p>',4),C={render:function(s,e){const l=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[o,(0,a._)("small",null,[t,(0,a._)("a",i,[g,(0,a.Wm)(l)]),p]),r]),c,(0,a._)("p",null,[u,(0,a._)("a",d,[h,(0,a.Wm)(l)]),k]),m,(0,a._)("ol",null,[_,b,y,(0,a._)("li",null,[(0,a._)("p",null,[S,f,G,U,v,(0,a._)("small",null,[w,(0,a._)("a",L,[x,(0,a.Wm)(l)]),A])])])]),T],64)}}}}]);