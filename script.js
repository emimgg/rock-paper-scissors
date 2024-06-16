
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let humanScore = 0;
let computerScore = 0;






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

 console.log(getComputerChoice())


 function getHumanChoice(userInput) {

    userInput = prompt("Choose between rock, paper or scissors");
    userChoice = userInput.toLocaleUpperCase();
    return userChoice;
 }

 console.log(getHumanChoice());