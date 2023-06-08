//https://www.cnblogs.com/aaronjs/p/3281911.html

//作者的解释呢很简单，一个简单的检测HTML字符串的表达式
var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;

// 通过选择|分割二义,匹配^开头或者$结尾
//字符"|"用于分隔供选择的字符，选择项的尝试匹配次序是从左到右，直到发现了匹配项，如果左边的选择项匹配到了，则不会继续向右进行匹配。

// ^(?:\s*(<[\w\W]+>)[^>]*
// #([\w-]*))$

// ^(?:\s*(<[\w\W]+>)[^>]*

// (?:pattern) : 匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用
// \s* : 匹配任何空白字符，包括空格、制表符、换页符等等 零次或多次 等价于{0,}
// (pattern) : 匹配pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，使用 $0…$9 属性
// [\w\W]+ : 匹配于'[A-Za-z0-9_]'或[^A-Za-z0-9_]' 一次或多次， 等价{1,}
// (<[wW]+>) :这个表示字符串里要包含用<>包含的字符，例如<p>,<div>等等都是符合要求的
// [^>]* : 负值字符集合,字符串尾部是除了>的任意字符或者没有字符,零次或多次等价于{0,},

// 3. #([\w-]*))$

// 匹配结尾带上#号的任意字符，包括下划线与-
//  \w 匹配包括下划线的任何单个字符，包括A~ Z，a~ z，0~ 9和下划线_ ，等效于[a-zA-Z0-9_]
// 4. 还要穿插一下exec方法

// 如果执行exec方法的正则表达式没有分组（没有括号括起来的内容），那么如果有匹配，他将返回一个只有一个元素的数组，这个数组唯一的元素就是该正则表达式匹配的第一个串;如果没有匹配则返回null。
// exec如果找到了匹配，而且包含分组的话，返回的数组将包含多个元素，第一个元素是找到的匹配，之后的元素依次为该匹配中的第一、第二...个分组（反向引用）
// 所以综合起来呢大概的意思就是：匹配HTML标记和ID表达式（<前面可以匹配任何空白字符，包括空格、制表符、换页符等等）

var str = " <div id=top></div>";
var match = rquickExpr.exec(str);
console.log(match);
console.log(match[0]);
console.log(match[1]);
console.log(match.toString);
////[匹配的内容，groups: undefined,index: 在str中匹配的起始位置，input: 参数字符串]，没匹配到则返回null
//[" <div id=top></div>", "<div id=top></div>", undefined, index: 0, input: " <div id=top></div>"]
var str = "[?\f\n\r\t\v]<div id=top></div>";

var str = "#test";
var match = rquickExpr.exec(str);
console.log(match);

//////////////////
console.log("################################################################");
var regex = /(?:ab)+/g;
var string = "ababa abbb ababab";
console.log(string.match(regex));
console.log(regex.exec(string));

console.log("################################################################");

var rquickExpr1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;

var str1 = " <div id=top></div>";
var match1 = rquickExpr1.exec(str1);
console.log(match1);
//输出
//['<div id=top></div>', '<div id=top></div>', undefined, index: 0, input: '<div id=top></div>', groups: undefined]

var rquickExpr2 = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

var str2 = " <div id=top></div>";
var match2 = rquickExpr2.exec(str2);
console.log(match2);
//输出
//[' <div id=top></div>', '<div id=top></div>', index: 0, input: ' <div id=top></div>', groups: undefined]
