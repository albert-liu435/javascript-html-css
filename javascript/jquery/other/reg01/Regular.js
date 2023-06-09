// 什么是正则表达式？
// 正则表达式是由一个字符序列形成的搜索模式。

// 当你在文本中搜索数据时，你可以用搜索模式来描述你要查询的内容。

// 正则表达式可以是一个简单的字符，或一个更复杂的模式。

// 正则表达式可用于所有文本搜索和文本替换的操作。

//语法
//-- /正则表达式主体/修饰符(可选)
//其中修饰符是可选的。

// 实例：
// var patt = /runoob/i
// 实例解析：

// /runoob/i  是一个正则表达式。

// runoob  是一个正则表达式主体 (用于检索)。
// i  是一个修饰符 (搜索不区分大小写)。

// 使用字符串方法
// 在 JavaScript 中，正则表达式通常用于两个字符串方法 : search() 和 replace()。

// search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

// replace() 方法用于在字符串中用一些字符串替换另一些字符串，或替换一个与正则表达式匹配的子串。

function searchFn(str) {
  var n = str.search(/Runoob/i);
  return n;
}
// var str = "Visit Runoob!";
var n = searchFn("Visit Runoob!");
console.log("查询：" + n);

//search() 方法使用字符串
// search 方法可使用字符串作为参数。字符串参数会转换为正则表达式：

function searchFn2(str) {
  var n = str.search("Runoob");
  return n;
}
var n2 = searchFn2("Visit Runoob!");
console.log("查询：" + n2);

// replace() 方法使用正则表达式
var visit = "Visit Microsoft!";
var txt = visit.replace(/microsoft/i, "Runoob");
console.log("text：" + txt);

// replace() 方法使用正则表达式
var visit1 = "Visit Microsoft!";
var txt1 = visit1.replace("microsoft", "Runoob");
console.log("text1：" + txt);

// 正则表达式修饰符
// 修饰符 可以在全局搜索中不区分大小写:

// 修饰符	描述
// i:执行对大小写不敏感的匹配。
// g:执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
// m:执行多行匹配。

// 正则表达式模式
// 方括号用于查找某个范围内的字符：

// 表达式	描述
// [abc]	查找方括号之间的任何字符。
// [0-9]	查找任何从 0 至 9 的数字。
// (x|y)	查找任何以 | 分隔的选项。

// 元字符是拥有特殊含义的字符：

// 元字符	描述
// \d	查找数字。
// \s	查找空白字符。
// \b	匹配单词边界。
// \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。


// 量词:

// 量词	描述
// n+	匹配任何包含至少一个 n 的字符串。
// n*	匹配任何包含零个或多个 n 的字符串。
// n?	匹配任何包含零个或一个 n 的字符串。

var reg=new RegExp("a","i");

