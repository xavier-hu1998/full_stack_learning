// let js = 'amazing';
// // if (js === 'amazing') alert('js is fun!');

// console.log(50+50);

// let firstName = 'Yuxiang';
// console.log(firstName);

// // var could not start with numbers;
// // for example let 3years = 3; 
// // let Person = 'xxx' wrong;
// // let PI = 3.1415;



// console.log(typeof true);
// console.log(typeof '23');
// console.log(typeof 23);
// console.log(typeof firstName);

// firstName = true;
// console.log(typeof firstName);


// console.log(typeof null);
// //  bug wil return Object


// let age = 24;
// age = 25;

// // mutate a var



// // operations 
// const now = 2022;
// const ageA = now-1998;
// const ageB = now-2000;

// console.log(ageA, ageB);

// const isFullAge = ageA >= 18;
// console.log(isFullAge)

// console.log(now - 1998 > now - 2000);


// console.log(3>2>1);
// // false, 因为 3>2 是true ， 1>1 is false


// // 
// // Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// // 1. Store Mark's and John's mass and height in variables
// // 2. Calculate both their BMIs using the formula (you can even implement both versions)
// // 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// // TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// // TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // 
// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // const markHigherBMI = BMIMark > BMIJohn;

// // console.log(BMIMark, BMIJohn, markHigherBMI);




// const myName = 'Yuxiang'
// const myAge = 24
// const me = "I'm" + myName + ', a ' + myAge + 'years fresh graduate'
// console.log(me)

// const meNew = `I'm ${myName}, a ${myAge}, year old student`;
// console.log(meNew)


// console.log(`string with new line \n\
// multiple \n\
// lines`);


// console.log(`string
// with 
// multiple
// lines`);


/////////////////////////////////////////////////

//Lecture 18 Taking Decisions_if_else Statements

/////////////////////////////////////////////////

// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough){
//     console.log('She can start driving license');
// }else{
//     const yearLeft = 18 - age;
//     console.log(`She is too young, Wait for ${yearLeft} years`)
// }


let century;
const birthYear = 1998;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);





/////////////////////////////////////////////////

//Code Challenge 2:
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀
// */

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}

*/

/////////////////////////////////////////////////

//Lecture 20: Type Conversion & Coercion

/////////////////////////////////////////////////


typeof "John"                 // 返回 string
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
typeof null                   // 返回 object



// type conversion:
const inputYear = '1998';
console.log(inputYear + 18); // will return '199818'
console.log(Number(inputYear) + 18); // 2016


console.log(Number('Yuxiang')); // return NaN => Not a Number
console.log(typeof(NaN)); // number

console.log(String(23), 23);
/*
type coercion:
将一个值从一个类型明确地转换到另一个类型通常称为“类型转换（type casting）”，
当这个操作隐含地完成时称为“强制转换（coercion）”
（根据一个值如何被使用的规则来强制它变换类型）。
*/

console.log('I am ' + 23 + 'years old'); // 23 was converted into string

