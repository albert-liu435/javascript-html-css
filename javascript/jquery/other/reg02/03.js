// https://juejin.cn/post/6844903487155732494
//第三章 正则表达式括号的作用
//1. 分组和分支结构
//这二者是括号最直觉的作用，也是最原始的功能。
//		1.1 分组
// 我们知道/a+/匹配连续出现的“a”，而要匹配连续出现的“ab”时，需要使用/(ab)+/。
// 其中括号是提供分组功能，使量词+作用于“ab”这个整体，测试如下：
var regex = /(ab)+/g;
var string = "ababa abbb ababab";
console.log(string.match(regex));
// => ["abab", "ab", "ababab"]
//		1.2 分支结构
// 而在多选分支结构(p1|p2)中，此处括号的作用也是不言而喻的，提供了子表达式的所有可能。
// 比如，要匹配如下的字符串：
// I love JavaScript
// I love Regular Expression
// 可以使用正则：
var regex = /^I love (JavaScript|Regular Expression)$/;
console.log(regex.test("I love JavaScript"));
console.log(regex.test("I love Regular Expression"));
// => true
// => true
// 如果去掉正则中的括号，即/^I love JavaScript|Regular Expression$/，匹配字符串是"I love JavaScript"和"Regular Expression"，当然这不是我们想要的。

console.log(
  "#################-- 2. 引用分组 --###############################"
);

//2. 引用分组
// 这是括号一个重要的作用，有了它，我们就可以进行数据提取，以及更强大的替换操作。
// 而要使用它带来的好处，必须配合使用实现环境的API。
// 以日期为例。假设格式是yyyy-mm-dd的，我们可以先写一个简单的正则：
var regex = /\d{4}-\d{2}-\d{2}/;
// 然后再修改成括号版的：
var regex = /(\d{4})-(\d{2})-(\d{2})/;
// 为什么要使用这个正则呢？
//		2.1 提取数据
// 比如提取出年、月、日，可以这么做：
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log(string.match(regex));
// => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
//match返回的一个数组，第一个元素是整体匹配结果，然后是各个分组（括号里）匹配的内容，然后是匹配下标，最后是输入的文本。（注意：如果正则是否有修饰符g，match返回的数组格式是不一样的）。
// 另外也可以使用正则对象的exec方法：
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log(regex.exec(string));
// => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
//同时，也可以使用构造函数的全局属性$1至$9来获取：
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
regex.test(string); // 正则操作即可，例如
//regex.exec(string);
//string.match(regex);
// console.log(RegExp.$0);
console.log(RegExp.$1); // "2017"
console.log(RegExp.$2); // "06"
console.log(RegExp.$3); // "12"


console.log("----------2.2 替换-----------");

//		2.2 替换
// 比如，想把yyyy-mm-dd格式，替换成mm/dd/yyyy怎么做？
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, "$2/$3/$1");
console.log(result);
// => "06/12/2017"
//其中replace中的，第二个参数里用$1、$2、$3指代相应的分组。等价于如下的形式
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function () {
  return RegExp.$2 + "/" + RegExp.$3 + "/" + RegExp.$1;
});
console.log(result);
// => "06/12/2017"
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function (match, year, month, day) {
  return month + "/" + day + "/" + year;
});
console.log(result);
// => "06/12/2017"
