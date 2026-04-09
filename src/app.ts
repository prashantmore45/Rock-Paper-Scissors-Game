// TYPES

type Choice = "rock" | "paper" | "scissors";

// STATE 

let userScore = 0;
let compScore = 0;

// DOM ELEMENTS

const choices = document.querySelectorAll<HTMLElement>(".choice");

const msg = document.querySelector("#msg") as HTMLElement;
const userScorePara = document.querySelector("#user-score") as HTMLElement;
const compScorePara = document.querySelector("#comp-score") as HTMLElement;

if (!msg || !userScorePara || !compScorePara) {
    throw new Error("Required DOM elements not found");
}

// FUNCTIONS

// Get Computer Choice
const getCompChoice = (): Choice => {
    const options: Choice[] = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * options.length);
    return options[randomIdx];
};

// Draw Game
const drawGame = (): void => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

// Show Winner
const showWinner = (
    userWin: boolean,
    userChoice: Choice,
    compChoice: Choice
): void => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore.toString();
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore.toString();
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Play Game Logic
const playGame = (userChoice: Choice): void => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin: boolean;

        if (userChoice === "rock") {
            userWin = compChoice !== "paper";
        } else if (userChoice === "paper") {
            userWin = compChoice !== "scissors";
        } else {
            userWin = compChoice !== "rock";
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// EVENT LISTENERS

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id") as Choice;
        playGame(userChoice);
    });
});
