// 6、正则表达式中的数量词
// 数量词
// 字符	含义
// *	≥0次
// +	≥1 次
// ？	0或1次
// {n}	n 次
// {n,}	≥n 次
// {n,m}	n到m 次

// * 允许出现0次或多次
var reg = new RegExp(/^a*$/);
console.log(reg.test("a")); // true
console.log(reg.test("")); // true

// X 匹配前面的模式 x -> 0 或多次。等价于{0,}*
// * 允许出现0次或多次
var reg = new RegExp(/^a*$/);
console.log(reg.test("a")); // true
console.log(reg.test("")); // true

// X+ 匹配前面的模式 x -> 1 或多次。等价于 {1,}。
// + 允许出现1次或多次
var reg2 = new RegExp(/^a+$/);
console.log(reg2.test("a")); // true
console.log(reg2.test("")); // false

//X? 匹配前面的模式 x -> 0 或 1 次。等价于{0,1}
// ? 只允许a出现1次或0次
var reg3 = new RegExp(/^a?$/);
console.log(reg3.test("a")); // true
console.log(reg3.test("")); // true
console.log(reg3.test("aaa")); // false

//X{n} n为非负整数。前面的模式 x 重复出现 n 次时匹配
//{3} 允许重复3次
var reg4 = new RegExp(/^a{3}$/);
console.log(reg4.test("a")); // false
console.log(reg4.test("")); // false
console.log(reg4.test("aaa")); // true
console.log(reg4.test("aaaa")); // false

//X{n,} n为非负整数。前面的模式 x 重复出现至少 n 次时匹配。
// {3,} 允许重复出现3次或3次以上多次
var reg5 = new RegExp(/^a{3,}$/);
console.log(reg5.test("a")); // false
console.log(reg5.test("")); // false
console.log(reg5.test("aaa")); // true
console.log(reg5.test("aaaa")); // true

//X{n,m} n和m为非负整数。前面的模式 x 重复出现至少 n 次，至多 m 次时匹配。
// {3,6} 允许重复出现3次-6次之间，也就是>=3且<=6
var reg6 = new RegExp(/^a{3,6}$/);
console.log(reg6.test("a")); // false
console.log(reg6.test("aaaa")); // true
console.log(reg6.test("aaaaaa")); // true
console.log(reg6.test("aaaaaaa")); // false

//重复方式
// 1)贪婪模式：尽可能多的匹配（首先取最多可匹配的数量为一组进行匹配），当匹配剩余的字符串，还会继续尝试新的匹配，直到匹配不到为止，为默认模式。
// 对字符串"123456789"，匹配其中的数字3-6次：\d{3,6}，
// 先匹配数字出现6次的字符串（123456），然后再从剩余字符串（789）中匹配出现数字3次的情况，
// 剩余字符若没有出现数字3次则停止匹配.
var str = "123456789";
var reg = /\d{3,6}/g;
console.log(reg.exec(str));
//[ '123456', index: 0, input: '12345678', groups: undefined ]
console.log(reg.exec(str));
// [ '789', index: 6, input: '123456789', groups: undefined ]
console.log(reg.exec(str));
// null

//2)非贪婪模式：尽可能少的匹配（每次取最少匹配的数量为一组进行匹配），直到匹配不到为止
// 使用方法：在量词后加上?符号
// 对字符串"123456789"，匹配其中的数字3-6次：\d{3,6}，先匹配数字出现3次的字符串（123456），然后再从剩余字符串（456789）中匹配出现数字3次的情况，剩余字符若没有出现数字3次则停止匹配.
var str = "123456789";
var reg = /\d{3,6}?/g;
console.log(reg.exec(str));
//[ '123', index: 0, input: '123456789', groups: undefined ]
console.log(reg.exec(str));
// [ '456', index: 3, input: '123456789', groups: undefined ]
console.log(reg.exec(str));
// [ '789', index: 6, input: '123456789', groups: undefined ]
