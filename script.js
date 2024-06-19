let humanScore = 0;
let computerScore = 0;

// Declaring variables from DOM
const buttons = document.querySelector(".choices");
const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
const gameWrapper = document.querySelector(".game-wrapper");

// Creating elements to append 
const logContainer = document.createElement("div");
logContainer.classList.add("log");
logContainer.style = "height : 50px; textAlign : center";

const resultList = document.createElement("ul");
logContainer.appendChild(resultList);
gameWrapper.appendChild(logContainer);




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
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You won! You chose ${humanChoice} and PARELORD ${computerChoice}!`;
        humanScore++;
    } else {
        result = `You lost! You chose ${computerChoice} and PARELORD ${humanChoice}...`;
        computerScore++;
    }

    appendResultsPerRound(result);
    console.log(`Player Score: ${humanScore}, PARELORD Score: ${computerScore}`);

}


function appendResultsPerRound(roundResult) {

    const resultListItem = document.createElement("li");
    resultListItem.textContent = roundResult;
    resultList.appendChild(resultListItem);

}


// Random computer choice
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



