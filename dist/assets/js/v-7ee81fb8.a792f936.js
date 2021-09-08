"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[2124],{56843:(t,s,e)=>{e.r(s),e.d(s,{data:()=>n});const n={key:"v-7ee81fb8",path:"/git/002-%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",title:"基本概念",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"创建本地仓库",slug:"创建本地仓库",children:[]},{level:2,title:"Git 中文件的受管状态",slug:"git-中文件的受管状态",children:[]},{level:2,title:"新增一个文件的历史版本",slug:"新增一个文件的历史版本",children:[]},{level:2,title:"使用 Git 的核心思想：一致性",slug:"使用-git-的核心思想-一致性",children:[]},{level:2,title:"取出历史版本",slug:"取出历史版本",children:[]},{level:2,title:"从 git 中删除文件",slug:"从-git-中删除文件",children:[]}],filePathRelative:"git/002-基本概念.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},40787:(t,s,e)=>{e.r(s),e.d(s,{default:()=>a});const n=(0,e(66252).uE)('<h1 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h1><h2 id="创建本地仓库" tabindex="-1"><a class="header-anchor" href="#创建本地仓库" aria-hidden="true">#</a> 创建本地仓库</h2><p>Git 可以管理任何一个文件夹<small>（及其中内容）</small>，只要在该文件夹中执行 <strong>git init</strong>，就可以让 Git 完成管理前的准备工作。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Git 会在它管理的文件夹下创建名为 <strong>.git</strong> 的子文件夹，这个文件夹也就是逻辑上的『<strong>本地仓库</strong>』。它里面会存放被 Git 所管理的文件的相关信息<small>（例如，历史版本）</small>。</p><blockquote><p>你不要自己去操作 <strong>.git</strong> 目录。这个目录下的内容是 git 来使用和操作的。</p></blockquote><hr><p>操作 Git 的基本流程是：</p><table><thead><tr><th style="text-align:center;">流程</th><th style="text-align:left;">操作</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">先修改文件</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">然后执行 <strong>git add</strong> 命令。<br><strong>git add</strong> 命令会把文件内容加入 Git 系统的『<strong>暂存区</strong>』<small>（Index）</small>。</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">接着就可以执行 <strong>git commit</strong> 命令，将文件的内容存入『<strong>本地仓库</strong>』<small>（.git）</small>。<br>于是文档库中就多出来一份文件的新版本。</td></tr></tbody></table><p><img src="https://hemiao3000.gitee.io/java-note-img/images/git/img/git_2.png" alt="图片"></p><blockquote><p>git 的 add 命令，是一个容易引起疑问的命令<small>（特别是对于有 subversion 使用经验的用户而言更是如此）</small>，add 命令的字面含义就是要将某个文件纳入到版本控制之中，但是 git add 的意义并非如此。</p><p>git 官方也意识到这个 add 的命名并不是很精准，于是提出了 <strong>git stage</strong> 命令作为 git add 的同义词。因此，为了便于理解，推荐大家使用 <strong>git stage</strong> 来代替 git add 。</p></blockquote><h2 id="git-中文件的受管状态" tabindex="-1"><a class="header-anchor" href="#git-中文件的受管状态" aria-hidden="true">#</a> Git 中文件的受管状态</h2><p>Git 会将文件<small>（文件夹）</small>的状态分成以下三类：</p><table><thead><tr><th style="text-align:left;">受管状态</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">被追踪的<br><strong>tracked</strong></td><td style="text-align:left;">tracked 状态意味着 Git 正在监控、监管着这个文件。<br>你对这个文件的任何改动，都会被 Git 发现。<br>Git 会进一步要求你提交你的改动，或撤销你的改动。</td></tr><tr><td style="text-align:left;">被忽略的<br><strong>ignored</strong></td><td style="text-align:left;">ignored 状态意味着 Git 完全不管这个文件。<br>在 Git 看来它就跟不存在一样。</td></tr><tr><td style="text-align:left;">不被追踪的<br><strong>untracked</strong></td><td style="text-align:left;">untracked 状态是所有文件的初始状态。<br>逻辑上，它是 tracked 和 ignored 状态『之前』的一种状态，逻辑上，它是一种临时状态。<br><strong>你既没有要求 Git 监管它，又没有要求 Git 忽略它。</strong> <br><small>对于这个文件，Git 也是一脸懵逼不知道接下来该不该监测文件的变动。</small></td></tr></tbody></table><p>这里有 2 点需要强调的是：</p><ol><li><p>所有的文件的初始状态都是 <strong>untracked</strong> 。</p></li><li><p>在正常情况下，<strong>文件不应该长期处于 untracked 状态</strong>，应尽快转变为 <strong>tracked</strong> 或 <strong>ignored</strong> 。</p></li></ol><p>对于新创建的文件，它们都是处于 <strong>untracked</strong> 状态的，接下来它们应该尽快通过下述 2 种方法之际却换成 <strong>ignored</strong> 状态，或 <strong>tracked</strong> 状态。</p><table><thead><tr><th style="text-align:center;">From</th><th style="text-align:left;">To</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">untracked</td><td style="text-align:left;">ignored</td><td style="text-align:left;">必须先在文件夹中创建一个名为 <strong>.gitignore</strong> 的文件<small>（必须是这个名字）</small>，然后把要忽略的文件逐一列在这个文件中<small>（一个文件一行，支持通配符）。</small></td></tr><tr><td style="text-align:center;">untracked</td><td style="text-align:left;">tracked</td><td style="text-align:left;">可以使用 <strong>git add</strong> + <strong>git commit</strong> 命令，将它提交给 Git 监控、管理即可。</td></tr></tbody></table><h2 id="新增一个文件的历史版本" tabindex="-1"><a class="header-anchor" href="#新增一个文件的历史版本" aria-hidden="true">#</a> 新增一个文件的历史版本</h2><p><strong>git stage</strong><small>（或 <strong>git add</strong>）</small> + <strong>git commit</strong> 的作用简单来说，就是将一个文件的当前内容提交给 Git ：</p><ul><li><p>对于 <em>untracked</em> 状态的文件，提交后会变成 <em>tracked</em> 状态；</p></li><li><p>对于 <em>tracked</em> 状态的文件，其历史版本记录则会演进一步。</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> stage <span class="token string">&quot;readme.txt&quot;</span>\n$ <span class="token function">git</span> commit -m <span class="token string">&quot;message&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对于一次『提交』而言，<strong>提交消息<small>（message）</small>是必须的</strong> 。否则，Git 会拒绝你的这次提交。</p><blockquote><p>一个完整的提交信息包括 header、body、footer 三部分，你至少要保证提供 header 。</p></blockquote><ol start="4"><li><p><strong>git add</strong> 指令后面也可以指定文件夹的名称，这样该文件夹内的『<strong>所有文件</strong>』都会被处理。例如：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ol><p>要新增『一次提交』之所以要同时使用 <strong>git stage</strong><small>（<strong>git add</strong>）</small> 和 <strong>git commit</strong> 是因为在将文件当前的内容添加成至本地仓库之前，要 <strong>先</strong> 将其添加至 <strong>暂存区</strong> 。</p><p><code>git commit</code>『<strong>只会</strong>』将暂存区的文件的内容提交至本地仓库进行保存。</p><h2 id="使用-git-的核心思想-一致性" tabindex="-1"><a class="header-anchor" href="#使用-git-的核心思想-一致性" aria-hidden="true">#</a> 使用 Git 的核心思想：一致性</h2><p>当你改动了工作区<small>（硬盘上）</small>的文件的内容之后，你可以使用 <strong>git status</strong> 命令查看文件的状态。你会看到类似如下信息：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>On branch master\nChanges not staged <span class="token keyword">for</span> commit:\n  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>\n  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>\n\n        modified:   新建文本文档.txt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这里除了能看到 Git 监控到的文件的变动 <code>modified: 新建文本文档.txt</code> 之外，在这条信息的上面，你还能看到 Git 为你给出的 2 条建议：接下来请使用 <strong>git add &lt;file&gt;...</strong> 命令，或使用 <strong>git checkout -- &lt;file&gt;...</strong> 命令。</p><p>这两条建议的背后，体现出 Git 的一个核心『关注点』：Git 希望你能保持<strong>工作区和本地仓库的一致性</strong> 。</p><p>在初始状况下，工作区和本地仓库的内容是一致的，当你改动工作区的文件后，工作区和本地仓库的内容就不再一致了。</p><p>对于此情况，Git 希望你将它们重新『调整』成一致。</p><p>至于如何『调整』，有 2 种方案<small>（这也就是 Git 对你给出的 2 条二选一的建议）</small>：</p><ol><li><p>使用 <code>git add &lt;file&gt;...</code> 命令（及后续的 <code>git commit</code> 命令），将你对工作区的改动提交到本地仓库。这样，工作区和本地仓库将会重新一致。<small>这也就意味着，本地仓库的版本将向前演进。</small></p></li><li><p>使用 <code>git checkout -- &lt;file&gt;...</code> 命令用本地仓库<small>（的最新、最近版本）</small>的内容覆盖你的工作区的内容。这样，工作区和本地仓库将会重新一致。<small>这也就意味着，你的工作区的内容的变动将会被覆盖、舍弃。</small></p></li></ol><p>你在使用 Git 对你的文件夹、进行版本控制的整个使用过程中，你的工作区和本地仓库的状态的一致性的变化状态将是如下情况：</p><p>一致 &gt; 不一致 &gt; 重新一致 &gt; 不一致 &gt; 重新一致 &gt; ... &gt; 一致</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/git/img/git_3.png" alt="git_3"></p><h2 id="取出历史版本" tabindex="-1"><a class="header-anchor" href="#取出历史版本" aria-hidden="true">#</a> 取出历史版本</h2><p>从本地版本库中取出文件只需要一个指令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token punctuation">[</span> 版本标识 <span class="token operator">|</span> 标签 <span class="token punctuation">]</span> <span class="token operator">&lt;</span>文件<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>, <span class="token operator">&lt;</span>文件<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>, <span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>需要特别提醒的是，磁盘文件夹中的文件会被取出的文件『<strong>覆盖</strong>』<small>（覆盖、覆盖）</small>，因此你对该文件作出的修改会丢失。</p><blockquote><p>例如，本地版本库中的文件是 80 行的，你本地的文件被你改成 100 行（但未提交），执行 git checkout 之后，你的本地文件会变成 80 行。</p></blockquote><h2 id="从-git-中删除文件" tabindex="-1"><a class="header-anchor" href="#从-git-中删除文件" aria-hidden="true">#</a> 从 git 中删除文件</h2><p><strong>git rm</strong> 用于删除文件，删除行为分为『弱删除』和『强删除』。</p><ul><li><p><strong>git rm --cache</strong> 是『弱』删除。</p><p>它表示让 Git『<strong>不再监管</strong>』某文件/文件夹，而该文件/文件夹在磁盘上『<strong>仍存在</strong>』。</p></li><li><p><strong>git rm</strong> 是强删除</p><p>它表示告知 Git『<strong>不再监管</strong>』某文件/文件夹的同时，还从硬盘上『<strong>删除</strong>』此文件/文件夹。</p></li></ul>',47),a={render:function(t,s){return n}}}}]);