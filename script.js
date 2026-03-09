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

function getPlayerChoice() {
    const player = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return player;
}



let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
        playerScore++;      
        return `You win! ${player} beats ${computer}`;
    } else {
        computerScore++;
        return `You lose! ${computer} beats ${player}`;
    }
}

function playGame() {
   
    for (let i = 0; i < 5; i++) {
        const computer = getComputerChoice();
        const player = getPlayerChoice();

        console.log(playRound(player, computer));
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    }

    if (playerScore === 5) {
        console.log("Congratulations! You won the game!");  
    } else {
        console.log("Sorry, you lost the game. Better luck next time!");    
    }
}

playGame();