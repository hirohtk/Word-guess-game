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
var unagiArray = ["u", " n", " a", " g", " i"]
var ebi = "ebi"
var ebiArray = ["e", " b", " i"]

var sushiArray = ["maguro", "sake", "unagi", "ebi"]

var currentWordWriter = document.getElementById("currentWord");


initialize();

function initialize() {

    var computerChoiceMath = Math.floor(Math.random() * 4);
    var computerChoice = sushiArray[computerChoiceMath];
    console.log(computerChoice);

    if (computerChoice === "sake") {

        sakeGame();
    }
    else if (computerChoice === "maguro") {

        maguroGame();
    }
    else if (computerChoice === "unagi") {

        unagiGame();
    }
    else if (computerChoice === "ebi") {

        ebiGame();
    }
}

function gameRefresh() {
    var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
    userChoiceArrayWriter.textContent = "";

    userChoiceArray.length = 0;
    userChoiceArrayDisplay.length = 0;

    userChoiceArrayBTS = ["_", " _", " _", " _", " _", " _"]
    userChoiceArrayBTS2 = ["_", " _", " _", " _"]
    userChoiceArrayBTS3 = ["_", " _", " _", " _", " _"]
    userChoiceArrayBTS4 = ["_", " _", " _"]

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

}

function victoryUnagi() {

    wins++;
    var winsWriter = document.getElementById("victories");
    winsWriter.textContent = wins;

    var actualSushiWriter = document.getElementById("actualSushi");
    actualSushiWriter.textContent = unagi;

    gameRefresh();

}

function victoryEbi() {

    wins++;
    var winsWriter = document.getElementById("victories");
    winsWriter.textContent = wins;

    var actualSushiWriter = document.getElementById("actualSushi");
    actualSushiWriter.textContent = ebi;

    gameRefresh();

}

