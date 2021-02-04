'use strict';
// Random number generator
const SecretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = SecretNumber;
// score value
let score = 20;
//checking and saving input value from player
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //no input
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === SecretNumber) {
    //player wins
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > SecretNumber) {
    //player's number is higher than random number
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too high...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.message').textContent = 'You Lost! :(';
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < SecretNumber) {
    //player's number is lower than random number

    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.message').textContent = 'You Lost! :(';
      document.querySelector('.score').textContent = score;
    }
  }
});
