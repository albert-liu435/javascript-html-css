// // // // // //https://www.cnblogs.com/aaronjs/category/511281.html?page=3
// // // // // //JavaScript是函数式语言，函数可以实现类，类就是面向对象编程中最基本的概念
// // // // // var aQuery = function (selector, context) {
// // // // //   //构造函数
// // // // // };
// // // // // aQuery.prototype = {
// // // // //   //原型
// // // // //   name: function () {},
// // // // //   age: function () {},
// // // // // };

// // // // // var a = new aQuery();

// // // // // a.name();
// // // // // console.log(a);

// // // // var aQuery = function (selector, context) {
// // // //   return new aQuery();
// // // // };
// // // // aQuery.prototype = {
// // // //   name: function () {},
// // // //   age: function () {},
// // // // };
// // // // //通过new aQuery()，虽然返回的是一个实例，但是也能看出很明显的问题，死循环了！
// // // // console.log(aQuery());

// // // //那么可以把jQuery类当作一个工厂方法来创建实例，把这个方法放到jQuery.prototye原型中
// // // var aQuery = function (selector, context) {
// // //   return aQuery.prototype.init();
// // // };
// // // aQuery.prototype = {
// // //   init: function () {
// // //     return this;
// // //   },
// // //   name: function () {},
// // //   age: function () {},
// // // };
// // // //很明显aQuery()返回的是aQuery类的实例，那么在init中的this其实也是指向的aQuery类的实例
// // // //问题来了init的this指向的是aQuery类，如果把init函数也当作一个构造器，那么内部的this要如何处理？
// // // console.log(aQuery());
// // // console.dir(aQuery());

// // var aQuery = function (selector, context) {
// //   return aQuery.prototype.init();
// // };
// // aQuery.prototype = {
// //   init: function () {
// //     this.age = 18;
// //     return this;
// //   },
// //   name: function () {},
// //   age: 20,
// // };

// // //这样的情况下就出错了，因为this只是指向aQuery类的，所以需要设计出独立的作用域才行
// // aQuery().age; //18
// // console.log(aQuery().age);

// var aQuery = function (selector, context) {
//   return new aQuery.prototype.init();
// };
// aQuery.prototype = {
//   init: function () {
//     this.age = 18;
//     return this;
//   },
//   name: function () {},
//   age: 20,
// };
// //很明显通过实例init函数，每次都构建新的init实例对象，来分隔this,避免交互混淆

// // 那么既然都不是同一个对象那么肯定又出现一个新的问题
// console.dir(aQuery());
// console.log(aQuery());
// //抛出错误，无法找到这个方法，所以很明显new的init跟jquery类的this分离了
// //Uncaught TypeError: Object [object Object] has no method 'name'
// console.log(aQuery().name());

//通过原型传递解决问题，把jQuery的原型传递给jQuery.prototype.init.prototype
//换句话说jQuery的原型对象覆盖了init构造器的原型对象
//因为是引用传递所以不需要担心这个循环引用的性能问题

var aQuery = function (selector, context) {
  return new aQuery.prototype.init();
};
aQuery.prototype = {
  init: function () {
    this.age = 18;
    return this;
  },
  name: function () {
    return this.age;
  },
  age: 20,
};

//fn解释下，其实这个fn没有什么特殊意思，只是jQuery.prototype的引用

aQuery.prototype.init.prototype = aQuery.prototype;

aQuery(window);
//console.log(aQuery().name()); //20

// aQuery().init().name()

// 分解
// a = aQuery();
// a.init()
// a.name()

// jQuery.extend = jQuery.fn.extend = function() {
//   var src, copyIsArray, copy, name, options, clone,
//       target = arguments[0] || {},    // 常见用法 jQuery.extend( obj1, obj2 )，此时，target为arguments[0]
//       i = 1,
//       length = arguments.length,
//       deep = false;

//   // Handle a deep copy situation
//   if ( typeof target === "boolean" ) {    // 如果第一个参数为true，即 jQuery.extend( true, obj1, obj2 ); 的情况
//       deep = target;  // 此时target是true
//       target = arguments[1] || {};    // target改为 obj1
//       // skip the boolean and the target
//       i = 2;
//   }

//   // Handle case when target is a string or something (possible in deep copy)
//   if ( typeof target !== "object" && !jQuery.isFunction(target) ) {  // 处理奇怪的情况，比如 jQuery.extend( 'hello' , {nick: 'casper})~~
//       target = {};
//   }

//   // extend jQuery itself if only one argument is passed
//   if ( length === i ) {   // 处理这种情况 jQuery.extend(obj)，或 jQuery.fn.extend( obj )
//       target = this;  // jQuery.extend时，this指的是jQuery；jQuery.fn.extend时，this指的是jQuery.fn
//       --i;
//   }

//   for ( ; i < length; i++ ) {
//       // Only deal with non-null/undefined values
//       if ( (options = arguments[ i ]) != null ) { // 比如 jQuery.extend( obj1, obj2, obj3, ojb4 )，options则为 obj2、obj3...
//           // Extend the base object
//           for ( name in options ) {
//               src = target[ name ];
//               copy = options[ name ];

//               // Prevent never-ending loop
//               if ( target === copy ) {    // 防止自引用，不赘述
//                   continue;
//               }

//               // Recurse if we're merging plain objects or arrays
//               // 如果是深拷贝，且被拷贝的属性值本身是个对象
//               if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
//                   if ( copyIsArray ) {    // 被拷贝的属性值是个数组
//                       copyIsArray = false;
//                       clone = src && jQuery.isArray(src) ? src : [];

//                   } else {    被拷贝的属性值是个plainObject，比如{ nick: 'casper' }
//                       clone = src && jQuery.isPlainObject(src) ? src : {};
//                   }

//                   // Never move original objects, clone them
//                   target[ name ] = jQuery.extend( deep, clone, copy );  // 递归~

//               // Don't bring in undefined values
//               } else if ( copy !== undefined ) {  // 浅拷贝，且属性值不为undefined
//                   target[ name ] = copy;
//               }
//           }
//       }
//   }

//   // Return the modified object
//   return target;
