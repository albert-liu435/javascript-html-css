// 9、特殊—前瞻后嘱表达式
// 在正则表达式当中有个东西叫做前瞻后嘱，有的管它叫零宽断言：

// 分为如下几类：

// 表达式	名称	描述
// x (?=exp)	正向前瞻，或者零宽正向先行断言（zero-width positive lookahead assertion）	匹配x后面满足表达式exp的位置
// x(?!exp)	负向前瞻，或者零宽负向先行断言（zero-width negative lookahead assertion）	匹配x后面不满足表达式exp的位置
// （?<=exp）x	正向后嘱，或者叫零宽正向后行断言（zero-width positive lookbehind assertion）	匹配x前面满足表达式exp的位置
// （?<!exp）x	负向后嘱，或者叫零宽负向后行断言（zero-width negative lookbihind assertion ）	匹配x前面不满足表达式exp的位置
// ————————————————
// 版权声明：本文为CSDN博主「持久的棒棒君」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lalala_dxf/article/details/124098349

// 看如下例题：

// 正向前瞻
var str = "Hello, Hi, I am Hilary.";
var reg = /H(?=i)/g;
var newStr = str.replace(reg, "T");
console.log(newStr); //Hello, Ti, I am Tilary.

//可以看出正向前瞻的作用：同样是字符"H"，但是只匹配"H"后面紧跟"i"的"H"。可以看成H开头是前提，H后紧跟i是才是想要的。
//负向前瞻
var str = "Hello, Hi, I am Hilary.";
var reg = /H(?!i)/g;
var newStr = str.replace(reg, "T");
console.log(newStr); //Tello, Hi, I am Hilary.
//这里负向前瞻的作用是匹配H并且是H后面不能紧跟一个i的H。

//正向后瞻
let str = "我喜欢你 你喜欢我吗";
// 匹配 "喜欢" 前面有 "我" 的 "喜欢" ;
let reg = /(?<=我)喜欢/;
console.log(reg.test(str)); // true

//负向后瞻
let str = "我喜欢你 你喜欢我吗";
// 匹配"喜欢"前面没有"我"的"喜欢";
let reg = /(?<!我)喜欢/;
console.log(reg.test(str)); // true
