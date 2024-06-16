
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === PAPER) {
        if (computerChoice === ROCK) {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === SCISSORS) {
            console.log("You lost! " + computerChoice + " beats " + userChoice);
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
            console.log("You lost! " + computerChoice + " beats " + userChoice);
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
            console.log("You lost! " + computerChoice + " beats " + userChoice);
            ++computerScore;
        } else {
            console.log("It's a draw!")
        }
    }
}

function getComputerChoice(pcChoice) {

    pcChoice = Math.floor(Math.random() * 3) + 1;

    if (pcChoice === 1) {
        return ROCK;
    } else if (pcChoice === 2) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getHumanChoice(userInput) {

    userInput = prompt("Choose between rock, paper or scissors");
    userChoice = userInput.toLocaleUpperCase();
    return userChoice;
}
