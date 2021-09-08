"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[5037],{81917:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-2cfef959",path:"/utility/spring-utils/05-ReflectionUtils.html",title:"Spring 反射工具类：ReflectionUtils",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Field 相关操作",slug:"field-相关操作",children:[{level:3,title:"查找/获取 Field",slug:"查找-获取-field",children:[]},{level:3,title:"读写属性值",slug:"读写属性值",children:[]},{level:3,title:"遍历 Field",slug:"遍历-field",children:[]},{level:3,title:"其他",slug:"其他",children:[]}]},{level:2,title:"Method 相关方法",slug:"method-相关方法",children:[{level:3,title:"查找/获得 Method",slug:"查找-获得-method",children:[]},{level:3,title:"判断 Method",slug:"判断-method",children:[]},{level:3,title:"执行 Field",slug:"执行-field",children:[]},{level:3,title:"遍历执行 Method",slug:"遍历执行-method",children:[]}]},{level:2,title:"Constructor 相关方法",slug:"constructor-相关方法",children:[{level:3,title:"查找/获得 Constructor",slug:"查找-获得-constructor",children:[]},{level:3,title:"设置 Constructor 访问权限",slug:"设置-constructor-访问权限",children:[]}]}],filePathRelative:"utility/spring-utils/05-ReflectionUtils.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},7678:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const e=(0,a(66252).uE)('<h1 id="spring-反射工具类-reflectionutils" tabindex="-1"><a class="header-anchor" href="#spring-反射工具类-reflectionutils" aria-hidden="true">#</a> Spring 反射工具类：ReflectionUtils</h1><p><em><strong>ReflectionUtils</strong></em> 类位于 <em><strong>org.springframework.util</strong></em> 包。它封装了常用的反射相关的操作。</p><blockquote><p><small><code>注意</code>，实验反射效果时，不要使用内部类，或同文件多类的形式，必须使用标准形式。即类前必须有 <code>public</code> 修饰。</small></p><p><small>以下方法均为 <code>static</code> 方法，因此省略显示 <code>static</code> 关键字</small></p></blockquote><h2 id="field-相关操作" tabindex="-1"><a class="header-anchor" href="#field-相关操作" aria-hidden="true">#</a> Field 相关操作</h2><h3 id="查找-获取-field" tabindex="-1"><a class="header-anchor" href="#查找-获取-field" aria-hidden="true">#</a> 查找/获取 Field</h3><p>在类定义中查找属性，返回代表这个属性的 <em><strong><code>Field</code></strong></em> 对象。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 在类中查找指定属性 */</span>\n<span class="token class-name">Field</span> <span class="token function">findField</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> \n\n<span class="token comment">/* 功能同上。多提供了属性的类型 */</span>\n<span class="token class-name">Field</span> <span class="token function">findField</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="读写属性值" tabindex="-1"><a class="header-anchor" href="#读写属性值" aria-hidden="true">#</a> 读写属性值</h3><p>通过所上述方法<small>（或其它方法）</small>获得代表属性的 <em><strong><code>File</code></strong></em> 对象后，可以去读写某个对象的这个属性。<small>（当然，前提是该对象有这么个属性）。</small></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 获取 target 对象的 field 属性值 */</span>\n<span class="token class-name">Object</span> <span class="token function">getField</span><span class="token punctuation">(</span><span class="token class-name">Field</span> field<span class="token punctuation">,</span> <span class="token class-name">Object</span> target<span class="token punctuation">)</span> \n\n<span class="token comment">/* 设置 target 对象的 field 属性值，值为 value */</span>\n<span class="token keyword">void</span> <span class="token function">setField</span><span class="token punctuation">(</span><span class="token class-name">Field</span> field<span class="token punctuation">,</span> <span class="token class-name">Object</span> target<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> \n\n<span class="token comment">/* 同类对象属性对等赋值。*/</span>\n<span class="token keyword">void</span> <span class="token function">shallowCopyFieldState</span><span class="token punctuation">(</span><span class="token class-name">Object</span> src<span class="token punctuation">,</span> <span class="token class-name">Object</span> dest<span class="token punctuation">)</span>\n\n<span class="token comment">/* 取消 Java 的权限控制检查。以便后续读写该私有属性 */</span>\n<span class="token keyword">void</span> <span class="token function">makeAccessible</span><span class="token punctuation">(</span><span class="token class-name">Field</span> field<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="遍历-field" tabindex="-1"><a class="header-anchor" href="#遍历-field" aria-hidden="true">#</a> 遍历 Field</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 对类的每个属性执行 callback */</span>\n<span class="token keyword">void</span> <span class="token function">doWithFields</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">ReflectionUtils<span class="token punctuation">.</span>FieldCallback</span> fc<span class="token punctuation">)</span> \n\n<span class="token comment">/* 同上，多了个属性过滤功能。 */</span>\n<span class="token keyword">void</span> <span class="token function">doWithFields</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">ReflectionUtils<span class="token punctuation">.</span>FieldCallback</span> fc<span class="token punctuation">,</span> <span class="token class-name">ReflectionUtils<span class="token punctuation">.</span>FieldFilter</span> ff<span class="token punctuation">)</span> \n\n<span class="token comment">/* 同 doWithFields，但不包括继承而来的属性。*/</span>\n<span class="token keyword">void</span> <span class="token function">doWithLocalFields</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">ReflectionUtils<span class="token punctuation">.</span>FieldCallback</span> fc<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 是否为一个 &quot;public static final&quot; 属性。*/</span>\n<span class="token keyword">boolean</span> <span class="token function">isPublicStaticFinal</span><span class="token punctuation">(</span><span class="token class-name">Field</span> field<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="method-相关方法" tabindex="-1"><a class="header-anchor" href="#method-相关方法" aria-hidden="true">#</a> Method 相关方法</h2><h3 id="查找-获得-method" tabindex="-1"><a class="header-anchor" href="#查找-获得-method" aria-hidden="true">#</a> 查找/获得 Method</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 在类中查找指定方法。*/</span>\n<span class="token class-name">Method</span> <span class="token function">findMethod</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> \n\n<span class="token comment">// 同上，额外提供方法参数类型作查找条件。</span>\n<span class="token class-name">Method</span> <span class="token function">findMethod</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> paramTypes<span class="token punctuation">)</span> \n\n<span class="token comment">// 获得类中所有方法，包括继承而来的。</span>\n<span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getAllDeclaredMethods</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> leafClass<span class="token punctuation">)</span> \n\n<span class="token comment">// 在类中查找指定构造方法</span>\n<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">accessibleConstructor</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> parameterTypes<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="判断-method" tabindex="-1"><a class="header-anchor" href="#判断-method" aria-hidden="true">#</a> 判断 Method</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 是否是 equals() 方法 */</span>\n<span class="token keyword">boolean</span> <span class="token function">isEqualsMethod</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">)</span> \n\n<span class="token comment">/* 是否是 hashCode() 方法 */</span>\n<span class="token keyword">boolean</span> <span class="token function">isHashCodeMethod</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">)</span> \n\n<span class="token comment">/* 是否是 toString() 方法 */</span>\n<span class="token keyword">boolean</span> <span class="token function">isToStringMethod</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">)</span> \n\n<span class="token comment">/* 是否是从 Object 类继承而来的方法 */</span>\n<span class="token keyword">boolean</span> <span class="token function">isObjectMethod</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">)</span> \n\n<span class="token comment">/* 检查一个方法是否声明抛出指定异常。*/</span>\n<span class="token keyword">boolean</span> <span class="token function">declaresException</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> exceptionType<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="执行-field" tabindex="-1"><a class="header-anchor" href="#执行-field" aria-hidden="true">#</a> 执行 Field</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 执行方法 */</span>\n<span class="token class-name">Object</span> <span class="token function">invokeMethod</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span> target<span class="token punctuation">)</span>  \n\n<span class="token comment">/* 同上 */</span>\n<span class="token class-name">Object</span> <span class="token function">invokeMethod</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span> target<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> \n\n<span class="token comment">/* 取消 Java 权限检查。以便后续执行该私有方法 */</span>\n<span class="token keyword">void</span> <span class="token function">makeAccessible</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">)</span> \n\n<span class="token comment">/* 取消 Java 权限检查。以便后续执行私有构造方法 */</span>\n<span class="token keyword">void</span> <span class="token function">makeAccessible</span><span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> ctor<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="遍历执行-method" tabindex="-1"><a class="header-anchor" href="#遍历执行-method" aria-hidden="true">#</a> 遍历执行 Method</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 遍历执行类中的每个方法。包括从父类继承而来的方法。 */</span>\n<span class="token keyword">void</span> <span class="token function">doWithMethods</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">ReflectionUtils<span class="token punctuation">.</span>MethodCallback</span> mc<span class="token punctuation">)</span> \n\n<span class="token comment">/* 同上。增加了匹配/过滤功能。*/</span>\n<span class="token keyword">void</span> <span class="token function">doWithMethods</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">ReflectionUtils<span class="token punctuation">.</span>MethodCallback</span> mc<span class="token punctuation">,</span> <span class="token class-name">ReflectionUtils<span class="token punctuation">.</span>MethodFilter</span> mf<span class="token punctuation">)</span> \n\n<span class="token comment">/* 同上。不包括从父类继承而来的方法。*/</span>\n<span class="token keyword">void</span> <span class="token function">doWithLocalMethods</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">ReflectionUtils<span class="token punctuation">.</span>MethodCallback</span> mc<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="constructor-相关方法" tabindex="-1"><a class="header-anchor" href="#constructor-相关方法" aria-hidden="true">#</a> Constructor 相关方法</h2><h3 id="查找-获得-constructor" tabindex="-1"><a class="header-anchor" href="#查找-获得-constructor" aria-hidden="true">#</a> 查找/获得 Constructor</h3><p>在指定的类信息中查找该类是否有，对应参数的构造函数：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">accessibleConstructor</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> parameterTypes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="设置-constructor-访问权限" tabindex="-1"><a class="header-anchor" href="#设置-constructor-访问权限" aria-hidden="true">#</a> 设置 Constructor 访问权限</h3><p>对于不具备操作权限的构造器，在执行它之前，需要将其设置为可操作。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">makeAccessible</span><span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> ctor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',30),t={render:function(s,n){return e}}}}]);