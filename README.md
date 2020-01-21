# Word-guess-game

This application is a purely Front-End Javascript application that pits the user against a set number of underscores that matches
the number of characters in a certain Japanese sushi name.  

The user is expected to input a character on their keyboard to make a guess, letter by letter in order to guess the 
sushi's name.  The number of incorrect guesses left is shown- if the user guesses over this limit, they "lose the game", being prompted 
another word.  

If the user guesses the word successfully, an increment is made towards their "win" count.  Similarly, every time they lose the game,
an increment is made towards their "loss" count.  

There are currently only 4 words that the user can guess, as when I made this app, Javascript was still ~2 weeks old to me.  There is another repository of mine which can be considered a refactor of this assignment that utilizes node as a runtime environment for the javascript that I use: https://github.com/hirohtk/word_guess_node.  
