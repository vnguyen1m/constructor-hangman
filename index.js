var inquirer = require('inquirer');
var letter = require('./Letter.js');
var word = require('./Word.js');

//Welcome Message
console.log("\n Welcome to Hangman! Let's get started. Guess a word: \n");

var hangman = {
	function Play(guess){
		//Store all variables
		this.wordInPlay: null,
		this.guessedLetters:[],
		this.lettersInWord: [],
		this.matchedLetters: [],
		this.totalGuesses: 0,
		this.letterGuessed: null,
		this.wins: 0,


	if (guess === word){
		console.log("Continue guessing");
	} else {
		console.log("Try again!");
	}

}
//Run inquirer and asks users a series of questions
inquirer.prompt([
    {
      name: "guess",
      message: "Guess a letter?"
    }
  ]).then(function(answers) {
    // initializes the variable newGuess to be a programmer object which will take
    // in all of the user's answers to the questions above
    var newGuess = new Play(answers.guess);
    // printInfo method is run to show that the newGuess object was successfully created and filled
    newGuess.printInfo();
  });

}