"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[5683],{48790:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-bee63ffe",path:"/gist/99-git.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"gist/99-git.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},61567:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const e=(0,a(66252).uE)('<p>在使用 git 之前需要使用 <strong>config</strong> 命令配置下用户名和用户邮箱：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;&lt;用户名&gt;&quot;</span>\n<span class="token function">git</span> config --global user.email <span class="token string">&quot;&lt;邮箱&gt;&quot;</span>\n<span class="token function">git</span> config --global push.default simple\n<span class="token function">git</span> config --global core.editor notepad\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如何创建 SSH key</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -b <span class="token number">4096</span> -C <span class="token string">&quot;your_email@example.com&quot;</span>\n一路回车\n<span class="token function">cat</span> ~/.ssh/id_rsa.pub\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',4),t={render:function(s,n){return e}}}}]);