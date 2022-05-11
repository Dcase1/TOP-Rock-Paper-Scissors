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





