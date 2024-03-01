/***************************************************************************/
/* Main Body */
/***************************************************************************/
let paraChoice = document.querySelector('div.game-info #choice');
let paraRound = document.querySelector('div.game-info #round');
let paraScore = document.querySelector('div.game-info #score');
let paraWinner = document.querySelector('div.game-info #winner');
let buttonsChoice = [document.querySelector('div.buttons #btn-rock'),
    document.querySelector('div.buttons #btn-paper'),
    document.querySelector('div.buttons #btn-scissors')
];
let buttonNewGame = document.querySelector('#btn-new-game');

let round = 1;
let playerScore = 0;
let computerScore = 0;

paraRound.textContent = `Round: ${round}/5`;
paraScore.textContent = `Score: Player---${playerScore} to ${computerScore}---Computer`;


buttonsChoice.forEach((button) =>{
    button.addEventListener('click', (e) => {
        if(round <= 5){
            paraChoice.textContent = `Player---${e.target.textContent} vs`;

            let roundScore = playRound(e.target.textContent, getComputerChoice());
            updateScore(roundScore);
        }
        else{
            alert('The game is over! Click the "New Game" button to start a new one.');
        }
    })
});

buttonNewGame.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    round = 1;
    paraChoice.textContent = 'Player ______ vs ______ Computer';
    paraRound.textContent = `Round: ${round}/5`;
    paraScore.textContent = `Score: Player---${playerScore} to ${computerScore}---Computer`;
    paraWinner.textContent = 'Winner:';
});

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


function playRound(playerChoice, computerChoice){
    const playerChoiceLC = playerChoice.toLowerCase();
    const computerChoiceLC = computerChoice.toLowerCase();

    paraChoice.textContent += ` ${computerChoice}---Computer`;

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


function updateScore(roundScore){
    playerScore = (roundScore > 0) ? ++playerScore : playerScore;
    computerScore = (roundScore < 0) ? ++computerScore : computerScore;

    if (round == 5){
        paraWinner.textContent = `Winner: 
            ${(playerScore > computerScore) ? 'Player' :
            (playerScore < computerScore) ? 'Computer' : 'Draw'}`;
    }

    round++;

    if (round <= 5) paraRound.textContent = `Round: ${round}/5`;
    paraScore.textContent = `Score: Player---${playerScore} to ${computerScore}---Computer`;
}