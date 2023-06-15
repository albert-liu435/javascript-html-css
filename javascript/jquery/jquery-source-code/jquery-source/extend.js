//https://zhuanlan.zhihu.com/p/283711922

// 可以看到该方法的三个作用：

// 为 jQuery 的实例对象身上扩展属性方法
// 为 jQuery 本身扩展属性方法
// 为任意对象扩展属性方法
// 另外第一个参数如果是布尔值，可以指定扩展时是否使用深拷贝。

$.fn.extend({
  eat: function () {
    console.log("eat");
  },
});

$.extend({
  drink: function () {
    console.log("drink");
  },
});

$().eat();
$.drink();

var obj = {};
$.fn.extend(obj, { name: "jerry" });
console.log(obj);
console.log($().eat);
