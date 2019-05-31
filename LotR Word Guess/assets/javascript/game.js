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

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
    var letterInWord = false;
    
    for (var i = 0; i < numBlanks; i++) {

        if (chosenWord[i] === letter) {
    
          letterInWord = true;
        }
    }
    
    if (letterInWord) {

        for (var j = 0; j < numBlanks; j++) {
    
          if (chosenWord[j] === letter) {
    
            blanksAndSuccesses[j] = letter;
          }
        }
    
        console.log(blanksAndSuccesses);
    }
    
    else {
        wrongGuesses.push(letter); 
        numGuesses--;
    }
}

function roundComplete() {

    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You are indeed a friend of the elves");
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();
    }

    else if (numGuesses === 0) {
        lossCounter++;
        alert("Fool");
        document.getElementById("loss-counter").innerHTML = lossCounter;
        startGame();

    }
}    

startGame();

document.onkeyup = function(event) {

    letterGuessed = String.fromCharCode(event.which).toLowerCase();
  
    checkLetters(letterGuessed);
  
    roundComplete();
};
