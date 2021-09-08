"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[5283],{50438:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4c46e886",path:"/utility/guava/05-%E6%96%B0%E9%9B%86%E5%90%88.html",title:"Guava 对 Java 集合框架的补充",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Multiset",slug:"multiset",children:[]},{level:2,title:"Multimap",slug:"multimap",children:[]},{level:2,title:"BiMap",slug:"bimap",children:[]},{level:2,title:"Table",slug:"table",children:[]}],filePathRelative:"utility/guava/05-新集合.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},56686:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(66252).uE)('<h1 id="guava-对-java-集合框架的补充" tabindex="-1"><a class="header-anchor" href="#guava-对-java-集合框架的补充" aria-hidden="true">#</a> Guava 对 Java 集合框架的补充</h1><p>Guava 的不仅仅提供了集合工具类，还提供了几种新的集合类型：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  新集合 <span class="token operator">|</span> 说明 \n<span class="token class-name">Multiset</span> <span class="token operator">|</span> 一个扩展来设置界面，允许重复的元素。\n<span class="token class-name">Multimap</span> <span class="token operator">|</span> 一个扩展来映射接口，以便其键可一次被映射到多个值。\n   <span class="token class-name">BiMap</span> <span class="token operator">|</span> 一个扩展来映射接口，支持反向操作。\n   <span class="token class-name">Table</span> <span class="token operator">|</span> 表代表一个特殊的图，其中两个键可以在组合的方式被指定为单个值。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="multiset" tabindex="-1"><a class="header-anchor" href="#multiset" aria-hidden="true">#</a> Multiset</h2><p><strong>Multiset</strong> 接口是对 Set 接口的功能扩展，其中它允许在其中存放多个重复的对象。</p><p>首先需要明确的是，<strong>MultiSet</strong> 接口虽然在功能/逻辑上是扩展了 Set 接口，但是『<strong>它继承的是 Collection 接口，而不是 Set 接口</strong>』。</p><p>Multiset 的常用实现类有：<strong>HashMultiset</strong> 和 <strong>TreeMultiset</strong> 。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 添加一个出现的指定元素这个 multiset 。</span>\n<span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> element<span class="token punctuation">)</span> \n\n<span class="token comment">// 增加大量的元素到这个 multiset 。</span>\n<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> element<span class="token punctuation">,</span> <span class="token keyword">int</span> occurrences<span class="token punctuation">)</span>\n\n<span class="token comment">// 确定此 multiset 是否包含指定的元素 。</span>\n<span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">Object</span> element<span class="token punctuation">)</span>\n\n<span class="token comment">// 返回 true，如果这个 multiset 至少包含一个出现的指定集合中的所有元素。</span>\n<span class="token keyword">boolean</span> <span class="token function">containsAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span>\\<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> elements<span class="token punctuation">)</span>\n\n<span class="token comment">// 返回出现的元素的在该 multiset 的数目（元素的数量）。</span>\n<span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token class-name">Object</span> element<span class="token punctuation">)</span>\n\n<span class="token comment">// 返回集包含在此 multiset 不同的元素。</span>\n<span class="token class-name">Set</span>\\<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">elementSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 返回此 multiset 的内容的视图，分组在 Multiset.Entry 实例中，每一个都提供了 multiset 的一个元素和元素的计数。</span>\n<span class="token class-name">Set</span>\\<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Multiset<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  \n\n<span class="token comment">// 比较指定对象与此 multiset 是否相等。</span>\n<span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> \n\n<span class="token comment">// 返回此 multiset 的哈希码。</span>\n<span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       \n\n<span class="token comment">// 返回一个迭代在这个集合中的元素。</span>\n<span class="token class-name">Iterator</span>\\<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// 移除此 multiset 的单个出现的指定元素，如果存在。</span>\n<span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> element<span class="token punctuation">)</span>    \n\n<span class="token comment">// 删除了一些出现，从该 multiset 的指定元素。</span>\n<span class="token keyword">int</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> element<span class="token punctuation">,</span> <span class="token keyword">int</span> occurrences<span class="token punctuation">)</span> \n\n<span class="token comment">// 删除所有这一切都包含在指定集合&lt;small&gt;（可选操作）&lt;/small&gt;在此集合的元素。</span>\n<span class="token keyword">boolean</span> <span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> \n\n<span class="token comment">// 保持那些包含在指定 collection&lt;small&gt;（可选操作）&lt;/small&gt;在此集合中的元素。</span>\n<span class="token keyword">boolean</span> <span class="token function">retainAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> \n\n<span class="token comment">//  添加或删除，使得该元素达到所期望的计数的元件的必要出现。</span>\n<span class="token keyword">int</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token class-name">E</span> element<span class="token punctuation">,</span> <span class="token keyword">int</span> count<span class="token punctuation">)</span>\n\n<span class="token comment">// 有条件设置元素的计数为一个新值，如在 setCount(对象，INT) 中所述，条件是该元素预期的当前计数。</span>\n<span class="token keyword">boolean</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token class-name">E</span> element<span class="token punctuation">,</span> <span class="token keyword">int</span> oldCount<span class="token punctuation">,</span> <span class="token keyword">int</span> newCount<span class="token punctuation">)</span> \n\n<span class="token comment">// 返回该对象的字符串表示。</span>\n<span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="multimap" tabindex="-1"><a class="header-anchor" href="#multimap" aria-hidden="true">#</a> Multimap</h2><p>Multimap 是多重映射接口扩展映射，使得其键一次可被映射到多个值。</p><p>需要首先明确的一点是，Multimap 虽然叫 Map 但是它没有继承任何集合框架中的接口。</p><p>Multimap 接口的实现类有：</p><table><thead><tr><th style="text-align:left;">#</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>ArrayListMultimap</strong></td><td style="text-align:left;">key 的行为类似 HashMap，value 的行为类似 ArrayList 。</td></tr><tr><td style="text-align:left;"><strong>HashMultimap</strong></td><td style="text-align:left;">key 的行为类似 HashMap，value 的行为类似 HashSet 。</td></tr><tr><td style="text-align:left;"><strong>TreeMultimap</strong></td><td style="text-align:left;">key 的行为类似 TreeMap，value 的行为类似 TreeSet。</td></tr></tbody></table><p>常用方法：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 返回此multimap中的视图，从每个不同的键在键的关联值的非空集合映射。</span>\n<span class="token class-name">Map</span>\\<span class="token operator">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">Collection</span>\\<span class="token operator">&lt;</span><span class="token class-name">V</span>\\<span class="token operator">&gt;</span>\\<span class="token operator">&gt;</span> <span class="token function">asMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// 将删除所有multimap中的键值对，留下空。</span>\n<span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// 返回 true 如果此多重映射包含至少一个键值对，键键和值 value。</span>\n<span class="token keyword">boolean</span> <span class="token function">containsEntry</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> \n\n<span class="token comment">// 返回 true，如果这个 multimap 中至少包含一个键值对的键 key。</span>\n<span class="token keyword">boolean</span> <span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> \n\n<span class="token comment">// 返回true，如果这个multimap至少包含一个键值对的值值。</span>\n<span class="token keyword">boolean</span> <span class="token function">containsValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> \n\n<span class="token comment">// 返回包含在此multimap中，为Map.Entry的情况下，所有的键 - 值对的视图集合。</span>\n<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// 比较指定对象与此多重映射是否相等。</span>\n<span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> \n\n<span class="token comment">// 返回，如果有的话，在这个multimap中键关联的值的视图集合。</span>\n<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">)</span> \n\n<span class="token comment">// 返回此多重映射的哈希码。</span>\n<span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// 返回 true，如果这个multimap中未包含键 - 值对。</span>\n<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// 返回一个视图集合包含从每个键值对这个multimap中的关键，没有折叠重复。</span>\n<span class="token class-name">Multiset</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> <span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// Returns a view collection of all distinct keys contained in this multimap.</span>\n<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> <span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// 存储键-值对在这个 multimap 中。</span>\n<span class="token keyword">boolean</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> \n\n<span class="token comment">// 存储一个键 - 值对在此multimap中的每个值，都使用相同的键 key。 </span>\n<span class="token keyword">boolean</span> <span class="token function">putAll</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> values<span class="token punctuation">)</span> \n\n<span class="token comment">// 存储了所有键 - 值对多重映射在这个multimap中，通过返回 multimap.entries() 的顺序. </span>\n<span class="token keyword">boolean</span> <span class="token function">putAll</span><span class="token punctuation">(</span><span class="token class-name">Multimap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">K</span><span class="token punctuation">,</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> multimap<span class="token punctuation">)</span> \n\n<span class="token comment">// 删除一个键 - 值对用键键，并从该多重映射的值的值，如果这样的存在。</span>\n<span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> \n\n<span class="token comment">// 删除与键键关联的所有值。</span>\n<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> \n\n<span class="token comment">// 存储与相同的键值，替换任何现有值的键的集合。</span>\n<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token function">replaceValues</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> values<span class="token punctuation">)</span> \n\n<span class="token comment">// 返回此多重映射键 - 值对的数量。</span>\n<span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n\n<span class="token comment">// 返回一个视图集合包含从包含在该 multimap 中的每个键值对的值，而不发生重复 (values().size() == size()) </span>\n<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="bimap" tabindex="-1"><a class="header-anchor" href="#bimap" aria-hidden="true">#</a> BiMap</h2><p>BiMap 是一种特殊的映射其保持映射，同时确保没有重复的值是存在于该映射和一个值可以安全地用于获取键背面的倒数映射。</p><ul><li><p>可以用 <em>inverse()</em> 反转 <strong>BiMap&lt;K, V&gt;</strong> 的键值映射</p></li><li><p>保证值是唯一的，因此 <em>values()</em> 返回 Set 而不是普通的 Collection</p></li></ul><p>BiMap 继承自 Map 接口。常用的实现类有：</p><ul><li>HashBiMap</li></ul><table><thead><tr><th style="text-align:right;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:right;">V forcePut(K key, V value)</td><td style="text-align:left;">另一种 put的 形式是默认删除，在 put(K, V) 运行前的任何现有条目值。</td></tr><tr><td style="text-align:right;">BiMap&lt;V, K&gt; inverse()</td><td style="text-align:left;">返回此 bimap， 每一个 bimap 的值映射到其相关联的键的逆视图。</td></tr><tr><td style="text-align:right;">V put(K key, V value)</td><td style="text-align:left;">关联指定值与此映射中（可选操作）指定的键。</td></tr><tr><td style="text-align:right;">void putAll(Map&lt;? extends K,? extends V&gt; map)</td><td style="text-align:left;">将所有从指定映射此映射（可选操作）的映射。</td></tr><tr><td style="text-align:right;">Set&lt;V&gt; values()</td><td style="text-align:left;">返回此映射中包含 Collection 的值视图。</td></tr></tbody></table><h2 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h2><p>Table 代表一个特殊的映射，必须提供两个键才找到一个对应的值。它类似于创建映射的映射。</p><p>Table 接口没有继承任何接口，常用的实现类有：</p><ul><li>ArrayTable</li><li>HashBasedTable</li><li>TreeBasedTable</li></ul><table><thead><tr><th style="text-align:right;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:right;">Set&lt;Table.Cell&lt;R,C,V&gt;&gt; cellSet()</td><td style="text-align:left;">返回集合中的所有行键/列键/值三元组。</td></tr><tr><td style="text-align:right;">void clear()</td><td style="text-align:left;">从表中删除所有映射。</td></tr><tr><td style="text-align:right;">Map&lt;R,V&gt; column(C columnKey)</td><td style="text-align:left;">返回在给定列键的所有映射的视图。</td></tr><tr><td style="text-align:right;">Set&lt;C&gt; columnKeySet()</td><td style="text-align:left;">返回一组具有表中的一个或多个值的列键。</td></tr><tr><td style="text-align:right;">Map&lt;C,Map&lt;R,V&gt;&gt; columnMap()</td><td style="text-align:left;">返回关联的每一列键与行键对应的映射值的视图。</td></tr><tr><td style="text-align:right;">boolean contains(Object rowKey, Object columnKey)</td><td style="text-align:left;">返回 true，如果表中包含与指定的行和列键的映射。</td></tr><tr><td style="text-align:right;">boolean containsColumn(Object columnKey)</td><td style="text-align:left;">返回 true，如果表中包含与指定列的映射。</td></tr><tr><td style="text-align:right;">boolean containsRow(Object rowKey)</td><td style="text-align:left;">返回 true，如果表中包含与指定的行键的映射关系。</td></tr><tr><td style="text-align:right;">boolean containsValue(Object value)</td><td style="text-align:left;">返回 true，如果表中包含具有指定值的映射。</td></tr><tr><td style="text-align:right;">boolean equals(Object obj)</td><td style="text-align:left;">比较指定对象与此表是否相等。</td></tr><tr><td style="text-align:right;">V get(Object rowKey, Object columnKey)</td><td style="text-align:left;">返回对应于给定的行和列键，如果没有这样的映射存在值，返回 null。<br> 返回此表中的哈希码。</td></tr><tr><td style="text-align:right;">boolean isEmpty()</td><td style="text-align:left;">返回true，如果表中没有映射。</td></tr><tr><td style="text-align:right;">V put(R rowKey, C columnKey, V value)</td><td style="text-align:left;">关联指定值与指定键。</td></tr><tr><td style="text-align:right;">void putAll(Table&lt;? extends R,? extends C,? extends V&gt; table)</td><td style="text-align:left;">复制从指定的表中的所有映射到这个表。</td></tr><tr><td style="text-align:right;">V remove(Object rowKey, Object columnKey)</td><td style="text-align:left;">如果有的话，使用给定键相关联删除的映射。</td></tr><tr><td style="text-align:right;">Map&lt;C,V&gt; row(R rowKey)</td><td style="text-align:left;">返回包含给定行键的所有映射的视图。</td></tr><tr><td style="text-align:right;">Set&lt;R&gt; rowKeySet()</td><td style="text-align:left;">返回一组行键具有在表中的一个或多个值。</td></tr><tr><td style="text-align:right;">Map&lt;R, Map&lt;C,V&gt;&gt; rowMap()</td><td style="text-align:left;">返回关联的每一行按键与键列对应的映射值的视图。</td></tr><tr><td style="text-align:right;">int size()</td><td style="text-align:left;">返回行键/列键/表中的值映射关系的数量。</td></tr><tr><td style="text-align:right;">Collection&lt;V&gt; values()</td><td style="text-align:left;">返回所有值，其中可能包含重复的集合。</td></tr></tbody></table>',26),e={render:function(n,s){return t}}}}]);