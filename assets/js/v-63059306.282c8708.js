"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[5479],{38518:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-63059306",path:"/spring-boot/15-spring-profiles-active.html",title:"SpringBoot 的多配置文件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"spring.profiles.active 配置",slug:"spring-profiles-active-配置",children:[]},{level:2,title:"@Profile 和 @ActiveProfiles 注解",slug:"profile-和-activeprofiles-注解",children:[]}],filePathRelative:"spring-boot/15-spring-profiles-active.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},8387:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<h1 id="springboot-的多配置文件" tabindex="-1"><a class="header-anchor" href="#springboot-的多配置文件" aria-hidden="true">#</a> SpringBoot 的多配置文件</h1><h2 id="spring-profiles-active-配置" tabindex="-1"><a class="header-anchor" href="#spring-profiles-active-配置" aria-hidden="true">#</a> spring.profiles.active 配置</h2><p>默认情况下，当你启动 SpringBoot 项目时，会在日志中看到如下一条 INFO 信息：</p><pre><code>No active profile set, falling back to default profiles: default\n</code></pre><p>这条消息是在告诉你，由于你没有激活、启用某个配置文件，SpringBoot 使用了默认的配置文件，也就是 <code>application.properties</code> 或 <code>application.yml</code> 。</p><blockquote><p>当然，这并不是什么错误。</p></blockquote><p>SpringBoot 允许我们的项目提供多配置文件，并『激活、启用』其中的某一个。这些配置文件的命名规则为：<code>application-xxx.properties</code> 或 <code>application-xxx.yml</code> 。</p><p>提供多个配置文件之后，你在 SpringBoot 默认加载的配置文件 <strong>application.properties</strong> 或 <strong>application.yml</strong> 中只用写一个配置项，用以激活、启用某个 <em>.properties</em> 或 <em>.yml</em> 即可。例如：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>\n    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上例中的 <code>dev</code> 就是 <code>application-xxx.properties</code> 或 <code>application-xx.yml</code> 中的那个 xxx 。</p><p>现在你再启动 SpringBoot，你会看到如下的 INFO 信息：</p><pre><code>The following profiles are active: dev\n</code></pre><p>这表示 SpringBoot 本次启动使用的就是这个配置文件。</p><p>另外，有一种『<strong>简写</strong>』：可以将 application.yml 和各个 application-xxx.yml 凑在一起，就写在 application.yml 配置文件中：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>\n    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev\n\n<span class="token punctuation">---</span>\n<span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev\n<span class="token punctuation">...</span>\n\n<span class="token punctuation">---</span>\n<span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> test\n<span class="token punctuation">...</span>\n\n<span class="token punctuation">---</span>\n<span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> prod\n<span class="token punctuation">...</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="profile-和-activeprofiles-注解" tabindex="-1"><a class="header-anchor" href="#profile-和-activeprofiles-注解" aria-hidden="true">#</a> @Profile 和 @ActiveProfiles 注解</h2><p><strong>@Profile</strong> 注解配合 <code>spring.profiles.active</code> 参数，也可以实现不同环境下<small>（开发、测试、生产）</small>配置参数的切换。</p><p>另外，<strong>@ActiveProfiles</strong> 注解<small>（在测试环境中）</small>可以起到 <code>spring.profiles.active</code> 参数的作用。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyConfiguration</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token class-name">Human</span> <span class="token function">tommy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Human</span><span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token class-name">Human</span> <span class="token function">jerry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Human</span><span class="token punctuation">(</span><span class="token string">&quot;jerry&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在上面的配置中：</p><ul><li>存在 2 套配置：<code>xxx</code> 和 <code>yyy</code> ；</li><li>name 为 <code>tommy</code> 的 Human Bean 仅存在于 <code>xxx</code> 的配置套餐中；</li><li>name 为 <code>jerry</code> 的 Human Bean 仅存在于 <code>yyy</code> 的配置套餐中；</li></ul><p>在 application.yml 配置文件通过 active 配置激活启动一个：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>\n    <span class="token key atrule">active</span><span class="token punctuation">:</span> yyy\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们可以在 JUnit 中验证结果：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>\n<span class="token keyword">class</span> <span class="token class-name">AppTest</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token keyword">private</span> <span class="token class-name">Human</span> human<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Test</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>human<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 这里输出的是 jerry Human Bean</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在测试类的使用中，你也可以将 application.yml 中的 active 配置项去掉，转而在测试类的头上使用 <strong>@ActiveProfiles</strong> 注解，也能起到同样效果：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>\n<span class="token class-name">ActiveProfiles</span><span class="token punctuation">(</span>profiles <span class="token operator">=</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">AppTest</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',27),e={render:function(n,s){return p}}}}]);