function ebiGame() {
    guessesLeft = 7;
    console.log(guessesLeft);

    guessLeftWriter = document.getElementById("guessesLeft");
    guessLeftWriter.textContent = guessesLeft;


    console.log(userChoiceArrayBTS4);

    currentWordWriter.textContent = userChoiceArrayBTS4;

    document.onkeyup = function (event) {

        var userChoice = event.key;

        if (alphabet.includes(userChoice)) { // If my array alphabet includes my guess, then

            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArray.push(userChoice); //pushing userChoice from above onto the end of an array
            userChoiceArrayWriter.textContent = userChoiceArray;
            var invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = "";
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
            if (ebi.includes(userChoice) && guessesLeft !== 0) {
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
            guessLeftWriter.textContent = guessesLeft



            var lossesWriter = document.getElementById("defeats");
            lossesWriter.textContent = losses;
        }

        function step2() {
            //userChoiceArrayBTS2.length = 4;
            if (userChoice === "e") {
                userChoiceArrayBTS4[0] = "e";
                console.log(userChoiceArrayBTS4);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS4;
                if ((arraysMatch(userChoiceArrayBTS4, ebiArray))) {
                    console.log("sees victory")
                    victoryEbi();
                }


            }
            else if (userChoice === "b") {
                userChoiceArrayBTS4[1] = " b";
                console.log(userChoiceArrayBTS4);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS4;
                if ((arraysMatch(userChoiceArrayBTS4, ebiArray))) {
                    console.log("sees victory")
                    victoryEbi();
                }


            }
            else if (userChoice === "i") {
                userChoiceArrayBTS4[2] = " i";
                console.log(userChoiceArrayBTS4);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS4;
                if ((arraysMatch(userChoiceArrayBTS4, ebiArray))) {
                    console.log("sees victory")
                    victoryEbi();
                }

            }
            
        }
    }

}

function unagiGame() {

    guessesLeft = 9;
    console.log(guessesLeft);

    guessLeftWriter = document.getElementById("guessesLeft");
    guessLeftWriter.textContent = guessesLeft;


    console.log(userChoiceArrayBTS3);

    currentWordWriter.textContent = userChoiceArrayBTS3;

    document.onkeyup = function (event) {

        var userChoice = event.key;

        if (alphabet.includes(userChoice)) { // If my array alphabet includes my guess, then

            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArray.push(userChoice); //pushing userChoice from above onto the end of an array
            userChoiceArrayWriter.textContent = userChoiceArray;
            var invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = "";
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
            if (unagi.includes(userChoice) && guessesLeft !== 0) {
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
            guessLeftWriter.textContent = guessesLeft



            var lossesWriter = document.getElementById("defeats");
            lossesWriter.textContent = losses;
        }

        function step2() {
            //userChoiceArrayBTS2.length = 4;
            if (userChoice === "u") {
                userChoiceArrayBTS3[0] = "u";
                console.log(userChoiceArrayBTS3);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS3;
                if ((arraysMatch(userChoiceArrayBTS3, unagiArray))) {
                    console.log("sees victory")
                    victoryUnagi();
                }


            }
            else if (userChoice === "n") {
                userChoiceArrayBTS3[1] = " n";
                console.log(userChoiceArrayBTS3);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS3;
                if ((arraysMatch(userChoiceArrayBTS3, unagiArray))) {
                    console.log("sees victory")
                    victoryUnagi();
                }


            }
            else if (userChoice === "a") {
                userChoiceArrayBTS3[2] = " a";
                console.log(userChoiceArrayBTS3);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS3;
                if ((arraysMatch(userChoiceArrayBTS3, unagiArray))) {
                    console.log("sees victory")
                    victoryUnagi();
                }


            }
            else if (userChoice === "g") {
                userChoiceArrayBTS3[3] = " g";
                console.log(userChoiceArrayBTS3);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS3;
                if ((arraysMatch(userChoiceArrayBTS3, unagiArray))) {
                    console.log("sees victory")
                    victoryUnagi();

                }


            }
            else if (userChoice === "i") {
                userChoiceArrayBTS3[4] = " i";
                console.log(userChoiceArrayBTS3);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS3;
                if ((arraysMatch(userChoiceArrayBTS3, unagiArray))) {
                    console.log("sees victory")
                    victoryUnagi();

                }

            }
        }
    }

}

function sakeGame() {

    guessesLeft = 8;
    console.log(guessesLeft);

    guessLeftWriter = document.getElementById("guessesLeft");
    guessLeftWriter.textContent = guessesLeft;


    console.log(userChoiceArrayBTS2);

    currentWordWriter.textContent = userChoiceArrayBTS2;

    document.onkeyup = function (event) {

        var userChoice = event.key;

        if (alphabet.includes(userChoice)) { // If my array alphabet includes my guess, then

            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArray.push(userChoice); //pushing userChoice from above onto the end of an array
            userChoiceArrayWriter.textContent = userChoiceArray;
            var invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = "";
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
            guessLeftWriter.textContent = guessesLeft



            var lossesWriter = document.getElementById("defeats");
            lossesWriter.textContent = losses;
        }

        function step2() {
            //userChoiceArrayBTS2.length = 4;
            if (userChoice === "s") {
                userChoiceArrayBTS2[0] = "s";
                console.log(userChoiceArrayBTS2);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS2;
                if ((arraysMatch(userChoiceArrayBTS2, sakeArray))) {
                    console.log("sees victory")
                    victorySake();
                }


            }
            else if (userChoice === "a") {
                userChoiceArrayBTS2[1] = " a";
                console.log(userChoiceArrayBTS2);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS2;
                if ((arraysMatch(userChoiceArrayBTS2, sakeArray))) {
                    console.log("sees victory")
                    victorySake();
                }


            }
            else if (userChoice === "k") {
                userChoiceArrayBTS2[2] = " k";
                console.log(userChoiceArrayBTS2);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS2;
                if ((arraysMatch(userChoiceArrayBTS2, sakeArray))) {
                    console.log("sees victory")
                    victorySake();
                }


            }
            else if (userChoice === "e") {
                userChoiceArrayBTS2[3] = " e";
                console.log(userChoiceArrayBTS2);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS2;
                if ((arraysMatch(userChoiceArrayBTS2, sakeArray))) {
                    console.log("sees victory")
                    victorySake();

                }


            }



        }
    }

}

function maguroGame() {

    guessesLeft = 10;
    console.log(guessesLeft);

    guessLeftWriter = document.getElementById("guessesLeft");
    guessLeftWriter.textContent = guessesLeft;

    console.log(userChoiceArrayBTS);


    currentWordWriter.textContent = userChoiceArrayBTS;

    document.onkeyup = function (event) {

        var userChoice = event.key;

        if (alphabet.includes(userChoice)) { // If my array alphabet includes my guess, then

            var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
            userChoiceArray.push(userChoice); //pushing userChoice from above onto the end of an array
            userChoiceArrayWriter.textContent = userChoiceArray;
            var invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = "";
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

            //userChoiceArrayBTS.length = 6;
            if (userChoice === "m") {
                userChoiceArrayBTS[0] = "m";
                console.log(userChoiceArrayBTS);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS;
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();

                }


            }
            else if (userChoice === "a") {
                userChoiceArrayBTS[1] = " a";
                console.log(userChoiceArrayBTS);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS;
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();

                }


            }
            else if (userChoice === "g") {
                userChoiceArrayBTS[2] = " g";
                console.log(userChoiceArrayBTS);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS;
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();

                }


            }
            else if (userChoice === "u") {
                userChoiceArrayBTS[3] = " u";
                console.log(userChoiceArrayBTS);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS;
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();

                }


            }
            else if (userChoice === "r") {
                userChoiceArrayBTS[4] = " r";
                console.log(userChoiceArrayBTS);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS;
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();

                }


            }
            else if (userChoice === "o") {
                userChoiceArrayBTS[5] = " o";
                console.log(userChoiceArrayBTS);
                var currentWordWriter = document.getElementById("currentWord");
                currentWordWriter.textContent = userChoiceArrayBTS;
                if ((arraysMatch(userChoiceArrayBTS, maguroArray))) {
                    victoryMaguro();

                }

            }

            //used to have the wordWriter here, but every time the victory condition was reached, there was a bug that didn't set the right 
            //userchoicearray based on sushitype if the user won.  thought it had something to do with the fact that even if the user won, 
            // there was still a ID writing going on.  Seems like it worked

        }
    }

}
