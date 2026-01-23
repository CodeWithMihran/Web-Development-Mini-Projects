let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore1 = document.querySelector("#myScore");
const compScore1 = document.querySelector("#compScore");

const genComptChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerText = `You Win !! ${userChoice} beats ${compChoice}`;
        userScore ++;
        userScore1.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `You Lose !! ${compChoice} beats ${userChoice}`
        compScore ++;
        compScore1.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    const compChoice = genComptChoice();

    if(userChoice === compChoice){
        msg.innerText = `Draw !! ${userChoice} draws ${compChoice}`
        msg.style.backgroundColor = "grey";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;

        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false : true;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});