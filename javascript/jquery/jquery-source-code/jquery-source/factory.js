function Person(name) {
  this.name = name;
}
//工厂模式
function createPerson(name) {
  return new Person(name);
}

const person = createPerson("jerry");
console.log(person);

var f = function () {
  console.log("he");
};

//f("abc");
