const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");
const resetBtn = document.getElementById("resetBtn");
const results = document.getElementById("results");
const choices = document.getElementById("choices");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const playerContainer = document.getElementById("playerContainer");
const compContainer = document.getElementById("compContainer");
const playerScoreElement = document.getElementById("playerScore");
const compScoreElement = document.getElementById("compScore");

let playerScore = 0;
let compScore = 0;

function computersChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}


function hasUserWon(player, computer){
    return (
        (player === "rock" && computer === "scissors")||
        (player === "paper" && computer === "rock")||
        (player === "scissors" && computer === "paper")
    )
}

function changeHands(user, comp){
    if (user === "rock"){
        playerHand.innerHTML = "✊🏼";
    }else if (user === "paper"){
        playerHand.innerHTML = "✋🏼";
    }else if (user === "scissors") {
        playerHand.innerHTML = "✌🏼";
    }

    if (comp === "rock"){
        computerHand.innerHTML = "✊🏼";
    }else if (comp === "paper"){
        computerHand.innerHTML = "✋🏼";
    }else if (comp === "scissors") {
        computerHand.innerHTML = "✌🏼";
    }
}

function gamePlay(userChoice) {
    const compChoice = computersChoice();

    document.querySelectorAll(".choiceBtn").forEach(btn => btn.disabled = true);

    playerHand.innerHTML = "✊🏼";
    computerHand.innerHTML = "✊🏼";

    playerContainer.classList.add("playerAnimate");
    compContainer.classList.add("compAnimate");

    setTimeout(() => {
        results.innerHTML = "Rock"
    }, 300);
    setTimeout(() => {
        results.innerHTML = "Paper"
    }, 800);
    setTimeout(() => {
        results.innerHTML = "Scissors"
    }, 1300); 
    

    setTimeout(() => {
        changeHands(userChoice, compChoice);
    }, 1700);


    setTimeout(() => {
        results.innerHTML = "SHOOT!"
    }, 1800);


    setTimeout(() => {
        playerContainer.classList.remove("playerAnimate");
        compContainer.classList.remove("compAnimate");
    }, 2000);


    setTimeout(() => {
        results.innerHTML = ""
        if (hasUserWon(userChoice, compChoice)){
            playerScore++;
            playerScoreElement.innerHTML = playerScore;
            //results.innerHTML = `${userChoice} beats ${compChoice}!<br>Great Job!`

            if (playerScore === 3) {
                results.innerHTML = "YOU WON!!"
                stopGame();
            } else if (compScore === 3){
                results.innerHTML = "YOU LOST!! 😥"
                stopGame();
            }
        } else if (userChoice === compChoice){
            //results.innerHTML = `It's a tie.<br>try again! on three...`
        }else {
            compScore++;
            compScoreElement.innerHTML = compScore;
            //results.innerHTML = `${compChoice} beats ${userChoice}!<br>That stinks!`
            
            if (playerScore === 3) {
                results.innerHTML = "YOU WON!!"
                stopGame();
            } else if (compScore === 3){
                results.innerHTML = "YOU LOST!! 😥"
                stopGame();
            }
        }

        document.querySelectorAll(".choiceBtn").forEach(btn => btn.disabled = false);

    }, 2300);
}

function stopGame() {
    choices.style.display = "none"
    resetBtn.style.display = "block"
}

function reset() {
    playerHand.innerHTML = "✊🏼";
    computerHand.innerHTML = "✊🏼";
    choices.style.display = "block";
    resetBtn.style.display = "none";
    results.innerHTML = "";
    playerScore = 0;
    compScore = 0;
    playerScoreElement.innerHTML = playerScore;
    compScoreElement.innerHTML = compScore;
}


rockBtn.addEventListener("click", function(){
    const userChoice = "rock";
    gamePlay(userChoice)
});
paperBtn.addEventListener("click", function(){
    const userChoice = "paper";
    gamePlay(userChoice)
});
scissorsBtn.addEventListener("click", function(){
    const userChoice = "scissors";
    gamePlay(userChoice)
});


resetBtn.addEventListener("click", function(){
    reset();
});
