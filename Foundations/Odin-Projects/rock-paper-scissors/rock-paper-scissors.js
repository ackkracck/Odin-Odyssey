let computerScore = 0;
let humanScore = 0;

const beats = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
};

function displayScore() {
    console.log(`You ${humanScore}, Computer: ${computerScore}`);
}

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?: ").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}`);

    if (beats[computerChoice] === humanChoice) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        displayScore();
    } else if (beats[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        displayScore();
    } else {
        console.log("Tie!");
        displayScore();
    }
}

while (humanScore < 5 && computerScore < 5) {
    playRound();
}

if (humanScore > computerScore) {
    console.log(`You win the match! ;)`);
} else if (humanScore < computerScore) {
    console.log('You lose the match! ;(');
} else {
    console.log('Well, well well... I guess you\'re not so bad, its a tie.')
}
