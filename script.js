function getComputerChoice() {
    const computer = Math.random();
    if (computer < 0.34) {
        return "rock";
    } else if (computer <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    } 
}

const computer = getComputerChoice();

function getPlayerChoice() {
    const player = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return player;
}

const player = getPlayerChoice();