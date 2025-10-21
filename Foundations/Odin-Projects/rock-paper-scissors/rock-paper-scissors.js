// Configs
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');
const buttons = document.getElementById('buttons');
const reset = document.getElementById('reset');

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

// Display score
function displayScore() {
    scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

// Display the result of the round
function displayResult(message) {
    resultDisplay.textContent = message;
}

// Disable buttons
function disableButtons() {
    buttons.querySelectorAll('button').forEach(btn => btn.disabled = true);
}

// Reset game
reset.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    buttons.querySelectorAll('button').forEach(btn => btn.disabled = false);
    displayScore();
    displayResult("Game reset! Make your choice to start a new game.");
});

// Buttons config
buttons.innerHTML = `
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
`;

// Gets human choice from button click
buttons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        humanChoice = event.target.id;
        if (humanScore < 5 && computerScore < 5) {
            playRound();
        }
        if (humanScore === 5) {
            displayResult("Congratulations! You reached 5 points and won the game!");
            disableButtons();    
        } else if (computerScore === 5) {
            displayResult("Game over! The computer reached 5 points and won the game!");
            disableButtons();
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
    } else if (computerChoice === beats[humanChoice]) {
        computerScore++;
        displayResult(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        displayResult(`It's a tie! You both chose ${humanChoice}.`);
    }
    displayScore();
}