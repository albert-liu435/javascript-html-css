// 7、选择、分组、引用
// 7.1 选择
// 字符"|"用于分隔供选择的字符，选择项的尝试匹配次序是从左到右，直到发现了匹配项，如果左边的选择项匹配到了，则不会继续向右进行匹配。
var reg = /html|css|js/;
console.log(reg.exec("qweqwehtmlcss"));
//[ 'html', index: 6, input: 'qweqwehtmlcss', groups: undefined ]

console.log(
  "######################################################################"
);

// 7.2 分组
// 在正则表达式中提供了一种将表达式分组的机制，当使用分组时，除了获取整个儿匹配，还能够在匹配中选择每一个分组，要实现分组很简单，使用()即可。分组分为两类，一类是捕获分组，一类是非捕获分组，如下

// 7.2.1 捕获分组：
// 分组后的数据可以捕获数据，被正则表达式匹配（捕获）到的字符串会被暂存起来。其中，由分组捕获的串会从1开始编号，于是我们可以引用这些串，可以通过**$串编号**的形式引用串。如下：

// 例如匹配时间“2022-12-2”
// ————————————————
// 版权声明：本文为CSDN博主「持久的棒棒君」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/lalala_dxf/article/details/124098349
let str = "2022-12-3";
//圆括号包裹的一个小整体成为分组。
let reg = /(\d{4})-(\d{1,2})-(\d{1,2})/;

// 捕获之前先test/exec
reg.test(str);
console.log(RegExp.$1); //2022
console.log(RegExp.$2); //12
console.log(RegExp.$3); //2

// $1引用了第一个被捕获的串，$2是第二个，依次类推

// 7.2.2 非捕获分组
// 有时候，我们并不需要捕获某个分组的内容，但是又想使用分组的特性。

// 这个时候就可以使用非捕获组(?:表达式)，从而不捕获数据，还能使用分组的功能。

// 例如：匹配四个字母组成的单词
let reg = /\b(?:\w{4})\b/;
let str1 = "abcd ab abcd";
let result = reg.exec(str1);
console.log(result); // [ 'abcd', index: 0, input: 'abcd ab abcd', groups: undefined
console.log(RegExp.$1); // 无数值

// 7.2.3 分组候选
// 一个分组中可以有多个候选表达式，用 | 分隔

var reg = /I Like (basketball|football|table tennis)/;
console.log(reg.test("I Like basketball")); //true
console.log(reg.test("I Like football")); //true
console.log(reg.test("I Like table tennis")); //true

//7.2.4 嵌套分组捕获
// 如果碰到(())的嵌套分组，则会按照左括号出现的顺序进行捕获。例如

var reg = /((apple) is (a (fruit)))/;
var str2 = "apple is a fruit";
reg.test(str2); // true
RegExp.$1; // apple is a fruit
RegExp.$2; // apple
RegExp.$3; // a fruit
RegExp.$4; // fruit

//7.3 引用
// 正则表达式里也能进行引用，这称为反向引用。
// 如下：
var reg = /(\w{3}) is \1/;
console.log(reg.test("kid is kid")); // true
console.log(reg.test("dik is dik")); // true
console.log(reg.test("kid is dik")); // false
console.log(reg.test("dik is kid")); // false
// \1引用了第一个被分组所捕获的串，换言之，表达式是动态决定的。
// 如果编号越界，则会被当成普通的表达式
var reg = /(\w{3}) is \6/;
reg.test("kid is kid"); // false
reg.test("kid is \6"); // true
