let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


// Function to get a random choice for the computer:

const getCompChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

}

//Draw Game:

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}


// Function to play the game based on user's choice:

const playGame = (userChoice) => {

    const compChoice = getCompChoice();

    if (userChoice === compChoice) {  // If both choices are the same, it's a draw

        drawGame(); 

    } else {

        let userWin = true;

        if (userChoice === "rock") {

            // paper or scissors:

            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {

            // rock or scissors:

            userWin = compChoice === "scissors" ? false : true;

        } else {

            // rock or paper:

            userWin = compChoice === "rock" ? false : true;

        }
        
        showWinner(userWin, userChoice, compChoice);
    }


}




choices.forEach((choice) => {

  choice.addEventListener("click", () => {
    
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);

  });

});


//Display the winner:

const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {

        userScore++;
        userscorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {

        compScore++;
        compscorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

};