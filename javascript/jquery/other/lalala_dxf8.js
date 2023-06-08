// 8、特殊—String类型对正则表达式的支持
// search
// 查找字符串中是否有匹配正则的字符串，有则返回字符串第一次出现时的位置，无则返回null。正则中无论是否有全局匹配都不会影响返回结果。

var str = "hello world hello";
var reg = /hello/;
var reg2 = /hello/g;
console.log(str.search(reg)); //返回 0
console.log(str.search(reg2)); //返回 0

// match
// （1）匹配字符串中符合正则表达式的字符串，并返回该字符串的一个数组，其中包括字符串内容、位置

// （2）如果正则设置全局匹配，则一次性返回所有符合正则表达式的字符串数组

// （3）如果其中添加了分组，返回符合要求的字符串以及分组的一个数组，但如果同时开启全局匹配则不会在数组中添加分组内容
// ————————————————
// 版权声明：本文为CSDN博主「持久的棒棒君」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lalala_dxf/article/details/124098349

var str = "hello world hello";
var reg1 = /hello/;
var reg2 = /hello/g;
var reg3 = /(he)llo/;
var reg4 = /(he)llo/g;
// 匹配字符串中符合正则表达式的字符串，并返回该字符串的一个数组，其中包括字符串内容、位置
// [ 'hello', index: 0, input: 'hello world hello', groups: undefined ]
console.log(str.match(reg1));

// 如果正则设置全局匹配，则一次性返回所有符合正则表达式的字符串数组
// [ 'hello', 'hello' ]
console.log(str.match(reg2));

console.log(str.match(reg3));
// 如果其中添加了分组，返回符合要求的字符串以及分组的一个数组
// [
//   'hello',
//   'he',
//   index: 0,
//   input: 'hello world hello',
//   groups: undefined
// ]

// 如果同时开启全局匹配则不会在数组中添加分组内容
// [ 'hello', 'hello' ]
console.log(str.match(reg4));

// split
// 以某种形式分割字符串
// 例如：

var str = "terry134hello156lisi12zhangsan";
// 当数字出现一次或多次时进行分割
var reg = /\d+/;
var result = str.split(reg);
console.log(result); // [ 'terry', 'hello', 'lisi', 'zhangsan' ]

// replace
// 满足正则表达式条件的内容将被替换，并返回一个字符串

var str = "javascript";
var reg = /javascript/;
// replace(正则表达式, 要替换的内容)
var result = str.replace(reg, "java");
console.log(result); //java
console.log(str); //javascript
