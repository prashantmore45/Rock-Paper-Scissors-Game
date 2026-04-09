"use strict";
// TYPES
// STATE 
let userScore = 0;
let compScore = 0;
// DOM ELEMENTS
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
if (!msg || !userScorePara || !compScorePara) {
    throw new Error("Required DOM elements not found");
}
// FUNCTIONS
// Get Computer Choice
const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
};
// Draw Game
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore.toString();
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore.toString();
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
// Play Game Logic
const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice !== "paper";
        }
        else if (userChoice === "paper") {
            userWin = compChoice !== "scissors";
        }
        else {
            userWin = compChoice !== "rock";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
// EVENT LISTENERS
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
