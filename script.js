const buttons = document.querySelector(".choices");
const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
let humanScore = 0;
let computerScore = 0;


rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

// function playGame() {
//     for (i = 0; i <5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);

//         console.log(humanScore + " points for you!");
//         console.log(computerScore + " points for the computer!");
//     }
//     console.log("FINAL SCORE: \n YOU: " + humanScore + " vs COMPUTER: " + computerScore + "\n GOOD GAME!")
// }



function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === "scissors") {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        } 
    }

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === "paper") {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            ++humanScore;
        } else if (computerChoice === "rock") {
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            ++computerScore;
        } 
    }
    console.log("You chose: " + humanChoice);
    console.log("The computer chose: " + computerChoice);
}

function getComputerChoice(computerChoice) {

    let num = Math.floor(Math.random() * 3) + 1;
    let choice = "";

    switch (num) {
        case 1: choice = "rock";
        break;
        case 2: choice = "paper";
        break;
        case 3: choice = "scissors";
        break;
    }
    return choice;
}



