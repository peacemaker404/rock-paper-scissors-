function getComputerChoice() {
  random_num = Math.random();
  if (random_num < 1 / 3) {
    return "Rock";
  } else if (random_num < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
