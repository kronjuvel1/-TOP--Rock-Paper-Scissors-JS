let playerScore = 0;
let computerScore = 0;

const items = ["ROCK", "PAPER", "SCISSORS"];

const outcomes = {
    "ROCK": { beats: "SCISSORS", message: "You Win!" },
    "PAPER": { beats: "ROCK", message: "You Win!" },
    "SCISSORS": { beats: "PAPER", message: "You Win!" },
};

const getComputerChoice = () => items[Math.floor(Math.random() * items.length)].toUpperCase();

function round() {
    const playerSelection = prompt("Rock, Paper, or Scissors? ").toUpperCase();
    const computerSelection = getComputerChoice();

    if (items.includes(playerSelection)) {
        alert("Opponent selected: " + computerSelection);

        if (playerSelection === computerSelection) {
            alert("It's a tie!")
            alert("Your score: " + playerScore + "\nOpponent score: " + computerScore);
        } else if (outcomes[computerSelection].beats === playerSelection) {
            computerScore += 1;
            alert("You Lose!");
            alert("Your score: " + playerScore + "\nOpponent score: " + computerScore);
        } else {
            playerScore += 1;
            alert(outcomes[playerSelection].message);
            alert("Your score: " + playerScore + "\nOpponent score: " + computerScore);
        }
    } else {
        alert("Invalid Input!");
    }
}

function game() {
    while (computerScore < 5 && playerScore < 5) {
        round();
    }

    if (playerScore == 5) {
        alert("Player wins!");
    } else {
        alert("Opponent wins!");
    }
}

game();