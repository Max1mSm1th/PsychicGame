
// Array of choices that the computer is selecting from and being comapared to user input

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables that are initaly set to a value of zero for future functions 

var wins = 0;
var losses = 0;
var guessesLeft = 8;

// Variables that sync up with html tags to display function output

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var madeText = document.getElementById("made-text");
var leftText = document.getElementById("left-text");

// Designated function to reset game after guess limits has surpassed

function resetGame() {
    if (guessesLeft < 1) {
      losses++;
      guessesLeft = 8;
    };
}

// Start the main function via an input by the user

document.onkeyup = function(event) {

// Removes directions from header once action by the user has been taken

    directionsText.textContent = "";

// Define how the user makes a guess as well as the computer

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
// Convert function outputs into visible text for user

    userChoiceText.textContent = userGuess;
    computerChoiceText.textContent = computerGuess;
    winsText.textContent = wins;
    lossesText.textContent = losses;
    leftText.textContent = guessesLeft

// State the outputs for specific results of user guessing correctly or incorrectly

    if (userGuess === computerGuess) {
        wins++;
    } else if (userGuess != computerGuess) {
        guessesLeft--;
    } 

// Recall function that adds value to the losses section

    resetGame ()

};







