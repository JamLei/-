"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[9970],{75642:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-7a53afea",path:"/mysql/04-CUD.html",title:"插入、更新和删除数据",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用 INSERT 语句插入数据",slug:"使用-insert-语句插入数据",children:[]},{level:2,title:"使用 UPDATE 语句更新表数据",slug:"使用-update-语句更新表数据",children:[]},{level:2,title:"使用 DELETE 语句删除表数据",slug:"使用-delete-语句删除表数据",children:[]}],filePathRelative:"mysql/04-CUD.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},24994:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(66252).uE)('<h1 id="插入、更新和删除数据" tabindex="-1"><a class="header-anchor" href="#插入、更新和删除数据" aria-hidden="true">#</a> 插入、更新和删除数据</h1><p>增删改操作属于 DML 和 DQL 两大类语句中的 DML 。</p><p>DML 语句用于操纵数据库表和视图的数据。</p><blockquote><ul><li><small>通过执行 <strong>INSERT</strong> 语句可以给表增加数据；</small></li><li><small>通过执行 <strong>UPDATE</strong> 语句可以更新表的数据；</small></li><li><small>通过执行 <strong>DELETE</strong> 语句可以删除表的数据。</small></li></ul></blockquote><h2 id="使用-insert-语句插入数据" tabindex="-1"><a class="header-anchor" href="#使用-insert-语句插入数据" aria-hidden="true">#</a> 使用 INSERT 语句插入数据</h2><p><code>INSERT</code> 语句语法的一般形式为：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> 表名<span class="token punctuation">(</span>字段名<span class="token number">1</span><span class="token punctuation">,</span> 字段名<span class="token number">2</span><span class="token punctuation">,</span> 字段名<span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>\n  <span class="token keyword">VALUE</span><span class="token punctuation">(</span>值<span class="token number">1</span><span class="token punctuation">,</span> 值<span class="token number">2</span><span class="token punctuation">,</span> 值<span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><strong>INSERT INTO</strong>: 关键字，用以指明要插入的表，以及表中的列。</li><li><strong>VALUE</strong>: 关键字，指明要插入对应列中的值。</li></ul><p>注意，字段名和值的顺序和数量应该是一一对应的。</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp<span class="token punctuation">(</span>empno<span class="token punctuation">,</span> ename<span class="token punctuation">,</span> job<span class="token punctuation">)</span>\n  <span class="token keyword">VALUE</span><span class="token punctuation">(</span><span class="token number">7100</span><span class="token punctuation">,</span> <span class="token string">&#39;Maliy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ANALYS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果写的是 <strong>全字段名，且顺序与字段定义顺序一致</strong>，那么所有的字段名可以省略不写。即，</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp<span class="token punctuation">(</span>empno<span class="token punctuation">,</span> ename<span class="token punctuation">,</span> job<span class="token punctuation">,</span> mgr<span class="token punctuation">,</span> hiredate<span class="token punctuation">,</span> sal<span class="token punctuation">,</span> comm<span class="token punctuation">,</span> deptno<span class="token punctuation">)</span>\n  <span class="token keyword">VALUE</span><span class="token punctuation">(</span><span class="token number">7700</span><span class="token punctuation">,</span> <span class="token string">&#39;JASH&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ANALYS&#39;</span><span class="token punctuation">,</span> <span class="token number">7902</span><span class="token punctuation">,</span> <span class="token string">&#39;1989-06-05&#39;</span><span class="token punctuation">,</span> <span class="token number">2640</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以简写为：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp \n  <span class="token keyword">VALUE</span><span class="token punctuation">(</span><span class="token number">7700</span><span class="token punctuation">,</span> <span class="token string">&#39;JASH&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ANALYS&#39;</span><span class="token punctuation">,</span> <span class="token number">7902</span><span class="token punctuation">,</span> <span class="token string">&#39;1989-06-05&#39;</span><span class="token punctuation">,</span> <span class="token number">2640</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="使用-update-语句更新表数据" tabindex="-1"><a class="header-anchor" href="#使用-update-语句更新表数据" aria-hidden="true">#</a> 使用 UPDATE 语句更新表数据</h2><p>SQL 使用 <strong>UPDATE</strong> 语句对数据表中符合更新条件的记录进行更新。其一般如法如下:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> 表名\n  <span class="token keyword">SET</span> 字段<span class="token number">1</span><span class="token operator">=</span>值<span class="token number">1</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token operator">=</span>值<span class="token number">2</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token operator">=</span>值<span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  <span class="token keyword">WHERE</span> 条件表达式<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>凡是符合 <strong>WHERE</strong> 子句判断标准的行都会被更新。</p><p>如果没有 <strong>WEHERE</strong> 子句，即没有指定更新条件，那么表中所有行信息都会被更新！</p><p>为雇员 JASH 加薪 10%</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> emp <span class="token keyword">SET</span> sal <span class="token operator">=</span> sal <span class="token operator">*</span> <span class="token number">1.1</span> <span class="token keyword">WHERE</span> ename<span class="token operator">=</span><span class="token string">&#39;JASH&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>为所有雇员加薪 10%</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> emp <span class="token keyword">SET</span> sal <span class="token operator">=</span> sal <span class="token operator">*</span> <span class="token number">1.1</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="使用-delete-语句删除表数据" tabindex="-1"><a class="header-anchor" href="#使用-delete-语句删除表数据" aria-hidden="true">#</a> 使用 DELETE 语句删除表数据</h2><p>SQL 语言使用 <strong>DELETE</strong> 语句删除表中的记录。语法格式如下：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">WHERE</span> 条件表达式<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>表中凡是符合 <strong>WHERE</strong> 子句判断标准的行都将被删除。</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> emp <span class="token keyword">WHERE</span> ename<span class="token operator">=</span><span class="token string">&#39;JASH&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>DELETE 语句可以没有 <strong>WHERE</strong> 子句，那么这将删空整张表（注意，清空表不等于删除表）。</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> emp<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',30),p={render:function(s,n){return e}}}}]);