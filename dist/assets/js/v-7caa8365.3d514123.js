"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[1067],{44546:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-7caa8365",path:"/interview-questions/99-%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6-Queue.html",title:"Java 集合底层原理剖析",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"interview-questions/99-集合框架-Queue.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},47256:(n,s,e)=>{e.r(s),e.d(s,{default:()=>l});const a=(0,e(66252).uE)('<h1 id="java-集合底层原理剖析" tabindex="-1"><a class="header-anchor" href="#java-集合底层原理剖析" aria-hidden="true">#</a> Java 集合底层原理剖析</h1><hr><ul><li>Collection 层次关系（非线程安全）</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@startuml\n\ninterface Collection\ninterface List\ninterface Set\ninterface Queue\ninterface Deque\ninterface SortedSet\n\nclass ArrayList\nclass LinkedList\nclass HashSet\nclass LinkedHashSet\nclass TreeSet\nclass ArrayDeque\n\nCollection&lt;|-- List\nCollection&lt;|-- Set\nCollection&lt;|-- Queue\nQueue &lt;|-- Deque\n\n\nList &lt;|-- ArrayList\nList &lt;|-- LinkedList\n\nSet &lt;|- SortedSet\nSet &lt;|-- HashSet\nSet &lt;|-- TreeSet\nHashSet &lt;|-- LinkedHashSet\nSortedSet &lt;|-- TreeSet\n\nDeque &lt;|-- ArrayDeque\nDeque &lt;|-- LinkedList\n\n@enduml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@startuml\ninterface Collection\ninterface List\ninterface Set\n\nclass Vector\nclass Stack\nclass CopyOnWriteArrayList\n\nCollection &lt;|-- List\nCollection &lt;|-- Set\n\nList &lt;|-- Vector\nVector &lt;|-- Stack\n\nList &lt;|-- CopyOnWriteArrayList\nSet &lt;|-- CopyOnWriteArraySet\n\n@enduml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',5),l={render:function(n,s){return a}}}}]);