const choices = ["Rock", "Paper", "Scissors"];


function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}

computerPlay();
