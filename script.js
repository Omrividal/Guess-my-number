'use strict';

const bodyElement = document.querySelector('body');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const hiddenNumber = document.querySelector('.number');
const guessingMessage = document.querySelector('.message');
const score = document.querySelector('.score'); //this score is decreasing every 'check' btn click and is reset when click on again btn
const highScore = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');

// generating random number
const randomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

let num = randomNumber();
let initScore = 20;

console.log(num);

checkBtn.addEventListener('click', () => {
  Number(guessInput.value) !== num ? initScore-- : null;

  if (Number(guessInput.value) === num) {
    bodyElement.style.background = '#60b347';
    guessingMessage.textContent = `🎉 Correct number!`;
    highScore.textContent =
      score.textContent > highScore.textContent
        ? score.textContent
        : highScore.textContent;
    hiddenNumber.textContent = guessInput.value;
    guessInput.disabled = true;
  } else {
    score.textContent = initScore;
  }
});

againBtn.addEventListener('click', () => {
  bodyElement.style.background = '#333';
  guessingMessage.textContent = `Start guessing...`;
  hiddenNumber.textContent = '?';
  guessInput.disabled = false;
  score.textContent = '20';
  guessInput.value = '';

  //   initiating game
  num = randomNumber();
  console.log(num);
});
