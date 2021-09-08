"use strict";(self.webpackChunkjava_note_vuepress2=self.webpackChunkjava_note_vuepress2||[]).push([[8592],{86848:(l,o,e)=>{e.r(o),e.d(o,{data:()=>d});const d={key:"v-31b2627f",path:"/mysql/99-undo%E5%92%8Credo.html",title:"undo-log 和 redo-log",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"undo log",slug:"undo-log",children:[]},{level:2,title:"redo log",slug:"redo-log",children:[]}],filePathRelative:"mysql/99-undo和redo.md",git:{updatedTime:1629711344e3,contributors:[{name:"hemiao",email:"hemiao3000@126.com",commits:1}]}}},43310:(l,o,e)=>{e.r(o),e.d(o,{default:()=>i});const d=(0,e(66252).uE)('<h1 id="undo-log-和-redo-log" tabindex="-1"><a class="header-anchor" href="#undo-log-和-redo-log" aria-hidden="true">#</a> undo-log 和 redo-log</h1><p>在数据库系统<small>（DBMS）</small>中，磁盘上除了有存放数据的文件之外，还有存放日志的文件。通常<small>（从优化的角度）</small>，数据库的日志信息都是先存储在内存的缓存中，随后再异步地存储到磁盘上。</p><p>MySQL 中的日志文件，有 2 种与『事务』有关：<strong>undo</strong> 日志和 <strong>redo</strong> 日志。<small>也称为，undo-log 和 redo-log 。</small></p><h2 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo log</h2><p>在对数据库执行增删改操作前，MySQL 会将变动前的数据<small>（即原始数据）</small>先备份到 undo log，然后再进行数据库。这样，未来在出错需要回滚的时候，就可以利用 undo log 中备份的数据进行数据的回滚。</p><p>在 undo log 的参与下，数据库的操作流程如下：</p><ol><li>事务开始；</li><li>记录 <code>A=100</code> 到 undo log<small>（内存缓存中）</small></li><li>修改 <code>A=200</code><small>（内存中）</small></li><li>将 undo log 写入到磁盘</li><li>将 <code>A=200</code> 写入到磁盘</li><li>提交事务</li></ol><p><strong>undo log 的存在保证了事务的一致性。</strong></p><ul><li>如果包括 <code>4</code> 在内的之前的操作执行失败，整个事务算执行失败，并且对 MySQL 的并没有影响，因为截止目前为止的改动都是记录在内存中的，并未影响到磁盘。</li><li>如果 <code>5</code> 或 <code>6</code> 执行失败，MySQL 会利用 <code>4</code> 中存盘的 undo log 进行数据恢复。</li></ul><h2 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> redo log</h2><p>redo log 和 undo log 相反，redo log 中记录的是经过你变动之后的数据。</p><p>在 redo log 的参与下，数据库的操作流程如下：</p><ol><li>事务开始：</li><li>记录 <code>A=100</code> 到 undo log<small>（内存缓存中）</small></li><li>修改 <code>A=200</code><small>（内存中）</small></li><li>记录 <code>A=200</code> 到 redo log<small>（内存缓存中）</small></li><li>将 undo log 写入到磁盘</li><li>将 redo log 写入到磁盘</li><li><del>将 <code>A=200</code> 写入到磁盘</del></li><li>提交事务</li></ol><p>虽然逻辑上本应该有 <code>6</code> 这一步操作，但是从优化的角度考虑，MySQL 把这一步给省略掉了。原因在于：</p><ul><li>MySQL 是用异步地方式将内存中的新数据（<code>A=200</code>）存储到磁盘的，因此，A=200 的数据的存盘反而是在 <code>7</code> 执行之后。</li><li>由于 redo log 的存在，实际上，在执行 <code>5</code> 之后，磁盘上已经持久化了新数据了。所以，未来，MySQL 从磁盘上的 redo log 中取新数据即可。</li></ul>',15),i={render:function(l,o){return d}}}}]);