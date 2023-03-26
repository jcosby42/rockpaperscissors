let roundsPlayed = 0, playerWins = 0, computerWins = 0;

//Generate the computer's RPS choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) return "rock";
    else if (computerChoice === 1) return "paper";
    else if (computerChoice === 2) return "scissors";
    else return "No contest";
}

function playRound(playerChoice){
    //make an array of options, compare input to options
    let total = document.getElementById("total");
    let computerChoice = getComputerChoice();
    roundsPlayed++;
    document.getElementById("matchup").innerText = `${playerChoice} vs. ${computerChoice}`;
    let results;
    if (playerChoice === computerChoice) results = "Tie!";
    else if (playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "rock"
    || playerChoice === "scissors" && computerChoice === "paper"){
        results = "You won!";
        playerWins++;
    } else {
        results = "You lost!";
        computerWins++;
    }
    document.getElementById("results").innerText = results;
    total.innerText = `You've won ${playerWins} times, and the computer has won ${computerWins} times!`;
    if  (playerWins === 5) {
        total.innerText += "\nYou won!";
    }
    if  (computerWins === 5){
        total.innerText += "\nI won!";
    }

}

function game1(){
    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function(){playRound(button.id)});
    });
}

game1();