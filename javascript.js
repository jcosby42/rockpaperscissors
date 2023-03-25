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
}

//TODO: fix playerWins and computerWins counter. Something's resetting it to 0 after every match
//Per console, the counters are updating, the display either isn't updating or keeps displaying to 0
//Try moving it back into the "play round" function? At that point the whole game app is 1 big function
//then i could pull the global variables back into the function
function game1(){
    
    let total = document.getElementById("total");
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function(){playRound(button.id)});
    });
    total.innerText = `You've won ${playerWins} times, and the computer has won ${computerWins} times!`;
    if  (playerWins === 5) {
        total.innerText += "\nYou won!";
    }
    if  (computerWins === 5){
        total.innerText += "\nI won!";
    }
}


/*    let results = playRound(playerSelection, computerSelection);
    console.log(results);
    if (results === "You won!") playerWins++;
    else if (results === "You lost!") computerWins++;
    if (playerWins > computerWins) console.log("You won the match!");
    if (computerWins > playerWins) console.log("You lost the match!");*/

game1();