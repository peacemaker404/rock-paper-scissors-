let humanScore = 0;
let computerScore = 0;

function playGame() {
  const human = getHumanChoice().toLowerCase();
  const computer = getComputerChoice();

  function getComputerChoice() {
    const random_num = Math.random();
    if (random_num < 1 / 3) {
      return "rock";
    } else if (random_num < 2 / 3) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice() {
    const choice = prompt("Print your choice");
    return choice;
  }

  function playRound(human, computer) {
    switch (computer) {
      case "rock":
        if (human === "rock") {
          humanScore += 0.5;
          computerScore += 0.5;
          console.log("Tie");
        } else if (human === "paper") {
          humanScore += 1;
          console.log("You win!");
        } else if (human === "scissors") {
          computerScore += 1;
          console.log("You lose!");
        }
        break;
      case "paper":
        if (human === "paper") {
          humanScore += 0.5;
          computerScore += 0.5;
          console.log("Tie");
        } else if (human === "scissors") {
          humanScore += 1;
          console.log("You win!");
        } else if (human === "rock") {
          computerScore += 1;
          console.log("You lose!");
        }
        break;
      case "scissors":
        if (human === "scissors") {
          humanScore += 0.5;
          computerScore += 0.5;
          console.log("Tie");
        } else if (human === "rock") {
          humanScore += 1;
          console.log("You win!");
        } else if (human === "paper") {
          computerScore += 1;
          console.log("You lose!");
        }
        break;
    }
  }

  return playRound(human, computer);
}

for (let i = 1; i < 6; i++) {
  playGame();
}

if (humanScore > computerScore) {
  console.log("Congratulations! You win!");
} else if (computerScore > humanScore) {
  console.log("You lose!");
} else {
  console.log("Tie");
}
