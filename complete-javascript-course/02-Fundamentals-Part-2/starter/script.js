/*
严格模式 Strict Mode
ECMAScript 5的严格模式是采用具有限制性 JavaScript 变体的一种方式，从而使代码隐式地脱离“马虎模式/稀松模式/懒散模式“（sloppy）模式。
严格模式不仅仅是一个子集：它的产生是为了形成与正常代码不同的语义。
不支持严格模式与支持严格模式的浏览器在执行严格模式代码时会采用不同行为。
所以在没有对运行环境展开特性测试来验证对于严格模式相关方面支持的情况下，就算采用了严格模式也不一定会取得预期效果。严格模式代码和非严格模式代码可以共存，因此项目脚本可以渐进式地采用严格模式。
严格模式对正常的 JavaScript 语义做了一些更改。
严格模式通过抛出错误来消除了一些原有静默错误。
严格模式修复了一些导致 JavaScript 引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。
严格模式禁用了在 ECMAScript 的未来版本中可能会定义的一些语法。
*/
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`);


// const interface = 'Audio';
// const private = 534;



// Function 


// function logger(){
//     console.log(`my name is Xavier!`);
// }

// // calling , runing & invoking function

// logger();
// logger();


// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const juice = fruitProcessor(5, 0);
// console.log(juice);


///////////////////////////////////////
// Reviewing Functions
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
  
// const yearsUntilRetirement = function (birthYeah, firstName) {
// const age = calcAge(birthYeah);
// const retirement = 65 - age;

// if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
// } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
// }
// }
  
//   console.log(yearsUntilRetirement(1991, 'Jonas'));
//   console.log(yearsUntilRetirement(1950, 'Mike'));
  
  ///////////////////////////////////////




  ///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const friends = [`A`, `B`, `C`];
// console.log(friends);
// const years = new Array(1998, 1999, 2000);

// console.log(friends[0]); //A
// console.log(friends[1]); //B
// console.log(friends[2]); //C

// console.log(friends.length); // 3
// console.log(friends[friends.length - 1]);//C

// friends[0] = 'A1';

// console.log(friends);


// const mix = new Array('1', '2', 3);

// console.log(typeof(mix[0]));
// console.log(typeof(mix[2]));


///////////////////////////////////////
// Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // Add elements
// console.log(`Add elements`);
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);


// friends.unshift('John');
// console.log(friends);

// // Remove elements
// console.log(`Remove elements`);
// console.log(friends);
// // Last pop() 方法用于删除数组的最后一个元素并返回删除的元素。 
// //注意：此方法改变数组的长度！ 
// //提示： 移除数组第一个元素，请使用shift() 方法。
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// // if (friends.includes('Steven')) {
// //   console.log('You have a friend called Steven');
// // }





///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);


// const calTip = function (bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill*0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// const totals = [bills[0]+tips[0], bills[1]+tips[1],bills[2]+tips[2]];

// console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };



  




