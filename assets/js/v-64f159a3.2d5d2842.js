"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[1140],{5828:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n={key:"v-64f159a3",path:"/docker/02-%E9%95%9C%E5%83%8F.html",title:"镜像",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基本概念",slug:"基本概念",children:[]},{level:2,title:"获取镜像",slug:"获取镜像",children:[]},{level:2,title:"镜像的迁移",slug:"镜像的迁移",children:[]}],filePathRelative:"docker/02-镜像.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},67583:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});const n=(0,a(66252).uE)('<h1 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>联合文件系统<small>（Union File System）</small>是一个轻量级、高性能的分层文件系统，他的特点就是支持将文件的修改变换为一层层增量提交，并且支持将多个不同的文件系统挂在到一个统一的虚拟文件系统下。</p><p>Docker 利用联合文件系统能够组合挂载的特性，建立了一套文件系统分层体系。在这套体系中存储着每一个文件的修改历史。</p><p>对文件的更新、删除等其他操作，都不是直接作用于被修改的文件上，而是将修改后的文件直接通过联合文件系统的挂载机制替换掉实际访问的文件。而被修改的文件只是不能被程序和用户访问到，但仍然存在于存储器之中。</p><p>在 Docker 中，镜像是一个包含应用程序及相关依赖库的文件，在 Docker 容器启动的过程中，它以只读的方式被用于创建容器运行的基础环境。</p><p>如果把容器理解为应用程序运行的虚拟环境，那么镜像就是这个环境的持久化副本<small>（存档）</small>。</p><p>在 Docker 中，镜像名称主要分为三部分：<code>Namespace</code> / <code>Repository</code> : <code>Tag</code> 。例如：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>library/nginx:stable\nlibrary/nginx:1.18.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>Namespace</p><ul><li><p>镜像的名字空间，用于区别构建镜像的组织或个人</p></li><li><p>我们在构建自己的镜像时，可以将自己的名字或代号放在 Namespace 里</p></li></ul></li><li><p>Repository</p><ul><li><p>镜像的档案名</p></li><li><p>通常采用镜像中所包含的应用程序或微服务名字作为镜像的 Repository 名称</p></li></ul></li><li><p>Tag</p><ul><li><p>镜像的标签，类似于 Git 中的 Tag</p></li><li><p>通常采用镜像中所包含的应用程序或微服务的版本（Version）来制定。</p></li></ul></li></ul><p>除了以上三者，每个镜像都有一个独立的 <strong>Image ID</strong> ，是长度为 64 位的十六进制字符串。</p><p>Docker 的镜像是一个分层结构，镜像的每一层都是在原有层的基础上进行改动的。</p><p>镜像的分层机制与 Git 的版本控制原理类似，每层镜像都可以被视为一个提交，并拥有独立的 ID，最顶层的 ID 被视为镜像的 ID 。</p><p>例如 tomcat:jre8 的镜像的层级关系如下，每一层都是在前一层的基础上进项修改和提交的结果：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>^\n|   tomcat\n|   java\n|   buildpack-deps\n|   debian\n|   scratch\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>scratch 是 Docker 提供的一个基础层，通常被成为 rootfs ，即启动文件系统。</p><p>而 bootfs 之上，通常就是操作系统层。</p><hr><p>Docker 里的镜像技术还有一个特性：写时复制。</p><p>容器运行的沙盒环境其实就是镜像之上的一层新的可读写的镜像层，原有的镜像层以『<strong>只读</strong>』的方式被衔接在新镜像层的下方。</p><p>只有容器中的程序对文件进行修改时，才会将镜像中这个被改动的文件复制到沙盒环境的镜像层中。</p><h2 id="获取镜像" tabindex="-1"><a class="header-anchor" href="#获取镜像" aria-hidden="true">#</a> 获取镜像</h2><p>除了镜像列表中的信息，还可以通过 <strong>docker inspect</strong> 命令获得镜像更详细的信息（一大堆信息）：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker inspect nginx:1.10\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>docker inspect</strong> 还可以使用 ID，而且只要具有唯一性，可以只给出镜像 ID 的前 N 位即可。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker inspect 82e97ab0390\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>docker inspect</strong> 返回的结果是 JSON 格式字符串，如果只想得到其中某部分信息，可进行过滤：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker inspect -f <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;.Size&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span> 82e97a\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="镜像的迁移" tabindex="-1"><a class="header-anchor" href="#镜像的迁移" aria-hidden="true">#</a> 镜像的迁移</h2><p>镜像的导入/导出是虚拟化过程中最基础的操作。</p><ul><li><p>使用 <strong>docker save</strong> 命令可将本地镜像库中的镜像导出：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker save ubuntu:latest <span class="token operator">&gt;</span> ubuntu.tar\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>另外，<strong>docker save</strong> 命令支持同事导出多个镜像：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker save -o image.tar ubuntu:lasted centos:latest\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>要将导出的镜像数据重新导入到本地的镜像仓库中，可以使用 <em><strong>docker load</strong></em> 命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker load -i ubuntu.tar\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>或</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker load <span class="token operator">&lt;</span> ubuntu.tar\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul>',31),l={render:function(e,s){return n}}}}]);