var nameList = ["thranduil", "glorfindel", "haldir", "galadriel", "celeborn", "maedhros", "lindir"];

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


function startGame() {
    numGuesses = 9;
    chosenWord = nameList[Math.floor(Math.random() * nameList.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length
    blanksAndSuccesses = [];
    wrongGuesses = [];
    



}