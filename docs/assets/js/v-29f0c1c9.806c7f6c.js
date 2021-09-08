"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[607],{47634:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-29f0c1c9",path:"/utility/guava/11-%E5%8F%8D%E5%B0%84.html",title:"Guava 中的反射工具",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"TypeToken",slug:"typetoken",children:[]}],filePathRelative:"utility/guava/11-反射.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},86068:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const e=(0,a(66252).uE)('<h1 id="guava-中的反射工具" tabindex="-1"><a class="header-anchor" href="#guava-中的反射工具" aria-hidden="true">#</a> Guava 中的反射工具</h1><h2 id="typetoken" tabindex="-1"><a class="header-anchor" href="#typetoken" aria-hidden="true">#</a> TypeToken</h2><p>由于类型擦除，当你在实例化泛型对象时，泛型的信息会受影响。例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上述代码中的 <em>stringList</em> 的泛型类型 <em>String</em> 会被擦除，<em>stringList</em> 的实际类型会变为 <em>ArrayList</em>，而非 <em>ArrayList&lt;String&gt;</em> 。</p><p>但是好消息是，类型擦除只影响被实例化的类型参数，如果你使用在类定义中，泛型信息会被保留，在运行时可用。例如：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">StringList</span> <span class="token keyword">extends</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">StringList</span> stringList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>当你去使用 <em>StringList</em> 时，这里的 <em>String</em> 信息你是可以通过反射机制获取到的。</p><p>Guava 就是通过这一点，提出了 TypeToken，用以在必要的场合规避泛型擦除问题。</p><blockquote><p>Spring 框架自带的工具箱中有一个 <em><strong>ResolvableType</strong></em> 类，它也是基于同样的概念和方案，用以规避泛型擦除问题。</p><p>个人觉得，Spring 框架的 <em><strong>ResolvableType</strong></em> 要比 Guava 的 <em><strong>TypeToken</strong></em> 功能更丰富一些，使用更简便一些，建议优先考虑使用 Spring 的 <em><strong>ResolvableType</strong></em> 。</p><p>这里就不展开讲解 Guava 的 <em><strong>TypeToken</strong></em> 了。</p></blockquote>',10),t={render:function(s,n){return e}}}}]);