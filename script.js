const choices = ["Rock", "Paper", "Scissors"];

//Randomly chooses between Rock, Paper, Scissors

function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}


let computerSelection = computerPlay();

/* Prompts user for choice selection, then ensures correct
case for comparison purposes. */

let playerChoice = prompt("Please select Rock, Paper, or Scissors");

function correctCase(){
    let lower = playerChoice.toLowerCase();
    let first = lower[0].toUpperCase();
    let capitalized = lower.replace(playerChoice[0], first);
    return capitalized;
}

let playerSelection = correctCase(playerChoice);

/* Plays a round of the game, comparing playerSelection to
computerSelection to determine returned outcome */

function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return result = "You win! Rock beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return result = "You win! Paper beats Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return result = "You win! Scissors beats Paper!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return result = "You lose! Paper beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return result = "You lose! Scissors beats Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return result = "You lose! Rock beats Scissors!";
    } else if (playerSelection === computerSelection){
        return result = "Tie!"
    } else {
        return result = "Please select rock, paper, or scissors!"
    }
}

/* Plays five rounds of the game, keeping score and 
announcing a winner after five games */

function game(){
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++){
        playRound(playerSelection, computerPlay());
        if (result.includes("win")){
            player++;
        } else if (result.includes("lose")){
            computer++;
        }

        console.log(result);
    };

    if (player > computer){
        return `You win the game, ${player} to ${computer}!`;
    } else if (computer > player){
        return `You lose the game, ${player} to ${computer}`;
    } else if (player === computer){
        return `Tie game, ${player} to ${computer}!`;
    }

    
    
}

console.log(game());





