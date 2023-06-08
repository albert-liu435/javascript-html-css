//https://blog.csdn.net/lalala_dxf/article/details/124098349

// 正则表达式（Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。

// 也就是说，正则表达式是
// （1）由一个字符序列形成的搜索模式
// （2）可以通过搜索模式来描述你要查询的内容
// （3）可以是一个简单的字符，或一个更复杂的模式
// （4）可用于所有文本搜索和文本替换的操作
// ————————————————
// 版权声明：本文为CSDN博主「持久的棒棒君」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lalala_dxf/article/details/124098349

// 1、正则表达式的创建
//			1.1 字面量创建
//   				语法如下：var reg = /正则表达式/修饰符
//					var reg = /hello/g;
// 			1.2 构造函数创建
// 					构造正则表达式的实例，如new RexExp(‘abc’)，内部传入的参数为字符串/字符串的变量。
// 					语法如下：var reg = new RegExp("正则表达式"，"修饰符")
//					var reg = new RegExp("hello","g");

//2、正则表达式中的字符分类
//	普通字符
//		字母、数字、下划线、汉字、没有特殊含义的符号（,;!@等），实际上不是特殊字符的字符都是普通字符
//	特殊字符（转义字符）
//		反斜杠\：将普通字符转义为特殊字符
// 		字符	匹配
// 		字母和数字字符	自身
// 		\o	Null字符
// 		\t	制表符
// 		\n	换行符
// 		\v	垂直制表符
// 		\f	换页符
// 		\r	回车符
// 	模式修饰符
// 		有如下几个模式修饰符：
// 		i：ignoreCase，匹配时忽视大小写
// 		m：multiline，多行匹配 /n
// 		g：global，全局匹配.
// 字面量创建正则时，模式修饰符写在一对反斜线后。

// 3、正则表达式实例方法
// 		exec
// 		可用来匹配字符串中符合正则表达式的字符串。如果匹配到，返回值是一个result数组:
//[匹配的内容，index: 在str中匹配的起始位置，input: 参数字符串，groups: undefined]，没匹配到则返回null

var str = "Hello world hello";
//字面量创建

var reg1 = /hello/;
var reg2 = /hello/g;
var reg3 = /hello/i; //i修饰符表示匹配时忽略大小写
var reg4 = /exe/g;
console.log(reg1.exec(str));
//[ 'hello', index: 12, input: 'hello world hello', groups: undefined ]

console.log(reg2.exec(str));
//[ 'hello', index: 12, input: 'hello world hello', groups: undefined ]

// 不区分大小写，所以index取得是第一个Hello的索引
console.log(reg3.exec(str));
//[ 'Hello', index: 0, input: 'Hello world hello', groups: undefined ]

console.log(reg4.exec(str));
//null

// 1)如果正则表达式中有修饰符"g",这时，在正则表达式的实例reg中会维护lastIndex属性，记录下一次开始的位置，当第二次执行exec的时候，从lastIndex开始检索。
// 2)如果正则表达式中没有修饰符"g",不会维护lastIndex属性，每次执行从开始位置检索。

// （lastIndex从字面上来讲就是最后一个索引，实际上它的意思是正则表达式开始下一次查找的索引位置，第一次的时候总是为0的，第一次查找完了的时候会把lastIndex的值设为匹配到得字符串的最后一个字符的索引位置加1，
//第二次查找的时候会从lastIndex这个位置开始，后面的以此类推。如果没有找到，则会把lastIndex重置为0。）
// ————————————————
// 版权声明：本文为CSDN博主「持久的棒棒君」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lalala_dxf/article/details/124098349

// test
// 用来测试待检测的字符串中是否有可以匹配到正则表达式的字符串，如果有返回true，否则返回false

var str = "hello world";
var reg1 = /world/;
var reg2 = /regex/;
console.log(reg1.test(str)); //返回true
console.log(reg2.test(str)); //返回false
// 1)如果正则表达式中有修饰符"g",这时，在reg中会维护lastIndex属性，用来记录下一次开始的位置，当第二次执行test的时候，从lastIndex开始检索。
// 2)如果正则表达式中没有修饰符"g",不会维护lastIndex属性，每次执行从开始位置检索。

// toString/toLocaleString
// 把正则表达式的内容转化成字面量形式字符串，和有本地特色的字符串

var reg1 = /hello/;
console.log(reg1.toString()); // /hello/
console.log(reg1.toLocaleString()); // /hello/

// valueOf
// 返回正则表达式本身

var reg1 = /hello/;
console.log(reg1.valueOf()); // /hello/ 返回正则表达式本身
console.log(reg1); // /hello/
