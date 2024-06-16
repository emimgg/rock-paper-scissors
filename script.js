
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

// let userInput = prompt("Choose between rock, paper or scissors");
// let userChoice = userInput.toLocaleUpperCase();

// COMPUTER CHOICE

// if (computerAnswer === 1) {
//     enemyChoice = ROCK;
// } else if (computerAnswer === 2) {
//     enemyChoice = PAPER;
// } else {
//     enemyChoice = SCISSORS;
// }

// USER CHOICE

// if (userChoice === ROCK) {
//     if (enemyChoice === PAPER) {
//         console.log("You've lost!");
//     } else if (enemyChoice === SCISSORS) {
//         console.log("You've won!");
//     } else {
//         console.log("Draw!");
//     }
// }

//  if (userChoice === PAPER) {
//     if (enemyChoice === SCISSORS) {
//         console.log("You've lost!");
//     } else if (enemyChoice === ROCK) {
//         console.log("You've won!");
//     } else {
//         console.log("Draw!");
//     }
//  }

//  if (userChoice === SCISSORS) {
//     if (enemyChoice === ROCK) {
//         console.log("You've lost!");
//     } else if (enemyChoice === PAPER) {
//         console.log("You've won!");
//     } else {
//         console.log("Draw!")
//     }
//  }

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