'use strict';

//Selectors
let againBtn = document.querySelector('.again');
let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
let message = document.querySelector('.message');
let checkBtn = document.querySelector('.check');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

//Global Variables
let randomNumber = Math.floor(Math.random() * 20) + 1;
let highScoreNumber = 0;
let personalScore = 0;
console.log(randomNumber);
let tries = Number(score.innerHTML);

//Check Button Function
function checkFunc() {
  //animation of blink
  document.body.classList.add('blink');
  setTimeout(function () {
    document.body.classList.remove('blink');
  }, 100); // 1000ms = 1 second

  let guessedNumber = guess.value;

  // console.log(guessedNumber);
  if (guessedNumber === '') {
    message.innerHTML = '⛔️ No number!';
  } else {
    if (tries > 0) {
      if (guessedNumber < randomNumber) {
        message.innerHTML = 'Too Low';
        tries--;
        score.innerHTML = tries;
      } else if (guessedNumber > randomNumber) {
        message.innerHTML = 'Too High';
        tries--;
        score.innerHTML = tries;
      } else {
        message.innerHTML = 'Correct Guess!!!';
        document.body.style.backgroundColor = '#60B347';
        number.innerHTML = randomNumber;
        personalScore = tries;
        if (personalScore > highScoreNumber) highScoreNumber = personalScore;
        highscore.innerHTML = highScoreNumber;
      }
    } else {
      message.innerHTML = '💥 You lost the game!';
      score.innerHTML = '0';
    }
  }
}

//Again Button Function
againBtn.addEventListener('click', function () {
  console.log('again is clicked');
  tries = 20;
  document.body.style.backgroundColor = '#222';
  message.innerHTML = 'Start guessing...';
  score.innerHTML = 20;
  number.innerHTML = '?';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
});
