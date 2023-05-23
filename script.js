'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.question').textContent = secretNumber;

const eventHandler = () => {
    const guessingNumber = Number(document.querySelector('.number-input').value);

    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';
    } else if (guessingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно!';
    } else if (guessingNumber > secretNumber) {

        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Слишком много!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Игра завершена! Вы проиграли';
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (guessingNumber < secretNumber) {

        if (scrore > 1) {
            document.querySelector('.guess-message').textContent = 'Слишком мало!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Игра завершена! Вы проиграли';
            document.querySelector('.score').textContent = 0;
        }
    }
};

document.querySelector('.check').addEventListener('click', eventHandler);