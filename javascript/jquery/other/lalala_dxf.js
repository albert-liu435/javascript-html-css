//https://blog.csdn.net/lalala_dxf/article/details/124098349
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
// 		可用来匹配字符串中符合正则表达式的字符串。如果匹配到，返回值是一个result数组:[匹配的内容，index: 在str中匹配的起始位置，input: 参数字符串，groups: undefined]，没匹配到则返回null

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
