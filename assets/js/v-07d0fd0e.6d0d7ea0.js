"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[796],{75805:(p,e,o)=>{o.r(e),o.d(e,{data:()=>a});const a={key:"v-07d0fd0e",path:"/java-thread/thread-99-%E7%B4%A0%E6%9D%90.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"java-thread/thread-99-素材.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},45902:(p,e,o)=>{o.r(e),o.d(e,{default:()=>t});const a=(0,o(66252).uE)('<p>线程池 事件本身没有太多的知识点，但对于线程池，需要再温习一下，在后面的故障分析中，关键知识点还是线程池</p><p>对于线程池的理解，从习得第一印象，认为线程池其实是对于线程与任务两者合并的消费生产者模式</p><p>但如果面试中，面试官询问如何理解线程池的？我也不会这样回答，这涉及到两人对于知识的共振范围，最好谈一些共识最大的点，利在于不踩坑，弊在于平凡不起眼</p><p>自jdk5开始，JDK引入了concurrent包,也就是大名鼎鼎的JUC，其中最常见ThreadPoolExecutor</p><p>常规知识点，线程池的几个重要参数</p><p>核心线程数：corePoolSize</p><p>最大线程数: maxPoolSize</p><p>线程空间时长: keepAliveTime</p><p>核心线程超时: allowCoreThreadTimeout,默认值false,若为true,空闲时，线程池中会没有线程</p><p>任务队列: workQueue</p><p>拒绝处理器: rejectedExecutionHandler</p><p>自带拒绝策略</p><p>AbortPolicy:默认策略，丢弃任务，抛RejectedExecutionException异常</p><p>DiscardPolicy:丢弃任务，但不抛异常</p><p>DiscardOldestPolicy:丢弃队列最前面的任务，然后重新尝试执行任务</p><p>CallerRunsPolicy:由调用线程处理任务</p><p>线程池的工作原理，网上有很多资料，提交任务给线程池，大致流程：</p><p>当线程池中线程数量小于 corePoolSize 则创建线程，并处理请求</p><p>当线程池中线程数量大于等于 corePoolSize 时，则把请求放入 workQueue中,随着线程池中的核心线程们不断执行任务，只要线程池中有空闲的核心线程，线程池就从 workQueue 中取任务并处理</p><p>当 taskQueue 已存满，放不下新任务时则新建非核心线程入池，并处理请求直到线程数目达到 maximumPoolSize（最大线程数量设置值）</p><p>如果线程池中线程数大于 maximumPoolSize 则使用 RejectedExecutionHandler 来进行任务拒绝处理</p><p>参数设定 在日常使用过程中，需要关注的是各参数数值设定，那么如何设定呢？</p><p>一、线程数越多越好吗？</p><p>这个明显不是，比如单核CPU，设置上万个线程没有意义；而且线程过多，上下文切换，反而降低性能</p><p>这儿引出一个问题，单核能多线程吗？</p><p>进程是资源的基本单位，线程是cpu调度的基本单位</p><p>如果一个线程一直占用CPU，那肯定多线程无用，但总有等待时候，如IO，此时，多线程就有了用武之地</p><p>线程数小了，显示又达不到最大化CPU性能</p><p>二、队列容量越大越好吗？</p><p>显然也不是，常人都关注线程数的设定，但队列大小鲜有人问，如果队列过大，积压相当多的任务，必然导致响应时间过长</p><p>如果队列过小，甚至没有，那任务没有缓冲，可能造成线程快速扩张</p><p>线程数与队列容量得配合使用，怎么才是合理的参数呢？</p><p>最直接的方式，模拟线上请求进行压测，随着请求量增加，QPS上升，当到了一定的阀值之后，请求数量增加QPS并不会增加，或者增加不明显，同时请求的响应时间却大幅增加。这个阀值我们认为是最佳线程数</p><p>对于线程数量多少，有很多的设定理论依据</p><p>任务类型 以任务类型设定,这是常用来粗略估值的</p><p>IO密集型</p><p>CPU密集型</p><p>如果是IO密集型，一般是CPU数*2；IO密集型CPU使用率不高，可以让CPU等待IO的时候处理别的任务，充分利用CPU</p><p>如果是CPU密集型 ，一般是CPU数+1；CPU使用率高，若开过多线程，增加线程上下文切换次数，带来额外开销</p><p>公式 前人早就有了计算公式</p><p>一、《Java Concurrency in Practice》</p><p>这本书中作者给出了定义</p><p><img src="https://s4.51cto.com/images/blog/202102/26/862b29adf3308e7b9d7315a21bf1ce41.jpeg" alt=""></p><p>比如平均每个线程CPU运行时间为0.5s，而线程等待时间（非CPU运行时间，比如IO）为1.5s，CPU核心数为8，那么根据上面这个公式估算得到：8 * (1+(1.5/0.5)=32</p><p>二、《Programming Concurrency on the JVM Mastering》</p><p>线程数=Ncpu/（1-阻塞系数）：其中计算密集型阻塞系数为0，IO密集型阻塞系数接近1：</p><p><img src="https://s4.51cto.com/images/blog/202102/26/19df5af2d987472bdb90a1d32e10845e.jpeg" alt=""></p><p>如果以这个示例使用第一个公式计算：2 * (1+(0.9/0.1)) =20,结果也是20</p><p>可以这么思考：两个公式表达不同，但实质一致</p><p>即Ncpu/（1-阻塞系数）=Ncpu*(1+w/c)</p><p>则阻塞系数=w/(w+c)，阻塞系数=阻塞时间/（阻塞时间+计算时间）</p><p>以第二个公式计算第一公式中的示例：8 / (1-(1.5/(1.5+0.5))) = 32</p><p>这样两个公式计算出的结果就是一样的</p><p>以公式计算法推算任务类型分类方式：</p><p>IO型：w/c≈1，公式算出2*cpu</p><p>CPU型：w/c≈0,公式算出1*cpu</p><p>公式的方法有了，如何确定公式中的变量值呢？</p><p>最原始的办法打印日志，等待CPU时间无非就是db,io,网络调用，在发包前，发包后打上日志，算得时间差，求出平均值</p><p>三、其它公式</p><p>设置的线程数 = 目标QPS/(1/任务实际处理时间) = QPS*每个任务处理时间</p><p>(核心线程就以平均qps定；最大线程就以最高qps定)</p><p>举例说明，假设目标QPS=100，任务实际处理时间0.2s，100 * 0.2 = 20个线程，这里的20个线程必须对应物理的20个CPU核心，否则将不能达到预估的QPS指标</p><p>队列大小 = 线程数 * (最大响应时间/任务实际处理时间)</p><p>假设目标最大响应时间为0.4s，计算阻塞队列的长度为20 * (0.4 / 0.2) = 40</p><p>这个公式有点难以理解，最初的公式应该是</p><p>线程数/任务实际处理时间 * 响应时间 = 队列大小</p><p>类似 速度*时间=长度</p><p>这么多的公式，死记硬背是不行的，简单理解一下，qps是每秒处理任务数，如果一个线程处理是1s，那么多少qpS，就需要多少线程了,若是处理0.2s，那1s可以处理5个任务了，也就是1/0.2，那线程数只需要qps/5了，也就是公式qps/(1/任务处理时间)</p>',68),t={render:function(p,e){return a}}}}]);