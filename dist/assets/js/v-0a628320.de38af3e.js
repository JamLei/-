"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[7468],{76645:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-0a628320",path:"/spring-boot/99-other.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"外置配置文件",slug:"外置配置文件",children:[{level:3,title:"补充 {docsify-ignore}",slug:"补充-docsify-ignore",children:[]}]},{level:2,title:"",slug:"",children:[]}],filePathRelative:"spring-boot/99-other.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},64037:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(66252).uE)('<h2 id="外置配置文件" tabindex="-1"><a class="header-anchor" href="#外置配置文件" aria-hidden="true">#</a> 外置配置文件</h2><p>默认情况下，我们 spring boot 项目的配置文件<small>（application.yaml、application.properties）</small>是在项目的 jar 包『里面』的。</p><p>如果是要改配置文件中的配置项时，就需要将项目重新打包，在某些情况下，这就显得十分不方便。</p><p>对此，我们可以将 spring boot 项目的配置文件『挪到』jar 包之外，然后再启动 spring boot 项目时再指定它使用外部的这些配置文件。</p><ul><li><p>为 pom.xml 添加插件及配置</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- copy资源文件 --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-resources-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>copy-resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>copy-resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>**/application*.yml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>**/application*.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>**/bootstrap.yml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>**/logback*.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/i18n/**<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/mybatis/**<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/public/**<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/static/**<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/templates/**<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>excludes</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>${project.build.directory}/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- 打jar包时忽略配置文件 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-jar-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/application*.yml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/application*.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/logback*.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>**/bootstrap.yml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>excludes</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></li></ul><p>根据上述的 <code>&lt;outputDirectory&gt;</code> 的配置，相关的配置文件会被复制到 target 下的 resources 目录中，并且，jar 包中也不会包含你所配置的这些配置文件。</p><p>这种情况下，在启动 spring boot 项目时，需要额外的参数（<code>-Dspring.config.location</code>）告诉它项目的配置文件在哪：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>java <span class="token operator">-</span>jar <span class="token operator">-</span><span class="token class-name">Dspring</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>location<span class="token operator">=</span><span class="token class-name">E</span><span class="token operator">:</span><span class="token operator">/</span><span class="token class-name">Workspace</span><span class="token operator">/</span>projects<span class="token operator">/</span>target<span class="token operator">/</span>resources<span class="token operator">/</span> <span class="token punctuation">.</span>/xxx<span class="token punctuation">.</span>jar\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>注意：</p><ol><li><p>如果外部文件指定的是目录，那么 <code>-Dspring.config.location</code> 配置的地址必须以 <code>/</code> 结尾，表明这个配置是一个目录，而非单个文件；</p></li><li><p>如果想要指定单个文件，可以使用 <code>-Dspring.config.location=E:/Workspace/projects/target/resources/application.properties</code> 这种方式来指明只需要加载这个配置文件内容。</p></li><li><p>当然，你可以可以将配置文件放在与启动的 jar 包同级目录，或者在启动的jar的同级目录下建一个名为 config 的目录，然后将配置文件放到里面，然后直接使用 <code>java -jar ./xxx.jar</code> 命令启动，spring 默认会去 <code>./config</code> 目录中查询。</p></li></ol><h3 id="补充-docsify-ignore" tabindex="-1"><a class="header-anchor" href="#补充-docsify-ignore" aria-hidden="true">#</a> 补充 {docsify-ignore}</h3><p>spring boot 默认是以 <code>classpath:/,classpath:/config/,file:./,file:./config/</code> 这样的配置在查找、加载配置文件，有意思的是查找顺序是上述配置的反向顺序：</p><ol><li>file:./config/</li><li>file:./</li><li>classpath:/config/</li><li>classpath:/</li></ol><p>因此，如果你在 <strong>spring.config.location</strong> 中也定义了多个配置文件位置，例如：<code>classpath:/custom-config/,file:./custom-config/</code>, 那么配置文件的查找、加载顺序同样是反向的:</p><ol><li>file:./custom-config</li><li>classpath:/custom-config</li></ol><p>另外，还有一个功能相似的配置 <strong>spring.config.additional-location</strong>，使用它的话，它会作为默认配置路径的『<strong>扩展配置</strong>』路径来使用。扩展的配置路径会比默认的配置优先被扫描到. 比如说, 如果设置了扩展的配置文件所在路径为：<code>classpath:/custom-config/,file:./custom-config/</code> , 那么查找路径将会是下面的顺序:</p><ol><li>file:./custom-config/</li><li>classpath:custom-config/</li><li>file:./config/</li><li>file:./</li><li>classpath:/config/</li><li>classpath:/</li></ol><p>这种扫描顺序使得你可以通过自己的自定义配置来修改默认的配置项。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',19),p={render:function(n,s){return t}}}}]);