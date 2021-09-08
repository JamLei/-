"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[6158],{130:(t,e,l)=>{l.r(e),l.d(e,{data:()=>i});const i={key:"v-bbc6c00a",path:"/windows/01-IDEA.html",title:"IDEA IntelliJ的安装",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"卸载已安装的旧版本 IDEA",slug:"卸载已安装的旧版本-idea",children:[]},{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"破解",slug:"破解",children:[]},{level:2,title:"安装完之后的工作",slug:"安装完之后的工作",children:[{level:3,title:"字体",slug:"字体",children:[]},{level:3,title:"插件",slug:"插件",children:[]}]}],filePathRelative:"windows/01-IDEA.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},36408:(t,e,l)=>{l.r(e),l.d(e,{default:()=>a});const i=(0,l(66252).uE)('<h1 id="idea-intellij的安装" tabindex="-1"><a class="header-anchor" href="#idea-intellij的安装" aria-hidden="true">#</a> IDEA IntelliJ的安装</h1><h2 id="卸载已安装的旧版本-idea" tabindex="-1"><a class="header-anchor" href="#卸载已安装的旧版本-idea" aria-hidden="true">#</a> 卸载已安装的旧版本 IDEA</h2><p>如果你曾经安装过 IDEA 版本，现在想要重新安装，请务必保证将之前的 IDEA 卸载干净！</p><p>所谓『卸载干净』是指以下 2 点：</p><ol><li><p>删除过程中记得要勾选两个 <code>Delete</code>：</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-install-01.png" alt="idea-install-01"></p></li><li><p>删除后要记得删除旧版本的 IDEA 的配置文件：</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-install-02.png" alt="idea-install-02"></p></li></ol><p>如果删除不干净，会导致后续的破解操作失败。</p><p>一不做二不休，卸载结束后，把老 IDEA 的安装目录<small>（在 <code>C:\\Program Files\\JetBrains\\...</code>）</small>也一起删除干净。</p><p>IDEA 2020 版本的安装和以下 3 个目录有关：</p><ul><li><p><em>C:\\Users\\&lt;用户名&gt;\\AppData\\Roaming\\JetBrains</em></p></li><li><p><em>C:\\Users\\&lt;用户名&gt;\\AppData\\Local\\JetBrains</em></p></li><li><p><em>C:\\Program Files\\JetBrains</em></p></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>整个安装过程并无太多特殊之处，原则上一路 <code>Next</code> 就行。</p><ol><li><p>如无特殊要求，不要改动软件<small>（IDEA）</small>的默认安装路径。<small>安装别的软件也是这个原则。</small></p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-install-03.png" alt="idea-install-03"></p></li><li><p>根据你自己的操作系统的版本，选择安装 32 位或 64 位的 IDEA 。</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-install-04.png" alt="idea-install-04"></p></li><li><p>一路 <code>Next</code> 到配置页面。因为你没有<small>（或删除了旧版本的）</small>配置，因此，IDEA 要求你对它进行配置。</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-install-05.png" alt="idea-install-05"></p></li><li><p>（可选操作）IDEA 的很多功能是以『插件』的方式提供的<small>（这一点和 Maven 很像）</small>。为了简化一下页面显示，以避免有太多的菜单选项对我们<small>（初学者）</small>造成干扰，有很多暂时用不上的功能<small>（插件）</small>是可以关闭掉的。</p><p>这里有几个大块的功能模块我们是整体都用不上的，可以整体关掉。<small>其它的更细的功能我们就没有必要都一一关闭了。另外，对于关闭掉的功能（插件），未来如果要使用到，可以再打开，这里无需担心。</small></p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-install-06.png" alt="idea-install-06"></p></li><li><p>注册页面选择 30 天免费使用。</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-install-07.png" alt="idea-install-07"></p></li><li><p>安装结束，重启，看到启动页面。</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-install-08.png" alt="idea-install-08"></p></li></ol><h2 id="破解" tabindex="-1"><a class="header-anchor" href="#破解" aria-hidden="true">#</a> 破解</h2><p>暂缺</p><h2 id="安装完之后的工作" tabindex="-1"><a class="header-anchor" href="#安装完之后的工作" aria-hidden="true">#</a> 安装完之后的工作</h2><h3 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h3><p>不知道从哪个版本<small>（至少 2018 版中是没有的）</small>开始，IDEA 自带了一个名为 <strong><code>JetBrains Mono</code></strong> 的等宽字体。整体效果看起来还不错，推荐使用它。</p><p><code>File</code> -&gt; <code>Settings ...</code> -&gt; 搜索框输入 <code>font</code> 搜索相关项。</p><p>程序员对于编程字体的常规要求如下：</p><ul><li><p>编程字体必须使用等宽字体！</p></li><li><p>等宽字体也有好坏之分：是否容易区分 O 和 0、1 和 l 等。</p></li><li><p>更进一步地要求是：是考虑到中英文混合情况下的中文宽度问题？</p><blockquote><p>其实，<strong>ubuntu mono</strong> 是为数不多能做到第三点的两三个等宽字体之一。不过它比 <strong>JetBrains Mono</strong> 要宽一些。</p><p>所以，使用 <strong>JetBrans Mono</strong> 在一行可以显示更多的内容。如果只考虑英文的情况，<strong>JetBrans Mono</strong> 要比 <strong>ubuntu mono</strong> 好看一点。</p></blockquote></li></ul><h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3><p>在后续的编程中，我们会陆陆续续使用到 IDEA 的一些插件。在这里，我们可以提前下载。</p><p><code>File</code> -&gt; <code>Settings ...</code> -&gt; <code>Plugins</code></p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-plugin-lombok-01.png" alt="lombok-01"></p><table><thead><tr><th style="text-align:left;">插件</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>IDE Eval Reset</strong></td><td style="text-align:left;">插件形式的 IDEA“破解”工具，需要通过离线包安装。</td></tr><tr><td style="text-align:left;"><strong>Maven Helper</strong></td><td style="text-align:left;">简化 IDEA 中的 maven 的使用。</td></tr><tr><td style="text-align:left;"><strong>Lombok</strong></td><td style="text-align:left;">lombok 工具包的配套使用工具。用于简化代码的编写。</td></tr><tr><td style="text-align:left;"><strong>Vue.js</strong></td><td style="text-align:left;">在 IDEA 中利用 Vue 框架开发前端项目的工具。</td></tr><tr><td style="text-align:left;">Alibaba Java Coding Guidelines</td><td style="text-align:left;">阿里巴巴编程规范检查器。 <small>不过，装上后有点影响 IDEA 速度。</small></td></tr><tr><td style="text-align:left;">Free MyBatis plugin</td><td style="text-align:left;">在使用 MyBatis 框架时用到的一个工具，用以提高编程效率。 <small>但是用时会时常有报错的日志，不知道为什么。</small></td></tr><tr><td style="text-align:left;">Convert Yaml And Properties</td><td style="text-align:left;">用于 yaml 文件和 properties 文件的相互转换。</td></tr><tr><td style="text-align:left;">Java Stream Debugger</td><td style="text-align:left;">一个用于对 stream API 进行可视化调试的工具。</td></tr><tr><td style="text-align:left;">PlantUML integration</td><td style="text-align:left;">在 IDEA 使用 PlantUML 画图的插件。</td></tr><tr><td style="text-align:left;">Rainbow Brackets</td><td style="text-align:left;">彩虹括号，给代码中的括号上了色，便于分辨哪两个正反括号是一对。</td></tr><tr><td style="text-align:left;">Chinese ​(Simplified)​ Language Pack</td><td style="text-align:left;">中文语言包</td></tr></tbody></table><p>另外，Lombok 插件的使用要打开一个开关：</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/windows/img/idea-plugin-lombok-02.png" alt="lombok-02"></p><hr><p><strong>postfix completion</strong> 功能。</p>',29),a={render:function(t,e){return i}}}}]);