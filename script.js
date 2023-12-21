let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');
const opponentChoice = document.querySelector('#opponent-choice');
const displayResult = document.querySelector('#display-result');


rock.addEventListener('click', () => {
    playRound("ROCK");
});

paper.addEventListener('click', () => {
    playRound("PAPER");
});

scissors.addEventListener('click', () => {
    playRound("SCISSORS");
});

const items = ["ROCK", "PAPER", "SCISSORS"];

const outcomes = {
    "ROCK": { beats: "SCISSORS", message: "You Win!" },
    "PAPER": { beats: "ROCK", message: "You Win!" },
    "SCISSORS": { beats: "PAPER", message: "You Win!" },
};

const getComputerChoice = () => items[Math.floor(Math.random() * items.length)];

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    opponentChoice.textContent = `Opponent Selected:\n${computerSelection}`;
    opponentChoice.style.whiteSpace = 'pre';

    if (playerSelection === computerSelection) {
        displayResult.textContent = "\nIt's a tie!";
    } else if (outcomes[computerSelection].beats === playerSelection) {
        computerScore += 1;
        displayResult.textContent = "\nYou Lose!";
    } else {
        playerScore += 1;
        displayResult.textContent = "\n" + outcomes[playerSelection].message;
    }

    displayComputerScore.textContent = `Enemy Score:\n${computerScore}`;
    displayComputerScore.style.whiteSpace = 'pre';

    displayPlayerScore.textContent = `Player Score:\n${playerScore}`;
    displayPlayerScore.style.whiteSpace = 'pre';
}