// 当没设置全局匹配时，该属性值始终为0

// 设置了全局匹配时，每执行一次exec/test来匹配，latIndex就会移向匹配到的字符串的下一个位置，当指向的位置后没有可以再次匹配的字符串时，下一次执行exec返回null，test执行返回false，然后lastIndex归零，从字符串的开头重新匹配一轮

// 可以理解成，每次正则查找的起点就是lastIndex。
// ————————————————
// 版权声明：本文为CSDN博主「持久的棒棒君」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lalala_dxf/article/details/124098349

var str = "hello hello hello";
var reg1 = /hello/;
var reg2 = /hello/g;

console.log(reg1);

console.log(reg1.lastIndex); // 0
console.log(reg1.exec(str)); // 返回第一个hello
console.log(reg1.lastIndex); // 0

console.log(reg2.lastIndex); // 0
console.log(reg2.exec(str)); // 返回第一个hello
console.log(reg2.lastIndex); // 5

console.log(reg2.lastIndex); // 5
console.log(reg2.exec(str)); // 返回第二个hello
console.log(reg2.lastIndex); // 11

console.log(reg2.lastIndex); // 11
console.log(reg2.exec(str)); // 返回第三个hello
console.log(reg2.lastIndex); // 17

console.log(reg2.exec(str)); //返回 null

console.log(reg2.lastIndex); // 0
console.log(reg2.exec(str)); // 返回第一个hello

console.log("---------------------------------------");

// ignoreCase、glocal、multiline
// 用于判断正则表达式中是否有忽略大小写、全局匹配、多行匹配三个模式修饰符。和三个模式修饰符作用很像

var reg1 = /hello/gim;
console.log(reg1.ignoreCase); //true
console.log(reg1.global); //true
console.log(reg1.multiline); //true

// source
// 返回字面量形式的正则表达式（类似于toString）

var reg1 = /hello/gim;
console.log(reg1.source); //hello
