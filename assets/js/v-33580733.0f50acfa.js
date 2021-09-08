"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[4939],{94701:(r,e,i)=>{i.r(e),i.d(e,{data:()=>n});const n={key:"v-33580733",path:"/spring/99-%E7%88%B6%E5%AD%90%E5%AE%B9%E5%99%A8.html",title:"Spring 父子容器的概念和 Spring MVC 两次加载时机",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Spring MVC 的 2 次加载和 Spring IoC 父子容器",slug:"spring-mvc-的-2-次加载和-spring-ioc-父子容器",children:[]}],filePathRelative:"spring/99-父子容器.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},3270:(r,e,i)=>{i.r(e),i.d(e,{default:()=>t});const n=(0,i(66252).uE)('<h1 id="spring-父子容器的概念和-spring-mvc-两次加载时机" tabindex="-1"><a class="header-anchor" href="#spring-父子容器的概念和-spring-mvc-两次加载时机" aria-hidden="true">#</a> Spring 父子容器的概念和 Spring MVC 两次加载时机</h1><h2 id="spring-mvc-的-2-次加载和-spring-ioc-父子容器" tabindex="-1"><a class="header-anchor" href="#spring-mvc-的-2-次加载和-spring-ioc-父子容器" aria-hidden="true">#</a> Spring MVC 的 2 次加载和 Spring IoC 父子容器</h2><p>在 Spring MVC 的配置中我们提到 Spring MVC 有 2 次加载配置文件的时机：</p><ul><li><p>第一次是通过 <strong>ContextLoaderListener</strong> 进行加载；</p></li><li><p>第二次是通过 <strong>DispatcherServlet</strong> 进行加载。</p></li></ul><p>在这里，你的项目中先后创建了 2 个 Spring IoC 容器：</p><ul><li><p>第一次加载时机所创建的 Spring IoC 容器习惯性被称作 Spring 容器，它是父容器；</p></li><li><p>第二次加载时机所创建的 Spring IoC 容器习惯性被称作 Spring Web 容器，它是子容器。</p></li></ul><p>父容器-子容器的关系类似于父类-子类的关系：子容器中的对象能引用（<small><strong>@Autowired</strong></small>）父容器中的 Java Bean，但是反之则不行。</p><blockquote><p>当然，同一容器内的 Java Bean 之间的 <strong>@Autowired</strong> 是毫无问题的。</p></blockquote><p>结合我们平时在项目中的 MVC 三层的依赖关系和顺序：DAO 层被 Service 所使用，Service 层 Web 层所使用，所以，我们常见的配置的惯例是：</p><ul><li><p>将 DAO 层和 Servic 层的 Java Bean 配置、创建在 <strong>ContextLoaderListener</strong> 所创建的父容器中；</p></li><li><p>将 Web 层和 Java Bean 配置、创建在 <strong>DispatcherServlet</strong> 所创建的子容器中；</p></li></ul><p>这样，能确保 Web 层的 <strong>@Controller</strong> 能正常地 <strong>@Autowired</strong> Service 层的 Java Bean 。</p>',11),t={render:function(r,e){return n}}}}]);