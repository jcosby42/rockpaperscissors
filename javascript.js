//Generate the computer's RPS choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) return "rock";
    else if (computerChoice === 1) return "paper";
    else if (computerChoice === 2) return "scissors";
    else return "No contest";
}

//put this in game function instead
/*function getPlayerChoice(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
          return(button.id);
        });
      });      
}*/

//compare player's choice to computer's choice and declare a winner
function playRound(playerChoice, computerChoice){
    //let correctedPlayerChoice = playerChoice.toLowerCase();
    //make an array of options, compare input to options
    if (playerChoice === computerChoice) console.log("Tie!")
    if (playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "rock"
    || playerChoice === "scissors" && computerChoice === "paper"){
        console.log("You won!");
    }
    console.log("You lost!");
}

function game (){
    let playerWins = 0, computerWins = 0;
    let compChoice = getComputerChoice();
    console.log(compChoice);
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function(){console.log(button.id)}/*playRound(button.id, compChoice)*/); 
        });
};  



/*    let results = playRound(playerSelection, computerSelection);
    console.log(results);
    if (results === "You won!") playerWins++;
    else if (results === "You lost!") computerWins++;
    if (playerWins > computerWins) console.log("You won the match!");
    if (computerWins > playerWins) console.log("You lost the match!");*/

game();