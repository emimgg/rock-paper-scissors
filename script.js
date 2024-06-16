
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore + " points for you!");
console.log(computerScore + " points for the computer!");




function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

    if (humanChoice === PAPER) {
        if (computerChoice === ROCK) {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === SCISSORS) {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        } else {
            console.log("It's a draw!")
        }
    }

    if (humanChoice === ROCK) {
        if (computerChoice === SCISSORS) {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === PAPER) {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        } else {
            console.log("It's a draw!")
        }
    }

    if (humanChoice === SCISSORS) {
        if (computerChoice === PAPER) {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === ROCK) {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        } else {
            console.log("It's a draw!")
        }
    }
}

function getComputerChoice(computerSelection) {

    let num = Math.floor(Math.random() * 3) + 1;

    if (num === 1) {
        computerSelection = ROCK;
        return computerSelection;
    } else if (num === 2) {
        computerSelection = PAPER;
        return computerSelection;
    } else {
        computerSelection = SCISSORS;
        return computerSelection;
    }
}

function getHumanChoice(humanChoice) {

    userInput = prompt("Choose between rock, paper or scissors");
    humanChoice = userInput.toLocaleUpperCase();
    return humanChoice;
}
