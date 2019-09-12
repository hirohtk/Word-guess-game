var wins = 0
var losses = 0
var guessesLeft = 10
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var userChoiceArray = []
var userChoiceArrayDisplay = []

var userChoiceArrayBTS = ["_", " _", " _", " _", " _", " _"]
var userChoiceArrayBTS2 = ["_", " _", " _", " _"]
var userChoiceArrayBTS3 = ["_", " _", " _", " _", " _"]
var userChoiceArrayBTS4 = ["_", " _", " _"]


var invalidEntry = "Invalid Entry"

var maguro = "maguro"
var maguroArray = ["m", " a", " g", " u", " r", " o"]
var sake = "sake"
var sakeArray = ["s", " a", " k", " e"]
var unagi = "unagi"
var sakeArray = ["u", " n", " a", " g", " i"]
var ebi = "ebi"
var sakeArray = ["e", " b", " i"]

var sushiArray = [maguro, sake, unagi, ebi]

initialize();

function initialize() {
    
    var computerChoiceMath = Math.floor(Math.random() * 0); // setting this to zero for now so it always chooses maguro
    var computerChoice = sushiArray[computerChoiceMath];
    console.log(computerChoice);

    if (computerChoice = "maguro") {
        maguroGame();
    }


}

function gameRefresh() {
    var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
    userChoiceArrayWriter.textContent = "";

    userChoiceArray.length = 0;
    userChoiceArrayDisplay.length = 0;

    userChoiceArrayBTS.length = 0;
    userChoiceArrayBTS2.length = 0;
    
    initialize();

}


function arraysMatch(arr1, arr2) {

    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    // Otherwise, return true
    return true;

}

function victoryMaguro() {
    wins++;
    var winsWriter = document.getElementById("victories");
    winsWriter.textContent = wins;

    var actualSushiWriter = document.getElementById("actualSushi");
    actualSushiWriter.textContent = maguro;

    gameRefresh();
    
}

function victorySake() {
    wins++;
    var winsWriter = document.getElementById("victories");
    winsWriter.textContent = wins;

    var actualSushiWriter = document.getElementById("actualSushi");
    actualSushiWriter.textContent = sake;

    gameRefresh();
    initialize();
}

function sakeGame() {

    userChoiceArrayBTS2 = ["_", " _", " _", " _"]

    var currentWordWriter = document.getElementById("currentWord");
    currentWordWriter.textContent = userChoiceArrayBTS2;

    document.onkeyup = function (event) {

        var userChoice = event.key;



        if (alphabet.includes(userChoice)) { // If my array alphabet includes my guess, then
            
            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArray.push(userChoice); //pushing userChoice from above onto the end of an array
            userChoiceArrayWriter.textContent = userChoiceArray;
            step1();  //enters the game 
        }

        else {
            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = invalidEntry;  // so if you DON'T put a valid letter, string with "Invalid Entry" writes into the span
        }

        function clearChoices() {
            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArrayWriter.textContent = "";

        }



        function step1() {
            if (sake.includes(userChoice) && guessesLeft !== 0) {
                step2();
            }
            else if (guessesLeft === 0) {
                losses++;
                clearChoices();
                gameRefresh();
            }
            else {
                guessesLeft--;
            }

            var guessLeftWriter = document.getElementById("guessesLeft");
            guessLeftWriter.textContent = guessesLeft



            var lossesWriter = document.getElementById("defeats");
            lossesWriter.textContent = losses;
        }

        function step2() {
            userChoiceArrayBTS2.length = 4;
            if (userChoice === "s") {
                userChoiceArrayBTS2[0] = "s";
                console.log(userChoiceArrayBTS2);
                if ((arraysMatch(userChoiceArrayBTS2, sakeArray))) {
                    victorySake();
                    gameRefresh();

                }


            }
            else if (userChoice === "a") {
                userChoiceArrayBTS2[1] = " a";
                console.log(userChoiceArrayBTS2);
                if ((arraysMatch(userChoiceArrayBTS2, sakeArray))) {
                    victorySake();
                    gameRefresh();

                }


            }
            else if (userChoice === "k") {
                userChoiceArrayBTS2[2] = " k";
                console.log(userChoiceArrayBTS2);
                if ((arraysMatch(userChoiceArrayBTS2, sakeArray))) {
                    victorySake();
                    gameRefresh();

                }


            }
            else if (userChoice === "e") {
                userChoiceArrayBTS2[3] = " e";
                console.log(userChoiceArrayBTS2);
                if ((arraysMatch(userChoiceArrayBTS2, sakeArray))) {
                    victorySake();
                    gameRefresh();

                }


            }

            var currentWordWriter = document.getElementById("currentWord");
            currentWordWriter.textContent = userChoiceArrayBTS2;

        }
    }

}


function maguroGame() {

    guessesLeft = 10;
    console.log(guessesLeft);

    guessLeftWriter = document.getElementById("guessesLeft");
    guessLeftWriter.textContent = guessesLeft;
    console.log(guessesLeft);


    userChoiceArrayBTS = ["_", " _", " _", " _", " _", " _"]

    var currentWordWriter = document.getElementById("currentWord");
    currentWordWriter.textContent = userChoiceArrayBTS;

    document.onkeyup = function (event) {

        var userChoice = event.key;



        if (alphabet.includes(userChoice)) { // If my array alphabet includes my guess, then
            
            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArray.push(userChoice); //pushing userChoice from above onto the end of an array
            userChoiceArrayWriter.textContent = userChoiceArray;
            step1();  //enters the game 
        }

        else {
            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = invalidEntry;  // so if you DON'T put a valid letter, string with "Invalid Entry" writes into the span
        }

        function clearChoices() {
            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArrayWriter.textContent = "";

        }



        function step1() {
            if (maguro.includes(userChoice) && guessesLeft !== 0) {
                guessesLeft--;
                step2();
            }
            else if (guessesLeft === 0) {
                losses++;
                clearChoices();
                gameRefresh();
            }
            else {
                guessesLeft--;
            }

            
            var guessLeftWriter = document.getElementById("guessesLeft");
            guessLeftWriter.textContent = guessesLeft;


            var lossesWriter = document.getElementById("defeats");
            lossesWriter.textContent = losses;
        }

        function step2() {
            
            userChoiceArrayBTS.length = 6;
            if (userChoice === "m") {
                userChoiceArrayBTS[0] = "m";
                console.log(userChoiceArrayBTS);
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();
                }


            }
            else if (userChoice === "a") {
                userChoiceArrayBTS[1] = " a";
                console.log(userChoiceArrayBTS);
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();
                }


            }
            else if (userChoice === "g") {
                userChoiceArrayBTS[2] = " g";
                console.log(userChoiceArrayBTS);
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();
                }


            }
            else if (userChoice === "u") {
                userChoiceArrayBTS[3] = " u";
                console.log(userChoiceArrayBTS);
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();
                }


            }
            else if (userChoice === "r") {
                userChoiceArrayBTS[4] = " r";
                console.log(userChoiceArrayBTS);
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();
                }


            }
            else if (userChoice === "o") {
                userChoiceArrayBTS[5] = " o";
                console.log(userChoiceArrayBTS);
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();
                }

            }

            var currentWordWriter = document.getElementById("currentWord");
            currentWordWriter.textContent = userChoiceArrayBTS;

        }
    }

}
