// Configs
const gameContent = document.getElementById('game-content');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');

// Game variables
let humanChoice;
let computerChoice;
let computerScore = 0;
let humanScore = 0;

// Defines what beats what
const beats = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
};

// Display the result of the round
function displayResult(message) {
    resultDisplay.textContent = message;
}

// Display score
function displayScore () {
    scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

// Buttons config
var buttons = document.createElement('div');
buttons.innerHTML = `
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
`;
gameContent.appendChild(buttons);

// Gets human choice from button click
buttons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        humanChoice = event.target.id;
        if (humanScore < 5 && computerScore < 5) {
            playRound();
            if (humanScore === 5) {
                displayResult("Congratulations! You reached 5 points and won the game!");
            } else if (computerScore === 5) {
                displayResult("Game over! The computer reached 5 points and won the game!");
            }
        }
    }
});

// Gets computer choice
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

// Plays a round
function playRound() {
    computerChoice = getComputerChoice();
    if (humanChoice === beats[computerChoice]) {
        humanScore++;
        displayResult(`You win! ${humanChoice} beats ${computerChoice}.`);
        displayScore();
    } else if (computerChoice === beats[humanChoice]) {
        computerScore++;
        displayResult(`You lose! ${computerChoice} beats ${humanChoice}.`);
        displayScore();
    } else {
        displayResult(`It's a tie! You both chose ${humanChoice}.`);
    }
}