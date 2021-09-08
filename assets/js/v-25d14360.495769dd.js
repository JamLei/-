"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[2393],{55802:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-25d14360",path:"/linux/99-ftp.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装 vsftpd 搭建 ftp 服务器",slug:"安装-vsftpd-搭建-ftp-服务器",children:[]}],filePathRelative:"linux/99-ftp.md",git:{updatedTime:1629790307e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},35690:(s,n,a)=>{a.r(n),a.d(n,{default:()=>l});const e=(0,a(66252).uE)('<h2 id="安装-vsftpd-搭建-ftp-服务器" tabindex="-1"><a class="header-anchor" href="#安装-vsftpd-搭建-ftp-服务器" aria-hidden="true">#</a> 安装 vsftpd 搭建 ftp 服务器</h2><ol><li><p>安装 vsftpd</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y vsftpd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>创建存放资料的文件夹</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /srv/ftp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>编辑相关配置文件</p><p>可以先将 vsftpd.conf 保存一份。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/vsftpd/vsftpd.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>配置匿名用户可访问</p><blockquote><p>vi 技巧：</p><ul><li>删除以 # 开头的注释：<code>g/^#/d</code></li><li>删除空行： <code>g/^\\s*$/d</code></li><li>删除#后面的行： <code>g/#.*/d</code></li></ul></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 匿名用户配置</span>\n<span class="token assign-left variable">anonymous_enable</span><span class="token operator">=</span>YES\n<span class="token comment"># anon_root=/srv/ftp 默认路径是 /var/ftp/pub</span>\n<span class="token comment"># no_anon_password=YES</span>\n<span class="token assign-left variable">anon_upload_enable</span><span class="token operator">=</span>NO\n<span class="token assign-left variable">anon_mkdir_write_enable</span><span class="token operator">=</span>NO\n\n<span class="token comment"># 本地用户配置</span>\n<span class="token assign-left variable">local_enable</span><span class="token operator">=</span>YES\n<span class="token assign-left variable">write_enable</span><span class="token operator">=</span>YES\n<span class="token comment">#local_umask=022</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>重启 vsftpd 服务</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart vsftpd\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>无法显示远程文件夹怎么办？</p><p>出现『无法显示远程文件夹』的原因是 xftp 开启了被动模式，进去连接属性，点击选择，可以看到勾选了【使用被动模式】，将它取消掉即可。</p></li></ol>',2),l={render:function(s,n){return e}}}}]);