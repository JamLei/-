"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[6200],{19907:(e,t,c)=>{c.r(t),c.d(t,{data:()=>s});const s={key:"v-34d24ce0",path:"/shiro/99-SecurityUtils.getSubject.html",title:"SecurityUtils.getSubject()",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"shiro/99-SecurityUtils.getSubject.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},73843:(e,t,c)=>{c.r(t),c.d(t,{default:()=>i});const s=(0,c(66252).uE)('<h1 id="securityutils-getsubject" tabindex="-1"><a class="header-anchor" href="#securityutils-getsubject" aria-hidden="true">#</a> SecurityUtils.getSubject()</h1><p>总的来说，SecurityUtils.getSubject() 是每个请求创建一个 Subject, 并保存到 ThreadContext 的 resources(ThreadLocal&lt;Map&lt;Object, Object&gt;&gt;)变量中，也就是一个 http 请求一个 subject ，并绑定到当前线程。</p><p>问题来了：<code>subject.login()</code> 登陆认证成功后，下一次请求如何知道是那个用户的请求呢？</p><p>如果是 web 工程，直接从 web 容器获取 httpSession，然后再从 httpSession 获取 Principals ，本质就是从 cookie 获取用户信息，然后每次都设置 Principal，这样就知道是哪个用户的请求，并只得到这个用户有没有人认证成功，--本质：依赖于浏览器的 cookie 来维护 session 的</p><p>简单来说，逻辑上相当于 <code>subject1 == subject2</code> 是 false，但是 <code>subject1.equals(subject2)</code> 是 true 。</p>',5),i={render:function(e,t){return s}}}}]);