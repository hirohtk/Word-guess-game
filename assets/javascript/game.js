var wins = 0
var losses = 0
var guessesLeft = 10
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var userChoiceArray = []
var userChoiceArrayDisplay = []
var userChoiceArrayBTS= ["_","_","_","_","_","_"]


var invalidEntry = "Invalid Entry"

var maguro = "maguro"
var sake = "sake"
var unagi = "unagi"
var ebi = "ebi"

var sushiArray = ["maguro", "sake", "unagi", "ebi"]


var computerChoiceMath = Math.floor(Math.random() * 0); // setting this to zero for now so it always chooses maguro
var computerChoice = sushiArray[computerChoiceMath];
console.log(computerChoice);

console.log(computerChoice.indexOf("m"));


if (computerChoice = "maguro") {
    maguroGame();
}


function gameRefresh() {
    var computerChoiceMath = Math.floor(Math.random() * 0);
    var computerChoice = sushiArray[computerChoiceMath];
    console.log(computerChoice);

    userChoiceArray.length = 0;
    guessesLeft = 10;

}

function maguroCheck() {
    
}

function victory() {
    wins++;
    var winsWriter = document.getElementById("victories");
    winsWriter.textContent = wins;
}

function maguroGame() {

    var currentWordWriter = document.getElementById("currentWord");
    currentWordWriter.textContent = "_ _ _ _ _ _";

    document.onkeyup = function (event) {

        var userChoice = event.key;

        var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
        userChoiceArray.push(userChoice); //pushing userChoice from above onto the end of an array
        userChoiceArrayWriter.textContent = userChoiceArray;

        if (alphabet.includes(userChoice)) { // If my array alphabet includes my guess, then
            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = ""; // so if you DO put a valid letter, string with nothing writes into the span
            step1();  //enters the game 
        }

        else {
            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = invalidEntry;  // so if you DON'T put a valid letter, string with "Invalid Entry" writes into the span
        }

        function clearChoices() {
            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArrayWriter.textContent = "";
            var userChoiceWriter = document.getElementById("userChoice");
            userChoiceWriter.textContent = "";
        }

        function step1() {
            if (maguro.includes(userChoice) && guessesLeft !== 0) {
                step2();
            }
            else if (guessesLeft === 0) {
                losses++;
                gameRefresh();
                clearChoices();
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
            userChoiceArrayDisplay.length = 6;
            if (userChoice === "m") {
                userChoiceArrayDisplay[0] ="m";
                //maguroCheck();
                //if (userChoiceArrayDisplay = ["m", "a", "g", "u", "r", "o"]) {
                //    victory();
                //}
                
            }
            else if (userChoice === "a") {
                userChoiceArrayDisplay[1] = "a";
                //maguroCheck();
                //if (userChoiceArrayDisplay = ["m", "a", "g", "u", "r", "o"]) {
                //    victory();
                //}
                
            }
            else if (userChoice === "g") {
                userChoiceArrayDisplay[2] = "g";
                //maguroCheck();
                //if (userChoiceArrayDisplay = ["m", "a", "g", "u", "r", "o"]) {
                //    victory();
                //}
                
            }
            else if (userChoice === "u") {
                userChoiceArrayDisplay[3] = "u";
               //maguroCheck();
                //if (userChoiceArrayDisplay = ["m", "a", "g", "u", "r", "o"]) {
                //    victory();
                //}
                
            }
            else if (userChoice === "r") {
                userChoiceArrayDisplay[4] = "r";
                //maguroCheck();
                //if (userChoiceArrayDisplay = ["m", "a", "g", "u", "r", "o"]) {
                //    victory();
                //}
                
            }
            else if (userChoice === "o") {
                userChoiceArrayDisplay[5] = "o";
                //maguroCheck();
                //if (userChoiceArrayDisplay = ["m", "a", "g", "u", "r", "o"]) {
                //    victory();
                //}
                
            }

            var currentWordWriter = document.getElementById("currentWord");
            currentWordWriter.textContent = userChoiceArrayDisplay;


        }

        

        

    }
}


