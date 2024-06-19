let playerScore = 0;
let computerScore = 0;

// Declaring variables from DOM
const buttons = document.querySelector(".choices");
const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
const gameWrapper = document.querySelector(".game-wrapper");
const playerScoreboard = document.querySelector(".player-score");
const computerScoreboard = document.querySelector(".computer-score");

// Creating elements to append 
const logContainer = document.createElement("div");
logContainer.classList.add("log");
logContainer.style = "height : 50px";
logContainer.style.textAlign = "center";

const resultList = document.createElement("ul");
logContainer.appendChild(resultList);
gameWrapper.appendChild(logContainer);




rock.addEventListener("click", () => playRound("ROCK", getComputerChoice()));
paper.addEventListener("click", () => playRound("PAPER", getComputerChoice()));
scissors.addEventListener("click", () => playRound("SCISSORS", getComputerChoice()));

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



function playRound(playerChoice, computerChoice) {

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        result = `You won! You chose ${playerChoice} and PARELORD chose ${computerChoice}!`;
        playerScore++;
    } else {
        result = `You lost! You chose ${computerChoice} and PARELORD chose ${playerChoice}...`;
        computerScore++;
    }

    appendResultsOfRound(result);

    console.log(`Player Score: ${playerScore}, PARELORD Score: ${computerScore}`);

}


function appendResultsOfRound(roundResult) {

    const resultListItem = document.createElement("li");
    resultListItem.textContent = roundResult;
    resultList.appendChild(resultListItem);

}

function addToScore(playerScore, computerScore) {
    
}


// Random computer choice
function getComputerChoice(computerChoice) {

    let num = Math.floor(Math.random() * 3) + 1;
    let choice = "";

    switch (num) {
        case 1: choice = "ROCK";
        break;
        case 2: choice = "PAPER";
        break;
        case 3: choice = "SCISSORS";
        break;
    }
    return choice;
}



