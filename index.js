// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var Word = require('./Word.js');
var RandomWord = require('./List.js');
var inquirer = require('inquirer');
var guessesWrong = 0;
var pastGuesses = [];

var MyWord = new Word();
var newWord = RandomWord.getRandomWord();
MyWord.setWord(newWord);


console.log('Welcome to the NFL Hangman Game!');
console.log('Guess the NFL team!');
console.log('You have 8 chances to guess the team.');
console.log('*************************************');

function playGame() {
    console.log('Wrong Guesses: ' + guessesWrong + '\n');
    if ((guessesWrong < 8) && (!MyWord.isComplete())) {
        inquirer.prompt([{
            type: 'string',
            message: 'GUESS A LETTER',
            name: 'letter'
        }]).then(function(answers) {
            MyWord.addLetter(answers.letter);
            if (!MyWord.isCorrectGuess(answers.letter)) {
                if (pastGuesses.indexOf(answers.letter) === -1) {
                    guessesWrong++;
                    pastGuesses.push(answers.letter);
                }
            }
            MyWord.displayWord();
            playGame();
        });
    } else {
        if (MyWord.isComplete()) {
            console.log('You Win!!!');
        } else {
            console.log('Game Over!!!');
        }
        guessesWrong = 0;
    }
} // closes playGame

playGame();