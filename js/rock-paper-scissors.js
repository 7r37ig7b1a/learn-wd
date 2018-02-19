let wins;
let loses;
document.getElementById("newgame").addEventListener("click", game);

function computerPlay(){
  let r = Math.random() * 3;
  if (r > 2) {
    return "rock";
  } else if (r > 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound() {
  let playerSelection = prompt().toLowerCase();
  let computerSelection = computerPlay();
  
  if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
    wins++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`)
  } else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
    loses++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log(`It's a draw! You both chose ${playerSelection}`);
    console.log("Replaying round...")
    playRound();
  }
}

function game(){
  wins = 0;
  loses = 0;
  console.clear();
  for (i = 0; i < 5; i++) {
    playRound();
    console.log(`Player: ${wins} | Machine: ${loses}`);
  }
  if (wins > loses) {
    console.log("Congrats! You win!")
  } else if (loses > wins) {
    console.log("You lost :(")
  } else {
    console.log("It's a tie!\nUp for a rematch?")
  }
}