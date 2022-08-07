'use strict';

//  This is a normal comment
//! This is a red comment
//* This is a green comment
//? This is a blue comment
//~ This is a purple comment
//^ This is a yellow comment
//TODO This is a TODO
//NOTE This is a Note
//SECTION This is a Section

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(birthYear);
//   return age;
// }

// document.querySelector('h1').textContent = 'Will be back soon...';

//Section: Hoisting with Variables

//NOTE: ES6 明确规定，如果区块中存在let和const命令，那么就形成了封闭作用域。 凡是在声明之前就使用这些变量，就会报错。 也就是说，let，const声明的变量，不会变量提升（hoisting），而var会提升变量的【定义，声明】

//NOTE:暂时性死区, Temporal Dead Zone(TDZ)， 的本质就是，只要一进入当前作用域，所要使用的变量已经存在了，但是不可获取。只有等到let, const声明变量的那行代码出现，才可以获取和使用该变量

console.log(me); //! undefined
// console.log(job); //!Uncaught ReferenceError: Cannot access 'job' before initialization,TDZ
// console.log(year); //!Uncaught ReferenceError: Cannot access 'year' before initialization,TDZ

var me = 'Xavier';
let job = 'programmer';
const year = 1998;

console.log(me, typeof me); //! Xavier, string
console.log(job, typeof job); //! Programmer, string
console.log(year, typeof year); //! 1998, 'number'

//Section: Hoisting with Functions

// console.log(addDecl(2, 3)); //! 5

// console.log(addExpr(2, 3)); //! Uncaught TypeError: addExpr is not a function

// console.log(addArrow(2, 3)); //! Uncaught ReferenceError: Cannot access 'addArrow' before initialization at script.js:25:13

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

//NOTE Any variable declared with var will be hoisted and set to undefined
//NOtE So typeof(addExpr()) would be undefined instead of function

const addArrow = (a, b) => a + b;
