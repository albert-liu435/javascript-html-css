//http://rapheal.sinaapp.com/2013/01/17/jquery-src-util/#extend
//each接受2个参数， 数组[1,2,3],回调函数
$.each([1, 2, 3], function (key, value) {
  console.log("[" + key + "]=" + value);
  return false;
});
// //输出：
// [0]=1
// [1]=2
// [2]=3
// [1,2,3]
//可以看到回调函数具有两个参数，key是数组的索引，value是对应的元素

//each接受3个参数， 数组[1,2,3],回调函数，一个额外的参数数组args=[4,5]
$.each(
  [1, 2, 3],
  function (arg1, arg2) {
    console.log(this + "," + arg1 + "," + arg2);
  },
  [4, 5]
);
// //输出：
// 1,4,5
// 2,4,5
// 3,4,5
// [1,2,3]
//可以看到回调函数的两个参数就是each的第三个参数args，在函数里边的this就是遍历元素自己
