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


// let century;
// const birthYear = 1998;
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);





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


// typeof "John"                 // 返回 string
// typeof 3.14                   // 返回 number
// typeof NaN                    // 返回 number
// typeof false                  // 返回 boolean
// typeof [1,2,3,4]              // 返回 object
// typeof {name:'John', age:34}  // 返回 object
// typeof new Date()             // 返回 object
// typeof function () {}         // 返回 function
// typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
// typeof null                   // 返回 object



// // type conversion:
// const inputYear = '1998';
// console.log(inputYear + 18); // will return '199818'
// console.log(Number(inputYear) + 18); // 2016


// console.log(Number('Yuxiang')); // return NaN => Not a Number
// console.log(typeof(NaN)); // number

// console.log(String(23), 23);
/*
type coercion: 类型强制转换
将一个值从一个类型明确地转换到另一个类型通常称为“类型转换（type casting）”，
当这个操作隐含地完成时称为“强制转换（coercion）”
（根据一个值如何被使用的规则来强制它变换类型）。
/'-'3' = 3 -> 3-2=1 -> 1+'5'='15'


/////////////////////////////////////////////////

//Lecture 21 Truthy and Falsy Value

/////////////////////////////////////////////////

// Falsy Values: 0, '', undefined, null, NaN

console.log('Lecture21 console:')
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({})); // Empty Object is a truthy value

/////////////////////////////////////////////////

//Lecture 22: Equality Operators == vs ===

/////////////////////////////////////////////////

const age = 18;
if(age === 18) console.log(`You are Adult now
LOL`)

// === is the strick equal, which dose not do type coercion
// ==  is the loose equal, which would do type coercion

// console.log(18 == '18') // true
// console.log(18 === '18') //false


///////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
