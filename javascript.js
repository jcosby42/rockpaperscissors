//Generate the computer's RPS choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) return "rock";
    else if (computerChoice === 1) return "paper";
    else if (computerChoice === 2) return "scissors";
    else return "No contest";
}

function getPlayerChoice(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
          return(button.id);
        });
      });      
}

//Coded 2nd
//compare player's choice to computer's choice and declare a winner
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

//consider making a separate helper function that turns random numbers into results
//programmed 3rd

function game (){
    let playerWins = 0, computerWins = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt ("rock, paper, scissors?", "rock");
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        console.log(results);
        if (results === "You won!") playerWins++;
        else if (results === "You lost!") computerWins++;
    }
    if (playerWins > computerWins) console.log("You won the match!");
    if (computerWins > playerWins) console.log("You lost the match!");
}

getPlayerChoice();
//game();