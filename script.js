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
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === computerSelection){
        return "Tie!"
    } else {
        return "Please select rock, paper, or scissors!"
    }
}

console.log(playRound(playerSelection, computerSelection));



