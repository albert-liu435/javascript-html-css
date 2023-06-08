// 5、正则表达式中的元字符
// - 直接量字符（转义字符）
// 正则表达式中的所有字母和数字都是按照字面含义进行匹配的，Javascript正则表达式语法也支持非字母的字符匹配，这些字符需要通过反斜线\作为前缀进行转义。

// 字符	匹配
// 字母和数字字符	自身
// \o	Null字符
// \t	制表符
// \n	换行符
// \v	垂直制表符
// \f	换页符
// \r	回车符

// - 字符集合
// 一个字符集合，也叫字符组。匹配集合中的任意一个字符。可以使用连字符‘-’指定一个范围。
// 使用方括号来表示范围。方括号用于查找某个范围内的字符。例如

// [abc] 查找方括号之间的任何字符
var str = "abc qwe abc";
var reg1 = /[abc]/; // 只要包含有a 或者 包含有b 或者包含有c 都返回为true
console.log(reg1.test(str)); //true
console.log(reg1.exec(str));

//[0-9] 查找任何从0至9的数字
var str = "abc qwe abd1";
var reg1 = /[0-9]/gim;
console.log(reg1.test(str)); //true
console.log(reg1.exec(str));

//[^xyz] 一个反义或补充字符集，也叫反义字符组.匹配任意不在括号内的字符。
var str = "abc qwe abd1,2";
console.log(str);
var reg1 = /[^abc ]/gim;
console.log(reg1.test(str)); //true
//如果将上面的reg.test(str)改为reg1.exec(str);结果是[ 'q', index: 5, input: 'abc qwe abd1,2', groups: undefined ]

console.log(reg1.exec(str)); //由于lastIndex的改变，这里匹配的内容就变为'w'
//[ 'w', index: 5, input: 'abc qwe abd1,2', groups: undefined ]

console.log("---------------------------------------");

// //- 边界符
// ^ 匹配输入开始。表示匹配行首的文本（以谁开始)。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符后的开始处。
// $ 匹配输入结尾。表示匹配行尾的文本（以谁结束）。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符的前的结尾处。
// 如果 ^和 $ 在一起，表示必须是精确匹配。
// \b 匹配单词边界。比如Sheep\b可以匹配littleSheep末尾的Sheep，不能比配littleSheepMilk中的Sheep
// \B 匹配非单词边界。例如，Sheep\B可以匹配littleSheepMilk中的Sheep，不能匹配littleSheep中的Sheep
// ————————————————
// 版权声明：本文为CSDN博主「持久的棒棒君」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lalala_dxf/article/details/124098349

var rg = /abc/;
// /abc/ 只要包含有abc这个字符串返回的都是true
//test用来测试待检测的字符串中是否有可以匹配到正则表达式的字符串，如果有返回true，否则返回false
console.log(rg.test("abc")); //true
console.log(rg.test("abcd")); //true
console.log(rg.test("aabcd")); //true
console.log("---------------------------");

// 必须是以abc开头的字符串才会满足
var reg = /^abc/;
console.log(reg.test("abc")); // true
console.log(reg.test("abcd")); // true
console.log(reg.test("aabcd")); // false
console.log("---------------------------");

// 必须是以abc结尾的字符串才会满足
var reg = /abc$/;
console.log(reg.test("abc")); // true
console.log(reg.test("qweabc")); // true
console.log(reg.test("aabcd")); // false
console.log("---------------------------");

var reg1 = /^abc$/; // 精确匹配 要求必须是 abc字符串才符合规范
console.log(reg1.test("abc")); // true
console.log(reg1.test("abcd")); // false
console.log(reg1.test("aabcd")); // false
console.log(reg1.test("abcabc")); // false

console.log(
  "##############################################################################################"
);

//字符集合与"^"和 "$"一起使用
// 三选一 只有是a 或者是 b  或者是c 这三个字母才返回 true
var rg1 = /^[abc]$/;
console.log(rg1.test("aa")); //false
console.log(rg1.test("a")); //true
console.log(rg1.test("b")); //true
console.log(rg1.test("c")); //true
console.log(rg1.test("abc")); //false

//26个英文字母任何一个字母返回 true  - 表示的是a 到z 的范围
var reg = /^[a-z]$/;
console.log(reg.test("a")); //true
console.log(reg.test("z")); //true
console.log(reg.test("A")); //false

//字符组合
// 匹配到26个英文字母(大写和小写都可以)任何一个字母,0~9十个数字中的任意一个，结果均返回 true
var reg1 = /^[a-zA-Z0-9]$/;

//取反 方括号内部加上 ^ 表示取反，只要包含方括号内的字符，都返回 false 。
var reg2 = /^[^a-zA-Z0-9]$/;
console.log(reg2.test("a")); //false
console.log(reg2.test("B")); //false
console.log(reg2.test(8)); //false
console.log(reg2.test("!")); //true

console.log(
  "##############################################################################################"
);

// - 字符类
// 将直接量字符单独放进方括号内就组成了字符类，一个字符类可以匹配它所包含的任意字符。

// 字符类	含义
// .	匹配除换行符\n和回车符之外的任何单个字符，等效于[^\n\r]
// \d	匹配一个数字字符，等效于[0-9]
// \D	[^0-9]
// \w	匹配包括下划线的任何单个字符，包括A~ Z，a~ z，0~ 9和下划线_ ，等效于[a-zA-Z0-9_]
// \W	[^a-zA-Z0-9_]
// \s	匹配任何Unicode空白字符，包括空格、制表符、换页符等，等效于[\f\t\n\r]
// \S	[^\f\t\n\r]
// ————————————————
// 版权声明：本文为CSDN博主「持久的棒棒君」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lalala_dxf/article/details/124098349

// 测试：

// “.” 除换行符\n和回车符之外的任何单个字符

var str = "\nHello World Hello\r JavaScript";
console.log(str);
var reg1 = /./g;
console.log(reg1.exec(str));

// //结果：
// Hello World Hello
// JavaScript
// [
//   'H',
//   index: 1,
//   input: '\nHello World Hello\r JavaScript',
//   groups: undefined
// ]

// \d 匹配一个数字字符，等效于[0-9]

// 以数字开头
var str = "123Hello World Hello 123JavaScript";
console.log(str);
var reg1 = /^\d/g;
console.log(reg1.exec(str));

// //结果
// 123Hello World Hello 123JavaScript
// [
//   '1',

//   index: 0,
//   input: '123Hello World Hello 123JavaScript',
//   groups: undefined
// ]

//\s 匹配任何Unicode空白字符，包括空格、制表符、换页符等，等效于[\f\t\n\r]
// 以空白字符开头
var str = "\nHello World Hello 123JavaScript";
console.log(str);
var reg1 = /^\s/g;
console.log(reg1.exec(str));

// //结果：
// Hello World Hello 123JavaScript
// [
//   '\n',
//   index: 0,
//   input: '\nHello World Hello 123JavaScript',
//   groups: undefined
// ]
