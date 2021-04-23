"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function Employee(id, name, salary) {
  _classCallCheck(this, Employee);

  this.id = id;
  this.name = name;
  this.salary = salary;
};

var e = new Employee(3, "Ravi", 3434);
console.log(e);


var a = ['a','b','c']

for (var i = 0; i < a.length; i++) {
    let x = a[i]
    console.log(x);
 
}

console.log(i)


function sum(...x){
  x.forEach(value => console.log(value))
}