"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[7980],{21604:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-974fe90e",path:"/mysql/00-%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B4%A0%E6%9D%901.html",title:"素材 1",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"mysql/00-数据库素材1.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},21960:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(66252).uE)('<h1 id="素材-1" tabindex="-1"><a class="header-anchor" href="#素材-1" aria-hidden="true">#</a> 素材 1</h1><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> scott<span class="token punctuation">;</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> scott\n    <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4   <span class="token comment">-- 乱码问题</span>\n    <span class="token keyword">DEFAULT</span> <span class="token keyword">COLLATE</span> utf8mb4_bin     <span class="token comment">-- 英文大小写不敏感问题</span>\n<span class="token punctuation">;</span>\n<span class="token keyword">USE</span> scott<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">set</span> foreign_key_checks <span class="token operator">=</span> <span class="token keyword">off</span><span class="token punctuation">;</span>\n\n<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> department<span class="token punctuation">;</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> department\n<span class="token punctuation">(</span>\n  <span class="token punctuation">`</span>id<span class="token punctuation">`</span>        <span class="token keyword">BIGINT</span>  <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;部门ID&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>name<span class="token punctuation">`</span>      <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>         <span class="token keyword">COMMENT</span> <span class="token string">&#39;部门名称&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>location<span class="token punctuation">`</span>  <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>         <span class="token keyword">COMMENT</span> <span class="token string">&#39;部门所在地&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>\n  <span class="token keyword">COMMENT</span> <span class="token string">&#39;部门信息表&#39;</span><span class="token punctuation">;</span> \n\n<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> employee<span class="token punctuation">;</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> employee\n<span class="token punctuation">(</span>\n  <span class="token punctuation">`</span>id<span class="token punctuation">`</span>            <span class="token keyword">BIGINT</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;员工ID&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>name<span class="token punctuation">`</span>          <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>        <span class="token keyword">COMMENT</span> <span class="token string">&#39;员工姓名&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>job<span class="token punctuation">`</span>           <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>        <span class="token keyword">COMMENT</span> <span class="token string">&#39;员工岗位名称&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>manager_id<span class="token punctuation">`</span>    <span class="token keyword">BIGINT</span>                <span class="token keyword">COMMENT</span> <span class="token string">&#39;员工上级领导编号&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>hire_date<span class="token punctuation">`</span>     <span class="token keyword">DATE</span>               <span class="token keyword">COMMENT</span> <span class="token string">&#39;入职日期&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>salary<span class="token punctuation">`</span>        <span class="token keyword">INT</span>                <span class="token keyword">COMMENT</span> <span class="token string">&#39;工资&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>commission<span class="token punctuation">`</span>    <span class="token keyword">INT</span>                <span class="token keyword">COMMENT</span> <span class="token string">&#39;佣金/奖金&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">`</span>department_id<span class="token punctuation">`</span> <span class="token keyword">BIGINT</span>                <span class="token keyword">COMMENT</span> <span class="token string">&#39;所属部门编号&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>\n  <span class="token keyword">COMMENT</span> <span class="token string">&#39;雇员信息表&#39;</span><span class="token punctuation">;</span> \n\n<span class="token comment"># ALTER TABLE employee DROP FOREIGN KEY fk_employee_department_id</span>\n<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> employee \n    <span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> fk_employee_department_id \n    <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> employee<span class="token punctuation">(</span>department_id<span class="token punctuation">)</span> \n    <span class="token keyword">REFERENCES</span> department<span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> department <span class="token keyword">VALUES</span> \n    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;ACCOUNTING&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NEW YORK&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;RESEARCH&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DALLAS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;SALES&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CHICAGO&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;OPERATIONS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;BOSTON&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> employee <span class="token keyword">VALUES</span> \n    <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;SMITH&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token string">&#39;1980-12-17&#39;</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ALLEN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SALESMAN&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-02-20&#39;</span><span class="token punctuation">,</span> <span class="token number">1600</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;WARD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SALESMAN&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-02-22&#39;</span><span class="token punctuation">,</span> <span class="token number">1250</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;JONES&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MANAGER&#39;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-04-02&#39;</span><span class="token punctuation">,</span> <span class="token number">2975</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;MARTIN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SALESMAN&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-09-28&#39;</span><span class="token punctuation">,</span> <span class="token number">1250</span><span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;BLAKE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MANAGER&#39;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-05-01&#39;</span><span class="token punctuation">,</span> <span class="token number">2850</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;CLARK&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MANAGER&#39;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-06-09&#39;</span><span class="token punctuation">,</span> <span class="token number">2450</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;SCOTT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ANALYST&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;1987-07-13&#39;</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&#39;KING&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PRESIDENT&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-11-17&#39;</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;TURNER&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;SALESMAN&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-09-08&#39;</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">&#39;ADAMS&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;1987-07-13&#39;</span><span class="token punctuation">,</span> <span class="token number">1100</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&#39;JAMES&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-12-03&#39;</span><span class="token punctuation">,</span> <span class="token number">950</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token string">&#39;FORD&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ANALYST&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;1981-12-03&#39;</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span> <span class="token string">&#39;MILLER&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;1982-01-23&#39;</span><span class="token punctuation">,</span> <span class="token number">1300</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">set</span> foreign_key_checks <span class="token operator">=</span> <span class="token keyword">on</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p><img src="https://hemiao3000.gitee.io/java-note-img/images/mysql/img/mysql-1-1.png" alt="mysql-1-1"></p>',4),t={render:function(n,s){return p}}}}]);