"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[5927],{24281:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-a87785ac",path:"/interview-questions/04-spring.html",title:"Spring",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. @Value 注解的作用是什么？",slug:"_1-value-注解的作用是什么",children:[]},{level:2,title:"2. Spring 通知类型有哪些？",slug:"_2-spring-通知类型有哪些",children:[]},{level:2,title:"3. 怎么理解 Spring 中的 IOC 容器？",slug:"_3-怎么理解-spring-中的-ioc-容器",children:[]},{level:2,title:"4. 怎么理解 Spring 中的依赖注入？",slug:"_4-怎么理解-spring-中的依赖注入",children:[]},{level:2,title:"5. IoC 和 DI 有什么关系？",slug:"_5-ioc-和-di-有什么关系",children:[]},{level:2,title:"6. @Component 和 @Bean 有什么区别？",slug:"_6-component-和-bean-有什么区别",children:[]},{level:2,title:"7. Spring 中 bean 的作用域有几种类型？",slug:"_7-spring-中-bean-的作用域有几种类型",children:[]},{level:2,title:"8. 什么是 Spring 的内部 bean？",slug:"_8-什么是-spring-的内部-bean",children:[]},{level:2,title:"9. Spring 注入方式有哪些？",slug:"_9-spring-注入方式有哪些",children:[]},{level:2,title:"10. 在 Spring 中如何操作数据库？",slug:"_10-在-spring-中如何操作数据库",children:[]},{level:2,title:"11. Spring 的 JdbcTemplate 对象和 JDBC 有什么区别？",slug:"_11-spring-的-jdbctemplate-对象和-jdbc-有什么区别",children:[]},{level:2,title:"12. Spring 有几种实现事务的方式？",slug:"_12-spring-有几种实现事务的方式",children:[]},{level:2,title:"13. Spring 事务隔离级别有哪些？",slug:"_13-spring-事务隔离级别有哪些",children:[]},{level:2,title:"14. Spring 声明式事务无效可能的原因有哪些？",slug:"_14-spring-声明式事务无效可能的原因有哪些",children:[]},{level:2,title:"15. Spring 中的 AOP 的底层实现原理是什么？",slug:"_15-spring-中的-aop-的底层实现原理是什么",children:[]},{level:2,title:"16. Spring 中的 Bean 是线程安全的吗？",slug:"_16-spring-中的-bean-是线程安全的吗",children:[]},{level:2,title:"17. 说一下 Spring 中 Bean 的生命周期？",slug:"_17-说一下-spring-中-bean-的生命周期",children:[]},{level:2,title:"18.Spring 有哪些优点?",slug:"_18-spring-有哪些优点",children:[]},{level:2,title:"19.Spring、SpringBoot、SpringCloud 的区别是什么？",slug:"_19-spring、springboot、springcloud-的区别是什么",children:[]},{level:2,title:"20.Spring 中都是用了哪些设计模式？",slug:"_20-spring-中都是用了哪些设计模式",children:[]}],filePathRelative:"interview-questions/04-spring.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},32627:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const p=(0,s(66252).uE)('<h1 id="spring" tabindex="-1"><a class="header-anchor" href="#spring" aria-hidden="true">#</a> Spring</h1><h2 id="_1-value-注解的作用是什么" tabindex="-1"><a class="header-anchor" href="#_1-value-注解的作用是什么" aria-hidden="true">#</a> 1. @Value 注解的作用是什么？</h2><p>答：基于 <code>@Value</code> 的注解可以读取 properties 配置文件，使用如下:</p><h2 id="_2-spring-通知类型有哪些" tabindex="-1"><a class="header-anchor" href="#_2-spring-通知类型有哪些" aria-hidden="true">#</a> 2. Spring 通知类型有哪些？</h2><p>答：Spring 通知类型总共有 5 种：前置通知、环绕通知、后置通知、异常通知、最终通知。</p><ul><li><p>前置通知（Before advice）：在目标方法执行之前执行的通知。在某连接点（ join point ）之前执行的通知，但这个通知不能阻止连接点前的执行（除非它抛出一个异常）。</p></li><li><p>环绕通知（Around Advice）：在目标方法执行之前和之后都可以执行额外代码的通知，也可以选择是否继续执行连接点或直接返回它们自己的返回值或抛出异常来结束执行。</p></li><li><p>后置通知（After (finally) advice）：目标方法执行之后（某连接点退出的时候）执行的通知（不论是正常返回还是异常退出）。</p></li><li><p>异常后通知（After throwing advice）：在方法抛出异常退出时执行的通知。</p></li><li><p>最终通知（After returning advice）：在某连接点（join point）正常完成后执行的通知，例如，一个方法没有抛出任何异常，正常返回。</p></li></ul><h2 id="_3-怎么理解-spring-中的-ioc-容器" tabindex="-1"><a class="header-anchor" href="#_3-怎么理解-spring-中的-ioc-容器" aria-hidden="true">#</a> 3. 怎么理解 Spring 中的 IOC 容器？</h2><p>答：Spring IOC 就是把创建对象的权利交给框架去控制，而不需要人为的去创建，这样就实现了可插拔式的接口编程，有效地降低代码的耦合度，降低了扩展和维护的成本。</p><p>比如，去某地旅游不再用自己亲自为订购 A 酒店还是 B 酒店而发愁了，只需要把住店的需求告诉给某个托管平台，这个托管平台就会帮你订购一个既便宜又舒适的酒店，而这个帮你订购酒店的行为就可以称之为控制反转。</p><h2 id="_4-怎么理解-spring-中的依赖注入" tabindex="-1"><a class="header-anchor" href="#_4-怎么理解-spring-中的依赖注入" aria-hidden="true">#</a> 4. 怎么理解 Spring 中的依赖注入？</h2><p>答：依赖注入是指组件之间的依赖关系由容器在运行期决定，即由容器动态的将某个依赖关系注入到组件之中。依赖注入的目的并非为软件系统带来更多功能，而是为了提升组件重用的频率，并为系统搭建一个灵活、可扩展的平台。通过依赖注入机制，我们只需要通过简单的配置，而无需任何代码就可指定目标需要的资源，完成自身的业务逻辑，而不需要关心具体的资源来自何处，由谁实现。</p><h2 id="_5-ioc-和-di-有什么关系" tabindex="-1"><a class="header-anchor" href="#_5-ioc-和-di-有什么关系" aria-hidden="true">#</a> 5. IoC 和 DI 有什么关系？</h2><p>答：IoC 是 Spring 中一个极为重要的概念，提供了对象管理的功能，从而省去了人为创建麻烦，而 DI 正是实现 IoC 的方法和手段。</p><h2 id="_6-component-和-bean-有什么区别" tabindex="-1"><a class="header-anchor" href="#_6-component-和-bean-有什么区别" aria-hidden="true">#</a> 6. @Component 和 @Bean 有什么区别？</h2><p>答：它们的作用对象不同：</p><ul><li><code>@Component</code> 作用于类；</li><li><code>@Bean</code> 注解作用于方法。</li></ul><p>@Component 通常是通过类路径扫描来自动侦测和装配对象到 Spring 容器中，比如 @ComponentScan 注解就是定义扫描路径中的类装配到 Spring 的 Bean 容器中；@Bean 注解是告诉 Spring 这是某个类的实例，当我需要用它的时把它给我，@Bean 注解比 @Component 注解自定义性更强，很多地方我们只能通过 @Bean 注解来注册 Bean，比如当我们引用第三方库中的类需要装配到 Spring容器时，则只能通过 @Bean 来实现，比如以下示例，只能通过 @Bean 注解来实现：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WireThirdLibClass</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">ThirdLibClass</span> <span class="token function">getThirdLibClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThirdLibClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_7-spring-中-bean-的作用域有几种类型" tabindex="-1"><a class="header-anchor" href="#_7-spring-中-bean-的作用域有几种类型" aria-hidden="true">#</a> 7. Spring 中 bean 的作用域有几种类型？</h2><p>答：Spring 中 bean 的作用域有四种类型，如下列表：</p><ul><li>单例（Singleton）：整个应用程序，只创建 bean 的一个实例；</li><li>原型（Prototype）：每次注入都会创建一个新的 bean 实例；</li><li>会话（Session）：每个会话创建一个 bean 实例，只在 Web 系统中有效；</li><li>请求（Request）：每个请求创建一个 bean 实例，只在 Web 系统中有效。</li></ul><p>Spring 默认的是单例模式。</p><h2 id="_8-什么是-spring-的内部-bean" tabindex="-1"><a class="header-anchor" href="#_8-什么是-spring-的内部-bean" aria-hidden="true">#</a> 8. 什么是 Spring 的内部 bean？</h2><p>答：当一个 bean 仅被用作另一个 bean 的属性时，它能被声明为一个内部 bean，为了定义 inner Bean，在 Spring 的基于 XML 的配置元数据中，可以在 <code>&lt;property/&gt;</code> 或 <code>&lt;constructor-arg/&gt;</code> 元素内使用 <code>&lt;bean/&gt;</code> 元素，内部 bean 通常是匿名的，它们的 Scope 一般是 prototype 。</p><h2 id="_9-spring-注入方式有哪些" tabindex="-1"><a class="header-anchor" href="#_9-spring-注入方式有哪些" aria-hidden="true">#</a> 9. Spring 注入方式有哪些？</h2><p>答：Spring 的注入方式包含以下五种：</p><ul><li>setter 注入</li><li>构造方法注入</li><li>注解注入</li><li>静态工厂注入</li><li>实例工厂注入</li></ul><p>其中最常用的是前三种，官方推荐使用的是注解注入，相对使用更简单，维护成本更低，更直观。</p><h2 id="_10-在-spring-中如何操作数据库" tabindex="-1"><a class="header-anchor" href="#_10-在-spring-中如何操作数据库" aria-hidden="true">#</a> 10. 在 Spring 中如何操作数据库？</h2><p>答：在 Spring 中操作数据库，可以使用 Spring 提供的 JdbcTemplate 对象，JdbcTemplate 类提供了很多便利的方法，比如把数据库数据转变成基本数据类型或对象，执行自定义的 SQL 语句，提供了自定义的数据错误处理等，JdbcTemplate 使用示例如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>\n<span class="token keyword">private</span> <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span>\n\n<span class="token comment">// 新增</span>\n<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;save&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;INSERT INTO USER (USER_NAME,PASS_WORD) VALUES (&#39;laowang&#39;,&#39;123&#39;)&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> rows <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;执行成功，影响&quot;</span> <span class="token operator">+</span> rows <span class="token operator">+</span> <span class="token string">&quot;行&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 删除</span>\n<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;del&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> rows<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;DELETE FROM  USER  WHERE ID = ?&quot;</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;执行成功，影响&quot;</span> <span class="token operator">+</span> rows <span class="token operator">+</span> <span class="token string">&quot;行&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 查询</span>\n<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;getMapById&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">Map</span> <span class="token function">getMapById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM USER WHERE ID = ?&quot;</span><span class="token punctuation">;</span>\n    <span class="token class-name">Map</span> map<span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForMap</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> map<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="_11-spring-的-jdbctemplate-对象和-jdbc-有什么区别" tabindex="-1"><a class="header-anchor" href="#_11-spring-的-jdbctemplate-对象和-jdbc-有什么区别" aria-hidden="true">#</a> 11. Spring 的 JdbcTemplate 对象和 JDBC 有什么区别？</h2><p>答：Spring 的 JdbcTemplate 是对 JDBC API 的封装，提供更多的功能和更便利的操作，比如 JdbcTemplate 拥有：</p><ul><li>JdbcTemplate 是线程安全的；</li><li>实例化操作比较简单，仅需要传递 DataSource；</li><li>自动完成资源的创建和释放工作；</li><li>创建一次 JdbcTemplate，到处可用，避免重复开发。</li></ul><h2 id="_12-spring-有几种实现事务的方式" tabindex="-1"><a class="header-anchor" href="#_12-spring-有几种实现事务的方式" aria-hidden="true">#</a> 12. Spring 有几种实现事务的方式？</h2><p>答：Spring 实现事务有两种方式：编程式事务和声明式事务。</p><p>编程式事务，使用 TransactionTemplate 或 PlatformTransactionManager 实现，示例代码如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">TransactionTemplate</span> transactionTemplate<span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>\n    <span class="token comment">// Spring编码式事务，回调机制</span>\n    transactionTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransactionCallback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token annotation punctuation">@Override</span>\n        <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">doInTransaction</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">try</span> <span class="token punctuation">{</span>\n                userMapper<span class="token punctuation">.</span><span class="token function">insertSelective</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">// 异常，设置为回滚</span>\n                status<span class="token punctuation">.</span><span class="token function">setRollbackOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">throw</span> e<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>如果有异常，调用 status.setRollbackOnly() 回滚事务，否则正常执行 doInTransaction() 方法，正常提交事务。</p><p>如果事务控制的方法不需要返回值，就可以使用 TransactionCallbackWithoutResult（TransactionCallback 接口的抽象实现类）示例代码如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Spring编码式事务，回调机制</span>\n    transactionTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransactionCallbackWithoutResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token annotation punctuation">@Override</span>\n        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doInTransactionWithoutResult</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">try</span> <span class="token punctuation">{</span>\n                userMapper<span class="token punctuation">.</span><span class="token function">insertSelective</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 异常，设置为回滚</span>\n            status<span class="token punctuation">.</span><span class="token function">setRollbackOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">throw</span> e<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>声明式事务，底层是建立在 Spring AOP 的基础上，在方式执行前后进行拦截，并在目标方法开始执行前创建新事务或加入一个已存在事务，最后在目标方法执行完后根据情况提交或者回滚事务。</p><p>声明式事务的优点：不需要编程，减少了代码的耦合，在配置文件中配置并在目标方法上添加 @Transactional 注解来实现，示例代码如下：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;laowang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    userMapper<span class="token punctuation">.</span><span class="token function">insertSelective</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;异常&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>抛出异常，事务会自动回滚，如果方法正常执行，则会自动提交事务。</p><h2 id="_13-spring-事务隔离级别有哪些" tabindex="-1"><a class="header-anchor" href="#_13-spring-事务隔离级别有哪些" aria-hidden="true">#</a> 13. Spring 事务隔离级别有哪些？</h2><p>答：Spring 的注入方式包含以下五种：</p><ul><li>ISOLATION_DEFAULT：用底层数据库的设置隔离级别，数据库设置的是什么我就用什么；</li><li>ISOLATIONREADUNCOMMITTED：未提交读，最低隔离级别、事务未提交前，就可被其他事务读取（会出现幻读、脏读、不可重复读）；</li><li>ISOLATIONREADCOMMITTED：提交读，一个事务提交后才能被其他事务读取到（会造成幻读、不可重复读），SQL server 的默认级别；</li><li>ISOLATIONREPEATABLEREAD：可重复读，保证多次读取同一个数据时，其值都和事务开始时候的内容是一致，禁止读取到别的事务未提交的数据（会造成幻读），MySQL 的默认级别；</li><li>ISOLATION_SERIALIZABLE：序列化，代价最高最可靠的隔离级别，该隔离级别能防止脏读、不可重复读、幻读。</li></ul><p>默认值为 ISOLATION_DEFAULT 遵循数据库的事务隔离级别设置。</p><h2 id="_14-spring-声明式事务无效可能的原因有哪些" tabindex="-1"><a class="header-anchor" href="#_14-spring-声明式事务无效可能的原因有哪些" aria-hidden="true">#</a> 14. Spring 声明式事务无效可能的原因有哪些？</h2><p>答：可能的原因如下：</p><ul><li>MySQL 使用的是 MyISAM 引擎，而 MyISAM 是不支持事务的；</li><li>@Transactional 使用在非 public 方法上，@Transactional 注解只能支持 public 级别，其他类型声明的事务不会生效；</li><li>@Transactional 在同一个类中无事务方法 A() 内部调用有事务方法 B()，那么此时 B() 事物不会生效。</li></ul><h2 id="_15-spring-中的-aop-的底层实现原理是什么" tabindex="-1"><a class="header-anchor" href="#_15-spring-中的-aop-的底层实现原理是什么" aria-hidden="true">#</a> 15. Spring 中的 AOP 的底层实现原理是什么？</h2><p>答：Spring AOP 的底层实现原理就是动态代理。</p><p>Spring AOP 的动态代理有两种实现方式，对于接口使用的是 JDK 自带的动态代理来实现的，而对比非接口使用的是 CGLib 来实现的。</p><h2 id="_16-spring-中的-bean-是线程安全的吗" tabindex="-1"><a class="header-anchor" href="#_16-spring-中的-bean-是线程安全的吗" aria-hidden="true">#</a> 16. Spring 中的 Bean 是线程安全的吗？</h2><p>答：Spring 中的 Bean 默认是单例模式，Spring 框架并没有对单例 Bean 进行多线程的封装处理，因此默认的情况 Bean 并非是安全的，最简单保证 Bean 安全的举措就是设置 Bean 的作用域为 Prototype<small>（原型）</small>模式，这样每次请求都会新建一个 Bean 。</p><h2 id="_17-说一下-spring-中-bean-的生命周期" tabindex="-1"><a class="header-anchor" href="#_17-说一下-spring-中-bean-的生命周期" aria-hidden="true">#</a> 17. 说一下 Spring 中 Bean 的生命周期？</h2><p>答：Spring 中 Bean 的生命周期如下：</p><ol><li>实例化 Bean：对于 BeanFactory 容器，当客户向容器请求一个尚未初始化的 Bean 时，或初始化 Bean 的时候需要注入另一个尚未初始化的依赖时，容器就会调用 createBean 进行实例化。对于 ApplicationContext 容器，当容器启动结束后，通过获取 BeanDefinition 对象中的信息，实例化所有的 Bean；</li><li>设置对象属性（依赖注入）：实例化后的对象被封装在 BeanWrapper 对象中，紧接着 Spring 根据 BeanDefinition 中的信息以及通过 BeanWrapper 提供的设置属性的接口完成依赖注入；</li><li>处理 Aware 接口：Spring 会检测该对象是否实现了 xxxAware 接口，并将相关的 xxxAware 实例注入给 Bean： <ul><li>如果这个 Bean 已经实现了 BeanNameAware 接口，会调用它实现的 setBeanName(String BeanId) 方法，此处传递的就是 Spring 配置文件中 Bean 的 id 值；</li><li>如果这个 Bean 已经实现了 BeanFactoryAware 接口，会调用它实现的 setBeanFactory() 方法，传递的是 Spring 工厂自身；</li><li>如果这个 Bean 已经实现了 ApplicationContextAware 接口，会调用 setApplicationContext(ApplicationContext) 方法，传入 Spring 上下文；</li></ul></li><li>BeanPostProcessor：如果想对 Bean 进行一些自定义的处理，那么可以让 Bean 实现了 BeanPostProcessor 接口，那将会调用 postProcessBeforeInitialization(Object obj, String s) 方法；</li><li>InitializingBean 与 init-method：如果 Bean 在 Spring 配置文件中配置了 init-method 属性，则会自动调用其配置的初始化方法；</li><li>如果这个 Bean 实现了 BeanPostProcessor 接口，将会调用 postProcessAfterInitialization(Object obj, String s) 方法；由于这个方法是在 Bean 初始化结束时调用的，因而可以被应用于内存或缓存技术；</li></ol><p>以上几个步骤完成后，Bean 就已经被正确创建了，之后就可以使用这个 Bean 了。</p><ol start="7"><li>DisposableBean：当 Bean 不再需要时，会经过清理阶段，如果 Bean 实现了 DisposableBean 这个接口，会调用其实现的 destroy() 方法；</li><li>destroy-method：最后，如果这个 Bean 的 Spring 配置中配置了 destroy-method 属性，会自动调用其配置的销毁方法。</li></ol><h2 id="_18-spring-有哪些优点" tabindex="-1"><a class="header-anchor" href="#_18-spring-有哪些优点" aria-hidden="true">#</a> 18.Spring 有哪些优点?</h2><p>答：Spring 优点如下：</p><ul><li><p>开源免费的热门框架，稳定性高、解决问题成本低；</p></li><li><p>方便集成各种优秀的框架；</p></li><li><p>降低了代码耦合性，通过 Spring 提供的 IoC 容器，我们可以将对象之间的依赖关系交由 Spring 进行控制，避免硬编码所造成的过度程序耦合；</p></li><li><p>方便程序测试，在 Spring 里，测试变得非常简单，例如：Spring 对 Junit 的支持，可以通过注解方便的测试 Spring 程序；</p></li><li><p>降低 Java EE API 的使用难度，Spring 对很多难用的 Java EE API（如 JDBC、JavaMail、远程调用等）提供了一层封装，通过 Spring 的简易封装，让这些 Java EE API 的使用难度大为降低。</p></li></ul><h2 id="_19-spring、springboot、springcloud-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_19-spring、springboot、springcloud-的区别是什么" aria-hidden="true">#</a> 19.Spring、SpringBoot、SpringCloud 的区别是什么？</h2><p>答：它们的区别如下：</p><ul><li>Spring Framework 简称 Spring，是整个 Spring 生态的基础。</li><li>Spring Boot 是一个快速开发框架，让开发者可以迅速搭建一套基于 Spring 的应用程序，并且将常用的 Spring 模块以及第三方模块，如 MyBatis、Hibernate 等都做了很好的集成，只需要简单的配置即可使用，不需要任何的 XML 配置文件，真正做到了开箱即用，同时默认支持 JSON 格式的数据，使用 Spring Boot 进行前后端分离开发也非常便捷。</li><li>Spring Cloud 是一套整合了分布式应用常用模块的框架，使得开发者可以快速实现微服务应用。作为目前非常热门的技术，有关微服务的话题总是在各种场景下被大家讨论，企业的招聘信息中也越来越多地出现对于微服务架构能力的要求。</li></ul><h2 id="_20-spring-中都是用了哪些设计模式" tabindex="-1"><a class="header-anchor" href="#_20-spring-中都是用了哪些设计模式" aria-hidden="true">#</a> 20.Spring 中都是用了哪些设计模式？</h2><p>答：Spring 中使用的设计模式如下：</p><ul><li><p>工厂模式：通过 BeanFactory、ApplicationContext 来创建 bean 都是属于工厂模式；</p></li><li><p>单例、原型模式：创建 bean 对象设置作用域时，就可以声明 Singleton<small>（单例模式）</small>、Prototype<small>（原型模式）</small>；</p></li><li><p>察者模式：Spring 可以定义一下监听，如 ApplicationListener 当某个动作触发时就会发出通知；</p></li><li><p>责任链模式：AOP 拦截器的执行；</p></li><li><p>策略模式：在创建代理类时，如果代理的是接口使用的是 JDK 自身的动态代理，如果不是接口使用的是 CGLIB 实现动态代理。</p></li></ul>',71),e={render:function(n,a){return p}}}}]);