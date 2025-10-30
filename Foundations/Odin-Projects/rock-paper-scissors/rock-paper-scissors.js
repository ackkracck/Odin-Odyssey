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
    reset.textContent = 'Reset';
    displayScore();
    displayResult("Game reset! Make your choice to start a new game.");
});

// Create and append buttons to buttons container
const rockButton = createButton('rock', '✊')
const paperButton = createButton('paper', '✋');
const scissorsButton = createButton('scissors', '✌️');

const choiceButtons = [rockButton, paperButton, scissorsButton];

choiceButtons.forEach(btn => buttons.appendChild(btn));

function createButton(id, text) {
    let btn = document.createElement("button");
    btn.id = id;
    btn.innerText = text;

    return btn;
}

// Gets human choice from button click
buttons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        humanChoice = event.target.id;
        if (humanScore < 5 && computerScore < 5) {
            playRound();
            return;
        }
        if (humanScore === 5) {
            displayResult("Congratulations! You reached 5 points and won the game!");
            disableButtons();    
        } else if (computerScore === 5) {
            displayResult("Game over! The computer reached 5 points and won the game!");
            disableButtons();
        }
        reset.textContent = 'Play again!';
    }
});

// Gets computer choice
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

function capitalizeFirstCharacter(word) {
    return word = word.charAt(0).toUpperCase() + word.substring(1, word.length);
}

// Plays a round
function playRound() {
    computerChoice = getComputerChoice();
    if (humanChoice === beats[computerChoice]) {
        humanScore++;
        displayResult(`You win! ${capitalizeFirstCharacter(humanChoice)} beats ${computerChoice}.`);
    } else if (computerChoice === beats[humanChoice]) {
        computerScore++;
        displayResult(`You lose! ${capitalizeFirstCharacter(computerChoice)} beats ${humanChoice}.`);
    } else {
        displayResult(`It's a tie! You both chose ${humanChoice}.`);
    }
    displayScore();
}