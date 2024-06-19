
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
const scoreboard = document.querySelector(".scoreboard");

// Creating elements to append 
const logContainer = document.createElement("div");
logContainer.classList.add("log");
logContainer.style = "height : 50px";
logContainer.style.textAlign = "center";

const resultList = document.createElement("ul");
logContainer.appendChild(resultList);
gameWrapper.appendChild(logContainer);

rock.addEventListener("click", () => playRound("PAREPIEDRA", getComputerChoice()));
paper.addEventListener("click", () => playRound("PAREPAPEL", getComputerChoice()));
scissors.addEventListener("click", () => playRound("PARETIJERAS", getComputerChoice()));

function playGame() {
    for (i = 0; i <5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }
}



function playRound(playerChoice, computerChoice) {

    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === "PAREPIEDRA" && computerChoice === "PARETIJERAS") ||
        (playerChoice === "PAREPAPEL" && computerChoice === "PAREPIEDRA") ||
        (playerChoice === "PARETIJERAS" && computerChoice === "PAREPAPEL")
    ) {
        result = `You won! You chose ${playerChoice} and PARELORD chose ${computerChoice}!`;
        playerScore++;
    } else {
        result = `You lost! You chose ${computerChoice} and PARELORD chose ${playerChoice}...`;
        computerScore++;
    }

    appendResultsOfRound(result);
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;

}


function appendResultsOfRound(roundResult) {

    const resultListItem = document.createElement("li");
    resultListItem.textContent = roundResult;
    resultList.appendChild(resultListItem);

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }

}

function endGame() {

    let winner = playerScore > computerScore ? "Player" : "PARELORD";
    let loser = playerScore > computerScore ? "PARELORD" : "Player";
    
    const gameOver = document.createElement("h5");
    gameOver.textContent = `Game over! ${winner} has broken the ass of ${loser}!`
    gameOver.style.color = "#2eb774";
    gameOver.style.fontSize = "24px";
    gameOver.style.fontWeight = "600";
    logContainer.appendChild(gameOver);

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function reset() {

    playerScore = 0;
    computerScore = 0;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
    resultList.innerHTML = "";

}

// Random computer choice
function getComputerChoice(computerChoice) {

    let num = Math.floor(Math.random() * 3) + 1;
    let choice = "";

    switch (num) {
        case 1: choice = "PAREPIEDRA";
        break;
        case 2: choice = "PAREPAPEL";
        break;
        case 3: choice = "PARETIJERAS";
        break;
    }
    return choice;

}
