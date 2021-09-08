"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[6105],{7938:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-186f9512",path:"/spring-boot/06-spring-boot-mybatis.html",title:"SpringBoot 整合 Mybatis",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"什么是 MyBatis-Spring-Boot-Starter",slug:"什么是-mybatis-spring-boot-starter",children:[]},{level:2,title:"关键依赖包",slug:"关键依赖包",children:[]},{level:2,title:"application 配置",slug:"application-配置",children:[]},{level:2,title:"启动类",slug:"启动类",children:[]}],filePathRelative:"spring-boot/06-spring-boot-mybatis.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},25881:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const t=(0,s(66252).uE)('<h1 id="springboot-整合-mybatis" tabindex="-1"><a class="header-anchor" href="#springboot-整合-mybatis" aria-hidden="true">#</a> SpringBoot 整合 Mybatis</h1><h2 id="什么是-mybatis-spring-boot-starter" tabindex="-1"><a class="header-anchor" href="#什么是-mybatis-spring-boot-starter" aria-hidden="true">#</a> 什么是 MyBatis-Spring-Boot-Starter</h2><p><code>mybatis-spring-boot-starter</code> 是 MyBatis 帮助我们快速集成 SpringBoot 提供的一个组件包，使用这个组件可以做到以下几点：</p><ul><li>几乎可以零配置</li><li>需要很少的 XML 配置</li></ul><p>mybatis-spring-boot-starter 依赖于 <em><strong>MyBatis-Spring</strong></em> 和 <em><strong>SpringBoot</strong></em>，最新版 <code>1.3.2</code> 需要 MyBatis-Spring <code>1.3</code> 以上，Spring Boot 版本 <code>1.5</code> 以上。</p><blockquote><p>注意 mybatis-spring-boot-starter 是 MyBatis 官方开发的 Starter，而不是 Spring Boot 官方开发的启动包。mybatis-spring-boot-starter 支持 XML 配置和注解配置两种。</p></blockquote><h2 id="关键依赖包" tabindex="-1"><a class="header-anchor" href="#关键依赖包" aria-hidden="true">#</a> 关键依赖包</h2><p><code>mybatis-spring-boot-starter</code> 的 pom 文件，现在最新版本是 <code>2.1.0</code> 。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="application-配置" tabindex="-1"><a class="header-anchor" href="#application-配置" aria-hidden="true">#</a> application 配置</h2><p>application.properties：</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token attr-value">com.mysql.cj.jdbc.Driver</span>\n<span class="token attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token attr-value">jdbc:mysql://localhost:3306/scott\\\n    ?useUnicode=true\\\n    &amp;characterEncoding=utf-8\\\n    &amp;useSSL=true\\\n    &amp;serverTimezone=UTC</span>\n<span class="token attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token attr-value">root</span>\n<span class="token attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token attr-value">123456</span>\n<span class="token comment">## jdbc-starter 中自带了一个连接池：HikariCP</span>\n<span class="token attr-name">spring.datasource.hikari.idle-timeout</span><span class="token punctuation">=</span><span class="token attr-value">60000</span>\n<span class="token attr-name">spring.datasource.hikari.maximum-pool-size</span><span class="token punctuation">=</span><span class="token attr-value">30</span>\n<span class="token attr-name">spring.datasource.hikari.minimum-idle</span><span class="token punctuation">=</span><span class="token attr-value">10</span>\n\n<span class="token attr-name">mybatis.config-location</span><span class="token punctuation">=</span><span class="token attr-value">classpath:mybatis/mybatis-config.xml</span>\n<span class="token attr-name">mybatis.mapper-locations</span><span class="token punctuation">=</span><span class="token attr-value">classpath:mybatis/mapper/*.xml</span>\n\n<span class="token attr-name">logging.level.root</span><span class="token punctuation">=</span><span class="token attr-value">INFO</span>\n<span class="token attr-name">logging.level.hemiao3000.gitee.io</span><span class="token punctuation">=</span><span class="token attr-value">DEBUG</span>\n<span class="token attr-name">logging.pattern.console</span><span class="token punctuation">=</span><span class="token attr-value">${CONSOLE_LOG_PATTERN:\\\n  %clr(${LOG_LEVEL_PATTERN:%5p}) \\\n  %clr(|){faint} \\\n  %clr(%-40.40logger{39}){cyan} \\\n  %clr(:){faint} \\\n  %m%n${LOG_EXCEPTION_CONVERSION_WORD:%wEx}}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>其中：</p><table><thead><tr><th style="text-align:left;">配置</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>mybatis.config-locations</code></td><td style="text-align:left;">配置 <em>mybatis-config.xml</em> 路径，<br><em>mybatis-config.xml</em> 中配置 MyBatis 基础属性；</td></tr><tr><td style="text-align:left;"><code>mybatis.mapper-locations</code></td><td style="text-align:left;">配置 Mapper 对应的 XML 文件路径；</td></tr><tr><td style="text-align:left;"><code>mybatis.type-aliases-package</code></td><td style="text-align:left;">配置项目中实体类包路径；</td></tr><tr><td style="text-align:left;"><code>spring.datasource.*</code></td><td style="text-align:left;">数据源配置。</td></tr></tbody></table><p>如果你需要使用 Druid 连接池，也可以使用 Druid 官方提供的启动器：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- Druid连接池 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>而连接信息的配置与上面类似，四大连接属性不变，只不过在连接池特有属性上，方式略有不同：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">## 初始化连接数</span>\nspring.datasource.druid.initial<span class="token punctuation">-</span>size=1\n<span class="token comment">## 最小空闲连接</span>\nspring.datasource.druid.min<span class="token punctuation">-</span>idle=1\n<span class="token comment">## 最大活动连接</span>\nspring.datasource.druid.max<span class="token punctuation">-</span>active=20\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Spring Boot 启动时数据源会自动注入到 SqlSessionFactory 中，使用 SqlSessionFactory 构建 SqlSessionFactory，再自动注入到 Mapper 中，最后我们直接使用 Mapper 即可。</p><h2 id="启动类" tabindex="-1"><a class="header-anchor" href="#启动类" aria-hidden="true">#</a> 启动类</h2><p>在启动类中添加对 Mapper 包扫描 <em><strong>@MapperScan</strong></em>，SpringBoot 启动的时候会自动加载包径下的 Mapper 。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>\n<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.woniu.dao&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>或者直接在 Mapper/DAO 类上面添加注解 <code>@Mapper</code>，建议使用上面那种，不然每个 mapper 加个注解也挺麻烦的。</p><blockquote><p>如果使用的是 Idea，注入 DAO 时经常会报 <code>could not autowire</code>，Eclipse 却没有问题，其实代码是正确的，这是 Idea 的误报。可以选择降低 Autowired 检测的级别，不要提示就好。 在 File | Settings | Editor | Inspections 选项中使用搜索功能找到 <code>Autowiring for Bean Class</code>，将 Severity 的级别由之前的 error 改成 warning 即可。</p></blockquote>',24),p={render:function(n,a){return t}}}}]);