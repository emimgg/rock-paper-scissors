
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let humanScore = 0;
let computerScore = 0;



playGame();


function playGame() {
    for (i = 0; i <5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(humanScore + " points for you!");
        console.log(computerScore + " points for the computer!");
    }
    console.log("FINAL SCORE: \n YOU: " + humanScore + " vs COMPUTER: " + computerScore + "\n GOOD GAME!")
}



function playRound(humanChoice, computerChoice) {
    
    console.log("You chose: " + humanChoice);
    console.log("The computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }

    if (humanChoice === PAPER) {
        if (computerChoice === ROCK) {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === SCISSORS) {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        } 
    }

    if (humanChoice === ROCK) {
        if (computerChoice === SCISSORS) {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === PAPER) {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        }
    }

    if (humanChoice === SCISSORS) {
        if (computerChoice === PAPER) {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === ROCK) {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        } 
    }
}

function getComputerChoice() {

    let num = Math.floor(Math.random() * 3) + 1;

    if (num === 1) {
        return ROCK;
    } else if (num === 2) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getHumanChoice() {

    let humanChoice = prompt("Choose between rock, paper or scissors").toUpperCase();
    return humanChoice;
}
