//http://rapheal.sinaapp.com/2013/01/25/jquery-src-callbacks/#more-282

// class Callbacks{
//    list = [];//内部存储回调的队列
//   public function add(fn){//添加多一个回调
//     list.add(fn)
//   };
//   public function remove(fn){//移除某个回调
//     list.remove(fn)
//   };
//   public function fire(){//触发事件，执行整条队列
//     for(fn in list){
//       fn()
//     }
//   };
// }

function fn1(arg) {
  //回调一
  console.log("fn1 : " + arg);
}
function fn2(arg) {
  //回调二
  console.log("fn2 : " + arg);
}

// //生成一个Callbacks实例，用add操作添加回调，然后用fire触发事件
// var callbacks = $.Callbacks(); //可以看到这里的$.Callbacks是一个工厂方法，用于生成实例
// callbacks.add(fn1);

// //输出 => fn1 : Alice
// callbacks.fire("Alice");

// callbacks.add(fn2); //添加多一个回调

// //输出 => fn1 : Bob, fn2 : Bob
// callbacks.fire("Bob");

// //用remove接口来移除一个回调。
// callbacks.remove(fn1); //删除回调一

// //输出 => fn2 : Bob
// callbacks.fire("Bob");

//更复杂的场景，某个场景要求只能触发一次事件，之后便不再触发。
var callbacks = $.Callbacks("once"); //只触发一次事件的管理器
callbacks.add(fn1);
callbacks.fire("Alice"); //输出 => fn1 : Alice
callbacks.add(fn2);
callbacks.fire("Bob"); //触发不再生效了



// 从以上的例子可以看到，Callbacks这个工厂方法接受参数，可以生成不同类型的管理器。
// 总共有以下四种子类型的管理器：

// once: 只触发一次回调队列（jQuery的异步队列使用的就是这种类型）
// memory: 这个解释起来有点绕，用场景来描述就是，当事件触发后，之后add进来的回调就直接执行了，无需再触发多一次（jQuery的异步队列使用的就是这种类型）
// unique: 队列里边没有重复的回调
// stopOnFalse: 当有一个回调返回是false的时候中断掉触发动作
// 以上4种类型是可以结合使用的，用空格分隔开传入工厂方法即可：$.Callbacks(“once memory unique”)
// 在异步队列（有三种状态：已完成|已失败|未完成）里边，用了三个管理器：

// done = jQuery.Callbacks(“once memory”);//已完成
// fail = jQuery.Callbacks(“once memory”)//已失败
// progress = jQuery.Callbacks(“memory”)//未完成
// $.Callbacks生成的管理器实例提供了以下接口（官方文档）。