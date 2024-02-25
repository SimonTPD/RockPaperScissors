/***************************************************************************/
/* Main Body */
/***************************************************************************/
console.log("Hello! Welcome to Rock Paper Scissors in 5 rounds!");
playGame();

/***************************************************************************/
/* Functions */
/***************************************************************************/

/*
This function generates the computer's choice for the game.
It returns the choice as a string:
-"Rock"
-"Paper"
-"Scissors"
*/
function getComputerChoice() {
    //Generate random number between 0 and 2 (integer) and convert it to choice
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            console.log("Computer chooses rock!");
            return "Rock";
            break;
        case 1:
            console.log("Computer chooses paper!");
            return "Paper";
            break;
        case 2:
            console.log("Computer chooses scissors!");
            return "Scissors";    
    }
}

/*
This function takes two arguments, the player's choice and the computer's choice.
From these it determines the winner (player or computer) or if it's a draw, 
and returns 1 if the player wins, -1 if the player loses, 0 if it's a draw. 
If either choice is invalid, the function returns undefined.
*/
function playRound(playerChoice, computerChoice){
    //Convert choices to lower case
    const playerChoiceLC = playerChoice.toLowerCase();
    const computerChoiceLC = computerChoice.toLowerCase();

    //Return undefined and exit if either choice is invalid
    if (!validChoice(playerChoiceLC)){
        console.log("Invalid player's choice!");
        return undefined;
    }
    else if (!validChoice(computerChoiceLC)){
        console.log("Invalid computer's choice!");
        return undefined;        
    }

    //Check who won and return the result
    switch (playerChoiceLC){
        case "rock":
            switch (computerChoiceLC) {
                case "rock":
                    console.log("The round is a draw! Rock versus rock.");
                    return 0;
                    break;
                case "paper":
                    console.log("Player loses the round! Paper beats rock.");
                    return -1;
                    break;
                case "scissors":
                    console.log("Player wins the round! Rock beats scissors.");
                    return 1;    
            }
            break;
        case "paper":
            switch (computerChoiceLC) {
                case "rock":
                    console.log("Player wins the round! Paper beats rock.");
                    return 1;
                    break;
                case "paper":
                    console.log("The round is a draw! Paper versus paper.");
                    return 0;
                    break;
                case "scissors":
                    console.log("Player loses the round! Scissors beat paper.");
                    return -1;    
            }
            break;
        case "scissors":
            switch (computerChoiceLC) {
                case "rock":
                    console.log("Player loses the round! Rock beats scissors.");
                    return -1;
                    break;
                case "paper":
                    console.log("Player wins the round! Scissors beat paper.");
                    return 1;
                    break;
                case "scissors":
                    console.log("The round is a draw! Scissors versus scissors.");
                    return 0;    
            }
    }
}

/*
This function checks whether a choice is valid. It returns true if the choice is valid
and false if the choice is invalid.
Recognized list of choices (case-insensitive):
-"rock"
-"paper"
-"scissors"
*/
function validChoice(choice){
    return (choice == "rock") || (choice =="paper") || (choice =="scissors");
}

/*
This function plays an entier game, in 5 rounds.
It prompts the user for their choice at the beginning of each round.
It displays the result after each round.
It displays the winner at the end of the fifth round.
It returns nothing.
*/
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let roundScore;

    //Play 5 rounds
    for(let i = 0; i < 5; i++) {
        //Keep playing round while player's choice is invalid
        while ((roundScore = playRound(prompt("Enter your choice (rock, paper, or scissors)"), getComputerChoice())) == undefined);
        playerScore = (roundScore > 0) ? ++playerScore : playerScore;
        computerScore = (roundScore < 0) ? ++computerScore : computerScore;
        if (i< 4) console.log(`Current score (player/computer): ${playerScore} to ${computerScore}.`);
    }

    //Display winner and score
    if (playerScore > computerScore) console.log("Player wins the game!");
    else if (playerScore < computerScore) console.log("Player loses the game!");
    else console.log("The game is a draw!");
    console.log(`${playerScore} to ${computerScore}.`);
}