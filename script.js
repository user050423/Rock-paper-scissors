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

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");


const displayScore = document.createElement("div");
document.body.appendChild(displayScore);

function handleClick(player) {
    const computer = getComputerChoice();
    displayScore.textContent = playRound(player, computer);
    checkWinner();
}

rockButton.addEventListener("click", () => handleClick("rock"));

paperButton.addEventListener("click", () => handleClick("paper"));

scissorsButton.addEventListener("click", () => handleClick("scissors"));



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


function checkWinner() {
    if (playerScore === 5) {
        displayScore.textContent += " Congratulations! You won the game!";
    } else if (computerScore === 5) {
        displayScore.textContent += " Sorry, you lost the game. Better luck next time!";
    }
}
