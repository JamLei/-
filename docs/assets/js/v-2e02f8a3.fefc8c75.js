"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[7613],{85635:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-2e02f8a3",path:"/other/07-sharding-jdbc.html",title:"Sharding JDBC",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. sharding-jdbc 配置读写分离",slug:"_1-sharding-jdbc-配置读写分离",children:[]},{level:2,title:"分库分表",slug:"分库分表",children:[]},{level:2,title:"5. 绑定表",slug:"_5-绑定表",children:[]},{level:2,title:"6. 内置雪花算法",slug:"_6-内置雪花算法",children:[]},{level:2,title:"8. 公共表",slug:"_8-公共表",children:[]}],filePathRelative:"other/07-sharding-jdbc.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},76479:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<h1 id="sharding-jdbc" tabindex="-1"><a class="header-anchor" href="#sharding-jdbc" aria-hidden="true">#</a> Sharding JDBC</h1><p>sharding-jdbc 是 Sharding Sphere 家族中的第一个产品。</p><p>它是轻量级 Java 框架，在 Java 的 JDBC 层提供的额外服务。 它使用客户端直连数据库，以 jar 包形式提供服务，无需额外部署和依赖，可理解为增强版的 JDBC 驱动，完全兼容 JDBC 和各种 ORM 框架。</p><blockquote><p>sharding-jdbc 在升级到 <code>4.x</code> 版本之后，配置项的名称<small>（前缀）</small>发生了变化，留意你所使用的版本以及你在官网上所查看的文档的版本是否对应。</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sharding-sphere.version</span><span class="token punctuation">&gt;</span></span>4.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sharding-sphere.version</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.shardingsphere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sharding-jdbc-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>${sharding-sphere.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.shardingsphere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sharding-jdbc-spring-namespace<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>${sharding-sphere.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_1-sharding-jdbc-配置读写分离" tabindex="-1"><a class="header-anchor" href="#_1-sharding-jdbc-配置读写分离" aria-hidden="true">#</a> 1. sharding-jdbc 配置读写分离</h2><p>在下面的实例中，简单起见，是使用同一个 mysql 的 2 个 database 扮演主从库的角色。</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">shardingsphere</span><span class="token punctuation">:</span>\n    <span class="token key atrule">datasource</span><span class="token punctuation">:</span>\n      <span class="token key atrule">names</span><span class="token punctuation">:</span> master<span class="token punctuation">,</span>slave0\n      <span class="token key atrule">master</span><span class="token punctuation">:</span>\n        <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource\n        <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver\n        <span class="token key atrule">jdbc-url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/scott<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>\n        <span class="token key atrule">username</span><span class="token punctuation">:</span> root\n        <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>\n      <span class="token key atrule">slave0</span><span class="token punctuation">:</span>\n        <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource\n        <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver\n        <span class="token key atrule">jdbc-url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/scott_test<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>\n        <span class="token key atrule">username</span><span class="token punctuation">:</span> root\n        <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>\n    <span class="token key atrule">masterslave</span><span class="token punctuation">:</span>\n      <span class="token key atrule">name</span><span class="token punctuation">:</span> ms\n      <span class="token key atrule">master-data-source-name</span><span class="token punctuation">:</span> master\n      <span class="token key atrule">slave-data-source-names</span><span class="token punctuation">:</span> slave0\n      <span class="token key atrule">load-balance-algorithm-type</span><span class="token punctuation">:</span> round_robin\n    <span class="token key atrule">props</span><span class="token punctuation">:</span>\n      <span class="token key atrule">sql</span><span class="token punctuation">:</span>\n        <span class="token key atrule">show</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>Sharding JDBC 和 Mybatis /JPA 可以无缝整合。唯一需要注意的地方就是，配置文件和配置类中出现的是逻辑表名<small>（<em><strong>department</strong></em>）</small>，而不是物理表名<small>（<em><strong>department0</strong></em>、<em><strong>department1</strong></em>）</small>。</p><h2 id="分库分表" tabindex="-1"><a class="header-anchor" href="#分库分表" aria-hidden="true">#</a> 分库分表</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">shardingsphere</span><span class="token punctuation">:</span>\n    <span class="token key atrule">datasource</span><span class="token punctuation">:</span>\n      <span class="token key atrule">names</span><span class="token punctuation">:</span> ds0<span class="token punctuation">,</span>ds1\n      <span class="token key atrule">ds0</span><span class="token punctuation">:</span>\n        <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource\n        <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver\n        <span class="token key atrule">jdbc-url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/scott<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>\n        <span class="token key atrule">username</span><span class="token punctuation">:</span> root\n        <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>\n      <span class="token key atrule">ds1</span><span class="token punctuation">:</span>\n        <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource\n        <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver\n        <span class="token key atrule">jdbc-url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/scott_test<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>\n        <span class="token key atrule">username</span><span class="token punctuation">:</span> root\n        <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>\n    <span class="token key atrule">sharding</span><span class="token punctuation">:</span>\n      <span class="token key atrule">default-database-strategy</span><span class="token punctuation">:</span>\n        <span class="token key atrule">inline</span><span class="token punctuation">:</span>\n          <span class="token key atrule">sharding-column</span><span class="token punctuation">:</span> id\n          <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> ds$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>id % 2<span class="token punctuation">}</span>\n      <span class="token key atrule">tables</span><span class="token punctuation">:</span>\n        <span class="token key atrule">department</span><span class="token punctuation">:</span>\n          <span class="token key atrule">actual-data-nodes</span><span class="token punctuation">:</span> ds$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>.department$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>\n          <span class="token key atrule">table-strategy</span><span class="token punctuation">:</span>\n            <span class="token key atrule">inline</span><span class="token punctuation">:</span>\n              <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> department$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>id.intdiv(2) % 2<span class="token punctuation">}</span>\n              <span class="token key atrule">sharding-column</span><span class="token punctuation">:</span> id\n        <span class="token key atrule">employee</span><span class="token punctuation">:</span>\n          <span class="token key atrule">actual-data-nodes</span><span class="token punctuation">:</span> ds$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>.employee$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..1<span class="token punctuation">}</span>\n          <span class="token key atrule">table-strategy</span><span class="token punctuation">:</span>\n            <span class="token key atrule">inline</span><span class="token punctuation">:</span>\n              <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> employee$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>id.intdiv(2) % 2<span class="token punctuation">}</span>\n              <span class="token key atrule">sharding-column</span><span class="token punctuation">:</span> id\n    <span class="token key atrule">props</span><span class="token punctuation">:</span>\n      <span class="token key atrule">sql</span><span class="token punctuation">:</span>\n        <span class="token key atrule">show</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>在上面的配置中：</p><ul><li><p>所有的表都以 id % 2 的值为依据进行分库，这是默认设置。</p><p>当然，你如果对某个表的分库的逻辑有不同的需求，对于默认规则不满意，那么你可以单独指定。</p></li><li><p>department 和 employee 表都是以 <code>id.intdiv(2) % 2</code> 的结果为一句进行分表。</p><p>一个小技巧：<code>id.intdiv(2)</code> 也可以写成 <code>id &gt;&gt; 1</code> 的形式。</p></li></ul><p>当然，并不是一定要像上面的例子一样，必须同时使用分库分表。你也可以只分库部分表，或者只分表不分库。</p><ul><li><p>水平分库的优点是：多个独立的 MySQL 分别提供服务，因此就没有磁盘 IO 的竞争。新能回避分表要好。</p></li><li><p>水平分表的优点是：无论分成多少张表，大家都还是在同一个数据库中，因此可以使用数据库事务。</p></li></ul><hr><h2 id="_5-绑定表" tabindex="-1"><a class="header-anchor" href="#_5-绑定表" aria-hidden="true">#</a> 5. 绑定表</h2><p>绑定表的概念是用于提高关联查询时的速度。</p><p><em><strong>department</strong></em> 表和 <em><strong>employee</strong></em> 表，均以部门 ID 作为分区键进行分片，那么它们互为绑定表关系。绑定表之间的多表关联查询不会出现笛卡尔积关联，关联查询效率将大大提升。例如：</p><p>查询部门编号为 1 的部门信息，并随带查出其下的所有员工信息。逻辑上，应该执行的是如下 SQL 语句：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> department d <span class="token keyword">join</span> employee e <span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>由于我们执行了分表，逻辑上，<em><strong>department</strong></em> 表是 <em><strong>department0</strong></em> 和 <em><strong>department1</strong></em> 两个；<em><strong>employee</strong></em> 表是 <em><strong>employee0</strong></em> 和 <em><strong>employee1</strong></em> 两个。sharding-jdbc 即不知道你要查询的部门信息是在 <em><strong>department0</strong></em> 还是在 <em><strong>department1</strong></em> 中，也不知道与之关联的员工信息是在 <em><strong>employee0</strong></em> 还是在 <em><strong>employee1</strong></em> 中。</p><p>这种情况下，它只能 <em><strong>employee0</strong></em> 和 <em><strong>employee1</strong></em> 两个表都查一遍。因此，实际上 sharding-jdbc 执行列 4 条 SQL 语句：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> department0 d <span class="token keyword">join</span> employee0 e <span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> department0 d <span class="token keyword">join</span> employee1 e <span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> department1 d <span class="token keyword">join</span> employee0 e <span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> department1 d <span class="token keyword">join</span> employee1 e <span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果在配置中将 <em><strong>employee</strong></em> 和 <em><strong>department</strong></em> 以相同的分区键进行分片，并将它们设置为绑定表，那么上述的情况会得到简化：与 <em><strong>department0</strong></em> 有关的员工信息必然在 <em><strong>employee0</strong></em> 中；与 <em><strong>department1</strong></em> 有关的员工信息必然在 <em><strong>employee1</strong></em> 中。</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code>...\n<span class="token attr-name">spring.shardingsphere.sharding.tables.department.table-strategy.inline.sharding-column</span><span class="token punctuation">=</span><span class="token attr-value">id</span>\n...\n<span class="token attr-name">spring.shardingsphere.sharding.tables.employee.table-strategy.inline.sharding-column</span><span class="token punctuation">=</span><span class="token attr-value">department_id</span>\n...\n<span class="token attr-name">spring.shardingsphere.sharding.binding-tables[0]</span><span class="token punctuation">=</span><span class="token attr-value">employee,department</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这样，sharding-jdbc 未来就只执行两条 SQL 语句：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> department0 d <span class="token keyword">join</span> employee0 e <span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> department1 d <span class="token keyword">join</span> employee1 e <span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span> e<span class="token punctuation">.</span>department_id<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6-内置雪花算法" tabindex="-1"><a class="header-anchor" href="#_6-内置雪花算法" aria-hidden="true">#</a> 6. 内置雪花算法</h2><p>sharding-jdbc 通过【主键生成策略】提供了内置的雪花算法来生成主键 ID 。当然，与之对应的你的表的主键 ID 的类型应该是 BIGINT 。</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment"># department 表配置</span>\n...\n<span class="token attr-name">spring.shardingsphere.sharding.tables.department.key-generator.column</span><span class="token punctuation">=</span><span class="token attr-value">id</span>\n<span class="token attr-name">spring.shardingsphere.sharding.tables.department.key-generator.type</span><span class="token punctuation">=</span><span class="token attr-value">SNOWFLAKE</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>\n<span class="token keyword">private</span> <span class="token class-name">JdbcTemplate</span> template<span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@Test</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">department</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into department(name, location) values(?, ?)&quot;</span><span class="token punctuation">;</span>\n    template<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token string">&quot;ACCOUNTING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;NEW YORK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    template<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token string">&quot;RESEARCH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DALLAS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    template<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token string">&quot;SALES&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CHICAGO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    template<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token string">&quot;OPERATIONS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BOSTON&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_8-公共表" tabindex="-1"><a class="header-anchor" href="#_8-公共表" aria-hidden="true">#</a> 8. 公共表</h2><p>公共表属于系统中数据量较小，变动少，而且属于高频联合查询的依赖表。参数表、数据字典表等属于此类型。可以将这类表在每个数据库都保存一份，所有更新操作都同时发送到所有分库执行。接下来看一下如何使用 Sharding-JDBC 实现公共表。</p><ul><li><p>在 <em><strong>ds0</strong></em> 和 <em><strong>ds1</strong></em> 中都建立 <em><strong>department</strong></em> 表，且表名一样，没有 0、1 之类的后缀以示区别。</p></li><li><p>application.properties 配置</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">spring.shardingsphere.sharding.broadcast-tables</span><span class="token punctuation">=</span><span class="token attr-value">department</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>执行测试代码</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">department</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into department(id, name, location) values(?, ?, ?)&quot;</span><span class="token punctuation">;</span>\n    template<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;ACCOUNTING&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;NEW YORK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    template<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;RESEARCH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DALLAS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    template<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;SALES&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CHICAGO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    template<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;OPERATIONS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BOSTON&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul><p>你会发现 <em><strong>ds0</strong></em> 和 <em><strong>ds1</strong></em> 中的的 <em><strong>department</strong></em> 表都有完整的数据。</p>',36),e={render:function(n,s){return p}}}}]);