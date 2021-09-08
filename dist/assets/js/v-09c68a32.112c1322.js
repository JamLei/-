"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[8780],{49553:(l,i,e)=>{e.r(i),e.d(i,{data:()=>p});const p={key:"v-09c68a32",path:"/junit/JUnit-07-TDD.html",title:"测试驱动开发（TDD）",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"为什么要 TDD",slug:"为什么要-tdd",children:[]},{level:2,title:"如何 TDD",slug:"如何-tdd",children:[]},{level:2,title:"TDD 的三条规则",slug:"tdd-的三条规则",children:[]}],filePathRelative:"junit/JUnit-07-TDD.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},25258:(l,i,e)=>{e.r(i),e.d(i,{default:()=>t});const p=(0,e(66252).uE)('<h1 id="测试驱动开发-tdd" tabindex="-1"><a class="header-anchor" href="#测试驱动开发-tdd" aria-hidden="true">#</a> 测试驱动开发（TDD）</h1><p><strong>TDD</strong> 有广义和狭义之分，常说的是狭义的 TDD ，也就是 UTDD<small>（Unit Test Driven Development）</small>。</p><blockquote><p>广义的 TDD 是 ATDD<small>（Acceptance Test Driven Development）</small>，包括 BDD<small>（Behavior Driven Test Development）</small>和 Consumer-Driven Contracts Development 等。</p></blockquote><p><strong>TDD</strong> 的原理是在开发功能代码之前，先编写单元测试用例代码，测试代码确定需要编写什么产品代码。</p><h2 id="为什么要-tdd" tabindex="-1"><a class="header-anchor" href="#为什么要-tdd" aria-hidden="true">#</a> 为什么要 TDD</h2><ul><li><p>传统编码方式</p><ol><li><p>需求分析，想不清楚细节，管他呢，先开始写</p></li><li><p>发现需求细节不明确，去跟业务人员确认</p></li><li><p>确认好几次终于写完所有逻辑</p></li><li><p>运行起来测试一下，靠，果然不工作，调试</p></li><li><p>调试好久终于工作了</p></li><li><p>转测试，QA 测出 bug，debug，打补丁</p></li><li><p>终于，代码可以工作了</p></li><li><p>一看代码烂的像坨屎，不敢动，动了还得手工测试，还得让 QA 测试，还得加班 ...</p></li></ol></li><li><p>TDD 编码方式</p><ol><li><p>先分解任务，分离关注点</p></li><li><p>列 Example，用实例化需求，澄清需求细节</p></li><li><p>写测试，只关注需求，程序的输入输出，不关心中间过程</p></li><li><p>写实现，不考虑别的需求，用最简单的方式满足当前这个小需求即可</p></li><li><p>重构，用手法消除代码里的坏味道</p></li><li><p>写完，手动测试一下，基本没什么问题，有问题补个用例，修复</p></li><li><p>转测试，小问题，补用例，修复</p></li><li><p>代码整洁且用例齐全，信心满满地提交</p></li></ol></li></ul><blockquote><p>有很多人说 TDD 时，我的代码量增加了，所以开发效率降低了。但是，如果没有单元测试，你就要手工测试，你要花很多时间去准备数据，启动应用，跳转界面，观察显示效果等，反馈是很慢的。准确说，『<strong>快速反馈</strong>』是单元测试的好处。</p><p>简单来说，你的代码量有增加，但是工作量和工作时间有减少。付出减去回报，最后你还是有的赚。</p></blockquote><h2 id="如何-tdd" tabindex="-1"><a class="header-anchor" href="#如何-tdd" aria-hidden="true">#</a> 如何 TDD</h2><p><img src="https://hemiao3000.gitee.io/java-note-img/images/junit/img/tdd-1.png" alt="tdd-1"></p><p>TDD 的基本流程是：红，绿，重构。</p><p>更详细的流程是：</p><ol><li><p>写一个测试用例</p></li><li><p>运行测试</p></li><li><p>写刚好能让测试通过的实现</p></li><li><p>运行测试</p></li><li><p>识别坏味道，用手法修改代码</p></li><li><p>运行测试</p></li></ol><p>一切都是为了让程序符合预期，这样当出现错误的时候，就能很快定位到错误<small>（它一定是刚刚修改的代码引起的，因为一分钟前代码还是符合我的预期的）</small>。通过这种方式，节省了大量的调试代码的时间。</p><h2 id="tdd-的三条规则" tabindex="-1"><a class="header-anchor" href="#tdd-的三条规则" aria-hidden="true">#</a> TDD 的三条规则</h2><ol><li><p><small>（不考虑重构、优化代码的情况）</small>除非是为了使一个失败的 unit test 通过，否则不允许编写任何产品代码。</p></li><li><p>编写测试用例时，一次性只允许编写造成失败的最小代码。</p></li><li><p>编写产品代码时，一次性只允许编写造成成功的最小代码。</p></li></ol><p>这三条规则的本质是：<strong>分离关注点，“一次只戴一顶帽子”</strong> 。</p><p>在我们编程的过程中，有几个关注点：<strong>需求</strong>，<strong>实现</strong>，<strong>设计</strong> 。</p><p>TDD 给了我们明确的三个步骤，每个步骤关注一个方面：</p><ol><li><p><strong>造『红』</strong>：写一个失败的测试用例，它是对一个小需求的描述，只需要关心输入输出，这个时候根本不用关心如何实现。</p></li><li><p><strong>变『绿』</strong>：专注在用最快、最直观、甚至是最笨的方式实现当前这个小需求，不用关心其他需求，也不要管代码的质量是不是够好，实现方式是不是那么优雅。</p></li><li><p><strong>重构</strong>：既不用思考需求，也没有实现的压力<small>（因为你已经有了一个 60 分的版本，实在不行用这个版本向老板交差）</small>，只需要找出代码中的不够好的地方，改造它。</p></li></ol>',19),t={render:function(l,i){return p}}}}]);