var str = "			ab	cd ";
console.log(str);
console.log(str.length);
var strTrim = $.trim(str);
console.log(strTrim);
console.log(strTrim.length);

console.log("abc".trim.call("\uFEFF\xA0"));

if ("abc".trim.call("\uFEFF\xA0")) {
  console.log("abc");
} else {
  console.log("abcd");
}
