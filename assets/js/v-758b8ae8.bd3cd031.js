"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[9547],{57488:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-758b8ae8",path:"/spring-boot/99-spring-boot-quartz.html",title:"SpringBoot 集成 Quartz",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"SpringBoot 内置定时任务",slug:"springboot-内置定时任务",children:[]},{level:2,title:"Quartz",slug:"quartz",children:[]},{level:2,title:"Quartz 体系结构",slug:"quartz-体系结构",children:[]},{level:2,title:"SpringBoot 和 Quartz",slug:"springboot-和-quartz",children:[{level:3,title:"配置 pom.xml",slug:"配置-pom-xml",children:[]},{level:3,title:"简单示例",slug:"简单示例",children:[]},{level:3,title:"一个小瑕疵",slug:"一个小瑕疵",children:[]},{level:3,title:"CronSchedule 示例",slug:"cronschedule-示例",children:[]}]}],filePathRelative:"spring-boot/99-spring-boot-quartz.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},17890:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(66252).uE)('<h1 id="springboot-集成-quartz" tabindex="-1"><a class="header-anchor" href="#springboot-集成-quartz" aria-hidden="true">#</a> <span class="title">SpringBoot 集成 Quartz</span></h1><p>在项目开发中，经常需要定时任务来帮助我们来做一些内容，比如定时派息、跑批对账、业务监控等。</p><p>SpringBoot 体系中现在有两种方案可以选择：</p><ul><li><p>第一种是 SpringBoot 内置的方式简单注解就可以使用</p></li><li><p>如果需要更复杂的应用场景可以使用 Quartz</p></li></ul><p>Quartz 目前是 Java 体系中最完善的定时方案。</p><h2 id="springboot-内置定时任务" tabindex="-1"><a class="header-anchor" href="#springboot-内置定时任务" aria-hidden="true">#</a> SpringBoot 内置定时任务</h2><p>略</p><h2 id="quartz" tabindex="-1"><a class="header-anchor" href="#quartz" aria-hidden="true">#</a> Quartz</h2><p>Quartz 是一个开源的作业调度框架，它完全由 Java 写成，提供了巨大的灵活性而不牺牲简单性。</p><p>当定时任务愈加复杂时，使用 Spring 注解 @Schedule 已经不能满足业务需要。</p><p>Quartz 的优点:</p><table><thead><tr><th style="text-align:center;">#</th><th style="text-align:left;">优点</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">丰富的 Job 操作 API;</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">支持多种配置;</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">SpringBoot 无缝集成;</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">支持久化;</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;">支持集群;</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:left;">Quartz 还支持开源，是一个功能丰富的开源作业调度库，可以集成到几乎任何 Java 应用程序中。</td></tr></tbody></table><h2 id="quartz-体系结构" tabindex="-1"><a class="header-anchor" href="#quartz-体系结构" aria-hidden="true">#</a> Quartz 体系结构</h2><p>Quartz 有 4 个核心概念：</p><p>| # | 概念 | 说明 | | :-: | :- | :- | :- | | 1 | Job | 任务 | | 2 | JobDetail | 任务信息 | | 3 | Trigger | 触发器 | | 4 | Scheduler | 调度器 |</p><ul><li><p>Job 和 JobDetail</p><p>Job 是一个接口，JobDetail 是这个接口的实现类。顾名思义，Job/JobDetail 定义了【工作】这个概念，它代表着每次任务调度时所要执行的具体的代码。</p><p>Job 只定义一个方法 <em><code>execute(JobExecutionContext context)</code></em> ，JobDetail 在实现 Job 接口的 <em><code>.execute()</code></em> 方法中编写所需要定时执行的 Job（任务），<em><code>JobExecutionContext</code></em> 类提供了调度应用的一些信息。</p></li><li><p>Trigger / SimpleTrigger / CronTrigger</p><p>Trigger 描述触发 Job 执行的时间触发规则。</p><p>当且仅当需描述【调度一次或者以固定时间间隔周期调度执行】时，使用 SimpleTrigger;</p><p>当需要通过 Cron 表达式描述【更复杂的调度规则】时，使用 CronTrigger 。例如：工作日周一到周五的 15:00 ~ 16:00 执行调度等。</p></li><li><p>Scheduler</p><p>调度器就相当于一个容器，装载着任务和触发器。你可以简单认为 Scheduler 是一个第三方，它负责检查【当前】是否符合 Trigger 所描述的时间规则，如果是，则它再去执行 Job 。</p><p>Trigger 和 JobDetail 可以注册到 Scheduler 中，两者在 Scheduler 中拥有各自的组及名称，组及名称是 Scheduler 查找定位容器中某一对象的依据，Trigger 的组及名称必须唯一，JobDetail 的组和名称也必须唯一(但可以和 Trigger 的组和名称相同，因为它们是不同类型的)。Scheduler 定义了多个接口方法，允许外部通过组及名称访问和控制容器中 Trigger 和 JobDetail 。</p></li></ul><p>四者其关系如下图所示:</p><p><img src="https://hemiao3000.gitee.io/java-note-img/images/spring-boot/img/quartz_01.png" alt="quartz_01"></p><ul><li>Job 为作业的接口，为任务调度的对象;</li><li>JobDetail 用来描述 Job 的实现类及其他相关的静态信息;</li><li>Trigger 做为作业的定时管理工具，一个 Trigger 只能对应一个作业实例，而而一个作业实例可对应多个触发器;</li><li>Scheduler 做为定时任务容器器，是 Quartz 最上层的东西，它提携了所有触发器和作业，使它们协调工作，每个 Scheduler 都存有 JobDetail 和 Trigger 的注册，一个 Scheduler 中可以注册多个 JobDetail 和多个 Trigger。</li></ul><h2 id="springboot-和-quartz" tabindex="-1"><a class="header-anchor" href="#springboot-和-quartz" aria-hidden="true">#</a> SpringBoot 和 Quartz</h2><p>SpringBoot 2.0 提供了 <code>spring-boot-starter-quartz</code> 组件集成 Quartz，让我们在项目中使用 Quartz 变得简单。</p><h3 id="配置-pom-xml" tabindex="-1"><a class="header-anchor" href="#配置-pom-xml" aria-hidden="true">#</a> 配置 pom.xml</h3><p>添加 spring-boot-starter-quartz 组件:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-quartz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="简单示例" tabindex="-1"><a class="header-anchor" href="#简单示例" aria-hidden="true">#</a> 简单示例</h3><p>配置完成之后先来做一个最简单的示例，使用 Quartz 定时输出 Hello World 。</p><p>首先定义一个 Job 需要继承 <em><code>QuartzJobBean</code></em>，示例中 Job 定义一个变量 Name，用于在定时执行的时候传入。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SampleJob</span> <span class="token keyword">extends</span> <span class="token class-name">QuartzJobBean</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">executeInternal</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JobExecutionException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;Hello %s!&quot;</span>，<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>接下来构建 JobDetail，并且构建时传入 name 属性的值，构建 JobTrigger 和 scheduleBuilder，最后 Spring Boot 会使用 Scheduler 启动定时任务。</p><p>这里有一点需要提前说明的是，<em><strong><code>SampleScheduler</code></strong></em> 的配置方式不止一种，但是下面这种配置方式和 <em><strong><code>CronScheduler</code></strong></em> 的配置方式是一致的。所以推荐使用这种方式配置。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SampleSchedulerConfig</span> <span class="token punctuation">{</span>\n\n  <span class="token annotation punctuation">@Autowired</span>\n  <span class="token keyword">private</span> <span class="token class-name">SchedulerFactoryBean</span> schedulerFactoryBean<span class="token punctuation">;</span>\n\n  <span class="token annotation punctuation">@Bean</span>\n  <span class="token keyword">public</span> <span class="token class-name">Scheduler</span> <span class="token function">scheduleJob1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>\n    <span class="token comment">// part 1</span>\n    <span class="token class-name">JobDetail</span> jobDetail <span class="token operator">=</span> <span class="token class-name">JobBuilder</span><span class="token punctuation">.</span><span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">SampleJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;sampleJob&quot;</span><span class="token punctuation">)</span>  <span class="token comment">// 每一个 JobDetail 都要有一个标识。</span>\n            <span class="token punctuation">.</span><span class="token function">usingJobData</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span>  <span class="token comment">// sampleJob.setName(&quot;World&quot;);</span>\n            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// part 2 : 定义时间规则</span>\n    <span class="token class-name">SimpleScheduleBuilder</span> scheduleBuilder <span class="token operator">=</span> <span class="token class-name">SimpleScheduleBuilder</span>\n            <span class="token punctuation">.</span><span class="token function">simpleSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">withIntervalInSeconds</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>   <span class="token comment">// 2 秒后执行</span>\n            <span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 重复执行</span>\n    <span class="token class-name">Trigger</span> trigger <span class="token operator">=</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;sampleTrigger&quot;</span><span class="token punctuation">)</span>  <span class="token comment">// Trigger 要有一个唯一性标识。</span>\n            <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>scheduleBuilder<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// part 3 : 将两者结合在一起</span>\n    <span class="token class-name">Scheduler</span> scheduler <span class="token operator">=</span> schedulerFactoryBean<span class="token punctuation">.</span><span class="token function">getScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    scheduler<span class="token punctuation">.</span><span class="token function">scheduleJob</span><span class="token punctuation">(</span>jobDetail<span class="token punctuation">,</span> trigger<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> scheduler<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li>JobBuilder 无构造函数，只能通过 JobBuilder 的静态方法 newJob(Class&lt;? extends Job&gt; jobClass) 生成 JobBuilder 实例。</li><li>withIdentity 方法可以传入两个参数 withIdentity(String name，String group) 来定义 TriggerKey，也可以不设置，像上文示例中会自动生成一个独一无二的 TriggerKey 用来区分不同的 Trigger。</li></ul><p>启动项目后每隔两秒输出:Hello World!</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Hello World!\nHello World!\nHello World!\n...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="一个小瑕疵" tabindex="-1"><a class="header-anchor" href="#一个小瑕疵" aria-hidden="true">#</a> 一个小瑕疵</h3><p>通过日志，我们发现其实在项目启动过程中——完成了定时任务的相关配置工作，但未完成全部的配置工作——定时任务就已经开始工作了。有时我们可能希望在项目完全启动后再开始定时任务。</p><p>这种情况下需要使用 <em><strong><code>CommandLineRunner</code></strong></em>（或 <em><strong><code>ApplicationRunner</code></strong></em>）接口。</p><p><em><strong><code>CommandLineRunner</code></strong></em>（或 <em><strong><code>ApplicationRunner</code></strong></em>）接口要求它们的实现类实现一个方法，Spring Boot 会在项目完全启动后调用这个方法。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRunner</span> <span class="token keyword">implements</span> <span class="token class-name">CommandLineRunner</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>我们可以在 Runner 中注入定时任务的配置类，在 <em><strong><code>.run()</code></strong></em> 中手动调用 <em><strong><code>.scheduleJob1()</code></strong></em> 方法来触发定时任务的必要的三步操作。</p><p>注意，这里需要去掉 <em><code>.scheduleJob1()</code></em> 方法上的 <em><strong><code>@Bean</code></strong></em> 注解，因为我们不再需要 Spring 来调用它了。另外，这种情况下 <em><code>.scheduleJob1()</code></em> 方法的返回值可以改为 void 。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduleRunner</span> <span class="token keyword">implements</span> <span class="token class-name">CommandLineRunner</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token class-name">SampleScheduler</span> config<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        config<span class="token punctuation">.</span><span class="token function">scheduleJob1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="cronschedule-示例" tabindex="-1"><a class="header-anchor" href="#cronschedule-示例" aria-hidden="true">#</a> CronSchedule 示例</h3><p>CronSchedule 可以设置更灵活的使用方式，定时设置可以参考上面的 cron 表达式。</p><p>首先定义两个 Job:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledJob</span> <span class="token keyword">implements</span> <span class="token class-name">Job</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JobExecutionException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;schedule job1 is running ...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>CronSchedule 的配置和 SampleSchedule 的配置是一致的。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\n<span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CronConfig</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token keyword">private</span> <span class="token class-name">SchedulerFactoryBean</span> schedulerFactoryBean<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">scheduleJob1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>\n        <span class="token comment">// part 1 :</span>\n        <span class="token class-name">JobDetail</span> jobDetail <span class="token operator">=</span> <span class="token class-name">JobBuilder</span>\n                <span class="token punctuation">.</span><span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">Job</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;job1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// part 2 : </span>\n        <span class="token class-name">CronScheduleBuilder</span> scheduleBuilder <span class="token operator">=</span> <span class="token class-name">CronScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">cronSchedule</span><span class="token punctuation">(</span><span class="token string">&quot;0/6 * * * * ?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">CronTrigger</span> cronTrigger <span class="token operator">=</span> <span class="token class-name">TriggerBuilder</span>\n                <span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>scheduleBuilder<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// part 3: </span>\n        <span class="token class-name">Scheduler</span> scheduler <span class="token operator">=</span> schedulerFactoryBean<span class="token punctuation">.</span><span class="token function">getScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        scheduler<span class="token punctuation">.</span><span class="token function">scheduleJob</span><span class="token punctuation">(</span>jobDetail<span class="token punctuation">,</span> cronTrigger<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul><li>CronScheduleBuilder.cronSchedule(&quot;0/6 * * * * ?&quot;)，按照 cron 表达式设置定时任务的执行周期。</li></ul><p>CronSchedule 定时任务的启动需要使用 Runner 机制，而不能使用 <em><strong><code>@Bean</code></strong></em> 。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduleRunner</span> <span class="token keyword">implements</span> <span class="token class-name">CommandLineRunner</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token class-name">CronConfig</span> config<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        config<span class="token punctuation">.</span><span class="token function">scheduleJob1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',51),p={render:function(n,s){return e}}}}]);