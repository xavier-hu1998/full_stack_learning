'use strict';
// console.log(document.querySelector(`.message`).textContent);

//DOM Document Object Model: Structured representation of HTML documents.
//Allows JS to access HTML elements & style
//querySelector
//.textContent
//DOM is part of Web APIs, not part of JS

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const guessNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Check if there is a value or not
  if (!guess) {
    document.querySelector(`.message`).textContent = `NO Number !`;

    //when the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct !`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // when the guess os smaller than the secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `Too Large` : `Too Small`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You Lose!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
};

document.querySelector(`.check`).addEventListener(`click`, guessNumber);

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   e.preventDefault();
//   if (e.key === 13) {
//     document.querySelector(`.check`).click();
//   }
// });

/*???????*/

//document.querySelector('.check')选中 .Check,
//addEventListener() evernthandler
/*EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，
当该对象触发指定的事件时，指定的回调函数就会被执行。
事件目标可以是一个文档上的元素 Element,Document和Window或者任何其他支持事件的对象
(比如 XMLHttpRequest)。

addEventListener()的工作原理是将实现EventListener的函数或对象添加到调用它
的EventTarget上的指定事件类型的事件侦听器列表中。*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = '15rem';
});
