
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let userInput = prompt("Choose between rock, paper or scissors")
let computerAnswer = Math.floor(Math.random() * 3) + 1;
let enemyChoice;

if (computerAnswer = 1) {
    enemyChoice = ROCK;
} else if (computerAnswer = 2) {
    enemyChoice = PAPER;
} else {
    enemyChoice = SCISSORS;
}

console.log(enemyChoice);
