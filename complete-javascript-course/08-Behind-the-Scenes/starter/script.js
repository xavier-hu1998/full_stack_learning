'use strict';
//SECTION This is a Section

//Section: Hoisting with Variables

//Section: Hoisting with Functions

//SECTION: The THIS keyword

//Section: Regual Function & Arrow Function

//Section Argument keyword

//Section: primitive types && objects

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

// console.log(me); //! undefined
// console.log(job); //!Uncaught ReferenceError: Cannot access 'job' before initialization,TDZ
// console.log(year); //!Uncaught ReferenceError: Cannot access 'year' before initialization,TDZ

// var me = 'Xavier';
// let job = 'programmer';
// const year = 1998;

// console.log(me, typeof me); //! Xavier, string
// console.log(job, typeof job); //! Programmer, string
// console.log(year, typeof year); //! 1998, 'number'

//Section: Hoisting with Functions

// console.log(addDecl(2, 3)); //! 5

// console.log(addExpr(2, 3)); //! Uncaught TypeError: addExpr is not a function

// console.log(addArrow(2, 3)); //! Uncaught ReferenceError: Cannot access 'addArrow' before initialization at script.js:25:13

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

//NOTE Any variable declared with var will be hoisted and set to undefined
//NOtE So typeof(addExpr()) would be undefined instead of function

// const addArrow = (a, b) => a + b;

//SECTION: The THIS keyword

//Note This keyword/variable: Special variable that is created for every execution content (every fuunction). This keyword will always take the value of the owner of the function in which the this keyword is used.

//Note this is NOT static. It depends on how the function is called, and its value is only aggigned when the function is actually called.

//Note Four ways of calling a function:
//^ 1.Method => this = <Object that is calling the method>
//^ 2.Simple function call => this = undefined (in strict mode! otherwise: window object in the browser)
//^ 3.Arrow function: this => <this of surrounding/>parent function(leical this)>
//^ 4.Event listener this => <DOM element that handler is attached to>

// console.log(this); // return Window

//simple call the function
// console.log('simple call the function');
// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };

// calcAge(1998); //return 24, undefined

// //Arrow function
// console.log('Arrow Function:');
// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this); //be pointed to the parent function(in the golbal scoop in this case), which is window
// };
// calcAgeArrow(2003); //return 19, window

//Method
// console.log('Method:');
// const xavier = {
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };

// xavier.calcAge(); //{year: 1998, calcAge: ƒ}, 24

// const matilda = {
//   year: 2003,
// };

// matilda.calcAge = xavier.calcAge;
// matilda.calcAge(); //{year: 2003, calcAge: ƒ}, 19

// const f = xavier.calcAge;
// f(); //!Uncaught TypeError: Cannot read properties of undefined (reading 'year') at calcAge (script.js:97:29) at script.js:111:1

//Section: Regual Function & Arrow Function
// console.log('\n \nSection: Regual Function & Arrow Function');

// var firstName = 'Matilda'; //var creates these kind of properties on the global object

// const jonas = {
//   firstName: 'Jonas',
//   year: 1998,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2022 - this.year);

//Note this is a regual function call, even if it happens inside of a method. Because it is a regual function call, its this keyword would be undefined
// const isMillenial = function () {
//   console.log(this); //undefined
//   console.log(this.year) >= 1981 && this.year <= 1996;
// };

//note Solution1; we can define a self to use this keyword here
// const self = this;
// const isMillenial = function () {
//   console.log(self); //{firstName: 'Jonas', year: 1998, calcAge: ƒ, greet: ƒ}
//   console.log(self.year >= 1981 && self.year <= 2000); //true
// };

//note Solution2: Arrow function will use the this keyword from its parent scoop, which is the calcAge function, and the this key word in calcAge() is jonas. Arrow function inherits the this keyword from its parent scoop
// const isMillenial = () => {
//   console.log(this); //{firstName: 'Jonas', year: 1998, calcAge: ƒ, greet: ƒ}
//   console.log(this.year) >= 1981 && this.year <= 1996; //true
// };

//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet(); //Hey Matilda
// jonas.calcAge();
//! Uncaught TypeError: Cannot read properties of undefined (reading 'year'
//! at isMillenial (script.js:127:24)
//! at Object.calcAge (script.js:129:5)
//! at script.js:136:7

//^ arrow function does not have its own this keyword, it will simply use the this keyword from its surroundings. Here, the parent scoop is global scoop. Because, const jonas = {...} is not a scoop, it is a object literal

//Section Argument keyword
// console.log('Arguments Keyword');
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5); //Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
// addExpr(2, 5, 8, 12); //Arguments(4) [2, 5, 8, 12, callee: (...), Symbol(Symbol.iterator): ƒ]

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8); //!script.js:169 Uncaught ReferenceError: arguments is not defined at addArrow (script.js:169:15) at script.js:172:1

//Section: primitive types && objects

/**
 *Note     Primitives :      Objects:
 *^        1. Number         Object Literal
 *^        2. String         Arrays
 *^        3. Boolean        Functions
 *^        4. Undefined      Many more...
 *^        5. Null
 *^        6. Symbol
 *^        7. BigInt
 
 *^      Primitive Types    Preference Types
 */

// // Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// // Primitives vs. Objects in Practice

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage: ', jessicaCopy);
