// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require('./letter');

var Word = function() {
    this.lettersGuessed = [];
    this.word = [];

    this.addLetter = function(ltr) {
        this.lettersGuessed.push(ltr);
        this.updateWord(ltr);
    }

    this.setWord = function(newWord) {
        for (var i = 0; i < newWord.length; i++) {
            this.word.push(new Letter(newWord.charAt(i)));
        }
    }

    this.updateWord = function(ltr) {
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].letter === ltr) {
                this.word[i].setToDisplay();
            }
        }
    }

    this.displayWord = function() {
        var displayedWord = '';
        for (var i = 0; i < this.word.length; i++) {
            displayedWord += this.word[i].getLetter() + ' ';
        }
        console.log('\n' + displayedWord + '\n');
    }

    this.isComplete = function() {
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].displayLetter === false) {
                return false;
            }
        }
        return true;
    }

    this.isCorrectGuess = function(ltr) {
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].letter === ltr) {
                return true;
            }
        }
        return false;
    }
} // closed Word

module.exports = Word;