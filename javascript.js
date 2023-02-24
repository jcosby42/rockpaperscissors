function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) return "rock";
    else if (computerChoice === 1) return "paper";
    else if (computerChoice === 2) return "scissors";
    else return "No contest";
}

function playRound(playerChoice, computerChoice){
    let correctedPlayerChoice = playerChoice.toLowerCase();
    //make an array of options, compare input to options
    if (correctedPlayerChoice === computerChoice) return "Tie!"
    
    if (correctedPlayerChoice === "rock" && computerChoice === "scissors"
    || correctedPlayerChoice === "paper" && computerChoice === "rock"
    || correctedPlayerChoice === "scissors" && computerChoice === "paper"){
        return "You won!"
    }
    return "You lost!"
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(computerSelection, playRound(playerSelection, computerSelection));