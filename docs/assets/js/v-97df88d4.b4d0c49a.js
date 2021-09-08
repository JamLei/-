"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[2284],{20372:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-97df88d4",path:"/mybatis/07-mybatis-%E6%B3%A8%E8%A7%A3.html",title:"MyBatis 注解",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"简单使用",slug:"简单使用",children:[]},{level:2,title:"结果集映射",slug:"结果集映射",children:[]},{level:2,title:"关系映射",slug:"关系映射",children:[]},{level:2,title:"@SelectProvider 单独提供 SQL 语句",slug:"selectprovider-单独提供-sql-语句",children:[]},{level:2,title:"常用功能注解汇总",slug:"常用功能注解汇总",children:[]},{level:2,title:"mybatis-generator 对注解的支持",slug:"mybatis-generator-对注解的支持",children:[]}],filePathRelative:"mybatis/07-mybatis-注解.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},97606:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var t=a(66252);const p=(0,t.uE)('<h1 id="mybatis-注解" tabindex="-1"><a class="header-anchor" href="#mybatis-注解" aria-hidden="true">#</a> MyBatis 注解</h1><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><p>在 MyBatis 的核心配置文件中，你需要配置的不是 mapper 映射文件，而是 Mapper 接口所在的包路径。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- 在配置文件中 关联包下的 接口类--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.example.dao<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>另外，我们也不再需要 mapper 映射文件。对于 DAO 中的方法所对应的 SQL 语句，我们直接以注解的形式标注在方法上。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DepartmentMapper</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from dept where deptno = #{id}&quot;</span><span class="token punctuation">)</span>\n    <span class="token class-name">Department</span> <span class="token function">selectByPK</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from dept&quot;</span><span class="token punctuation">)</span>\n    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">&gt;</span></span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Delete</span><span class="token punctuation">(</span><span class="token string">&quot;delete from dept where deptno = #{id}&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">int</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Insert</span><span class="token punctuation">(</span><span class="token string">&quot;insert into dept values(NULL, #{name}, #{location})&quot;</span><span class="token punctuation">)</span>\n    <span class="token annotation punctuation">@Options</span><span class="token punctuation">(</span>useGeneratedKeys <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> keyProperty <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> keyColumn <span class="token operator">=</span> <span class="token string">&quot;deptno&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">int</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">Department</span> dept<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>上述代码中的注解很好理解。唯一需要注意的是，如果在执行 insert 语句时，需要启用 MyBatis 的『主键回填』功能，需要多使用一个 <strong>@Options</strong> 注解。</p><h2 id="结果集映射" tabindex="-1"><a class="header-anchor" href="#结果集映射" aria-hidden="true">#</a> 结果集映射</h2><p>我们在使用 MyBatis 不可能都是遇到最简单的情况：表的列名与类的属性名一致。当表的列明与类的属性名不一致时，需要去配置结果集映射。</p><p>通过注解进行结果集的映射是通过使用 <strong>@Results</strong>、<strong>@Result</strong> 和 <strong>@ResultMap</strong> 注解完成的。其中，</p><ul><li><p><strong>@Results</strong> 和 <strong>@Result</strong> 结合使用进行结果集映射；</p></li><li><p><strong>@ResultMap</strong> 则是在别处『调用』映射规则。</p></li><li><p><strong>@Results</strong> 和 <strong>@Result</strong> 只需要配置一次，而 <strong>@ResultMap</strong> 会在多出使用。</p></li></ul><p>例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from dept where deptno=#{id}&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">&quot;department&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;deptno&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;location&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;loc&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">Department</span> <span class="token function">selectByPK</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from dept&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@ResultMap</span><span class="token punctuation">(</span><span class="token string">&quot;department&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">&gt;</span></span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="关系映射" tabindex="-1"><a class="header-anchor" href="#关系映射" aria-hidden="true">#</a> 关系映射</h2><p>一对一、一对多和多对多的关系映射就是在结果集映射的基础上再使用 <strong>@One</strong> 和 <strong>@Many</strong> 注解。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from emp where empno=#{id}&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;empno&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;empno&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;ename&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;ename&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;job&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;job&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;mgr&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;mgr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;hiredate&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;hiredate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;sal&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;sal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;comm&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;comm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;dept&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;deptno&quot;</span><span class="token punctuation">,</span> one <span class="token operator">=</span> <span class="token annotation punctuation">@One</span><span class="token punctuation">(</span>select <span class="token operator">=</span> <span class="token string">&quot;dao.DepartmentMapper.selectByPK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">Employee</span> <span class="token function">selectByPK</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from emp where deptno = #{id}&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@ResultMap</span><span class="token punctuation">(</span><span class="token string">&quot;employee&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectByEmployeeID</span><span class="token punctuation">(</span><span class="token keyword">int</span> deptno<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from dept where deptno=#{id}&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">&quot;department&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;deptno&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;deptno&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;location&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;loc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">&quot;employeeList&quot;</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">&quot;deptno&quot;</span><span class="token punctuation">,</span> many <span class="token operator">=</span> <span class="token annotation punctuation">@Many</span><span class="token punctuation">(</span>select <span class="token operator">=</span> <span class="token string">&quot;dao.EmployeeMapper.selectByDepartmentID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">Department</span> <span class="token function">selectByPK</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="selectprovider-单独提供-sql-语句" tabindex="-1"><a class="header-anchor" href="#selectprovider-单独提供-sql-语句" aria-hidden="true">#</a> @SelectProvider 单独提供 SQL 语句</h2><p>@SelectProvider 功能就是用来单独写一个类与方法，用来提供一些 XML 或者注解中不好写的 SQL 。</p><p>写一个简单的 @SelectProvider 的用法，新建类，添加一个根据 userId 查询 User 的方法。</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">public</span> class MySelectSqlProvider {\n\n    <span class="token keyword">public</span> String selectByUserId<span class="token punctuation">(</span>Long id<span class="token punctuation">)</span> {\n        StringBuffer buffer <span class="token operator">=</span> new StringBuffer<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        buffer<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM user where &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        buffer<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;id = &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> buffer<span class="token punctuation">.</span>toString<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',21),e=(0,t.Uk)("MySelectSqlProvider 中提供了一个很简单的查询方法，根据 userId 返回 User 对象，里面就是用了一个 StringBuffer 对象来拼接一个 SQL 语句。更多、更优雅的写法是通过 MyBatis 中的 SQL Builder 的拼接一个 SQL 语句。SQL Builder 写法在"),o={href:"http://www.mybatis.org/mybatis-3/zh/statement-builders.html",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("官方网站地址"),c=(0,t.Uk)(" 。"),u=(0,t.uE)('<p>UserMapper/UserDao 中使用它:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ResultMap</span><span class="token punctuation">(</span><span class="token string">&quot;BaseResultMap&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@SelectProvider</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">MySelectSqlProvider</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&quot;selectByUserId&quot;</span><span class="token punctuation">)</span>\n<span class="token class-name">User</span> <span class="token function">getUserByUserId</span><span class="token punctuation">(</span><span class="token keyword">long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>需要说的就是这一个，这一个方法在 XML 中没有对应的 SQL，在该方法上也没有 @Select 注解修饰，只有 @SelectProvider 注解，@SelectProvider 中两个属性，type 为提供 SQL 的类，method 为指定方法。</p><p>另外，除了有 @SelectProvider 之外，还有 @InsertProvider、@UpdateProvider、@DeleteProvider 。</p><h2 id="常用功能注解汇总" tabindex="-1"><a class="header-anchor" href="#常用功能注解汇总" aria-hidden="true">#</a> 常用功能注解汇总</h2><table><thead><tr><th style="text-align:left;">注解</th><th style="text-align:left;">目标</th><th style="text-align:left;">相对应的 XML</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>@Param</strong></td><td style="text-align:left;">参数</td><td style="text-align:left;">N/A</td><td style="text-align:left;">如果你的映射器的方法需要多个参数，这个注解可以被应用于映射器的方法参数来给每个参数一个名字。<br>否则，多参数将会以它们的顺序位置来被命名<small>（不包括任何 RowBounds 参数）</small>比如。<em>#{param1}</em> , <em>#{param2}</em> 等，这是默认的。<br>使用 <strong>@Param(&quot;person&quot;)</strong>，参数应该被命名为 <strong>#{person}</strong>。</td></tr><tr><td style="text-align:left;"><strong>@Insert</strong> <br><br> <strong>@Update</strong> <br><br> <strong>@Delete</strong> <br><br> <strong>@Select</strong></td><td style="text-align:left;">方法</td><td style="text-align:left;"><strong>&lt;insert&gt;</strong> <br><br> <strong>&lt;update&gt;</strong> <br><br> <strong>&lt;delete&gt;</strong> <br><br> <strong>&lt;select&gt;</strong></td><td style="text-align:left;">这些注解中的每一个代表了执行的真实 SQL。它们每一个都使用字符串数组<small>（或单独的字符串）</small>。<br><br>如果传递的是字符串数组，它们由每个分隔它们的单独空间串联起来。</td></tr><tr><td style="text-align:left;"><strong>@Results</strong></td><td style="text-align:left;">方法</td><td style="text-align:left;"><strong>&lt;resultMap&gt;</strong></td><td style="text-align:left;">结果映射的列表，包含了一个特别结果列如何被映射到属性或字段的详情。属性有 <em>value</em>，<em>id</em> 。<br><strong>value</strong> 属性是 Result 注解的数组。<br><strong>id</strong> 的属性是结果映射的名称。</td></tr><tr><td style="text-align:left;"><strong>@Result</strong></td><td style="text-align:left;">N/A</td><td style="text-align:left;"><strong>&lt;result&gt;</strong> <br> <strong>&lt;id&gt;</strong></td><td style="text-align:left;">在列和属性或字段之间的单独结果映射。属性有 id，column，property，javaType，jdbcType，typeHandler，one，many。<br><strong>id</strong> 属性是一个布尔值，表示了应该被用于比较<small>（和在 XML 映射中的 <code>&lt;id&gt;</code> 相似）</small>的属性。<br><strong>one</strong> 属性是单独的联系，和 <strong>&lt;association&gt;</strong> 相似 , 而 <strong>many</strong> 属性是对集合而言的 , 和 <strong>&lt;collection&gt;</strong> 相似。</td></tr><tr><td style="text-align:left;"><strong>@ResultMap</strong></td><td style="text-align:left;">方法</td><td style="text-align:left;">N/A</td><td style="text-align:left;">这个注解给 <strong>@Select</strong> 或者**@SelectProvider** 提供在 XML 映射中的 <strong>&lt;resultMap&gt;</strong> 的id。<br>这使得注解的 select 可以复用那些定义在 XML 中的 ResultMap。<br>如果同一 select 注解中还存在 <strong>@Results</strong> 或者 <strong>@ConstructorArgs</strong> ，那么这两个注解将被此注解覆盖。</td></tr><tr><td style="text-align:left;"><strong>@One</strong></td><td style="text-align:left;">N/A</td><td style="text-align:left;"><strong>&lt;association&gt;</strong></td><td style="text-align:left;">复杂类型的单独属性值映射。属性有 <strong>select</strong>，已映射语句<small>（也就是映射器方法）</small>的完全限定名，它可以加载合适类型的实例。<br>注意：联合映射在注解 API 中是不支持的。这是因为 Java 注解的限制，不允许循环引用。<br> <strong>fetchType</strong> 会覆盖全局的配置参数 <strong>lazyLoadingEnabled</strong> 。</td></tr><tr><td style="text-align:left;"><strong>@Many</strong></td><td style="text-align:left;">N/A</td><td style="text-align:left;"><strong>&lt;collection&gt;</strong></td><td style="text-align:left;">映射到复杂类型的集合属性。属性有 select，已映射语句<small>（也就是映射器方法）</small>的全限定名，它可以加载合适类型的实例的集合，<strong>fetchType</strong> 会覆盖全局的配置参数 <strong>lazyLoadingEnabled</strong> 。 注意联合映射在注解 API 中是不支持的。这是因为 Java 注解的限制，不允许循环引用。</td></tr><tr><td style="text-align:left;"><strong>@InsertProvider</strong> <br><br> <strong>@UpdateProvider</strong> <br><br> <strong>@DeleteProvider</strong> <br><br> <strong>@SelectProvider</strong></td><td style="text-align:left;">方法</td><td style="text-align:left;"><strong>&lt;insert&gt;</strong> <br><br> <strong>&lt;update&gt;</strong> <br><br> <strong>&lt;delete&gt;</strong> <br><br> <strong>&lt;select&gt;</strong></td><td style="text-align:left;">这些可选的 SQL 注解允许你指定一个类名和一个方法在执行时来返回运行允许创建动态的 SQL。基于执行的映射语句，MyBatis 会实例化这个类，然后执行由 provider 指定的方法。<br> You can pass objects that passed to arguments of a mapper method, &quot;Mapper interface type&quot; and &quot;Mapper method&quot; via theProviderContext(available since MyBatis 3.4.5 or later) as method argument. (In MyBatis 3.4 or later, it&#39;s allow multiple parameters) <br>属性有 <strong>type</strong> ，<strong>method</strong> 。<strong>type</strong> 属性是类。<strong>method</strong> 属性是方法名。</td></tr></tbody></table><h2 id="mybatis-generator-对注解的支持" tabindex="-1"><a class="header-anchor" href="#mybatis-generator-对注解的支持" aria-hidden="true">#</a> mybatis-generator 对注解的支持</h2><p>mybatis-generator 除了支持自动生成 XML 文件之外，也支持自动生成基于注解的 Mapper 接口。</p><p>只需要将 mybatis-generator 的配置文件中的 <code>&lt;javaClientGenerator ... type=&quot;...&quot;&gt;</code> 的 <strong>type</strong> 属性的值从 XMLMAPPER 改为 <strong>ANNOTATEDMAPPER</strong> 即可：</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>javaClientGenerator</span> <span class="token attr-name">targetProject</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>src/main/java<span class="token punctuation">&quot;</span></span>\n                            <span class="token attr-name">targetPackage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx.yyy.zzz.dao.mysql<span class="token punctuation">&quot;</span></span>\n                            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ANNOTATEDMAPPER<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- 主要就是这一项有变化 --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>另外，配置文件中所有与 mapper 映射文件有关的内容就都可以移除了。</p>',11),r={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,(0,t._)("a",o,[l,(0,t.Wm)(a)]),c]),u],64)}}}}]);