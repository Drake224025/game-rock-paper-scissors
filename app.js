const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice, computerChoice, randomNumber, result;

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  return randomNumber;
};

const generateResult = (userChoice, computerChoice) => {
  // Define possible choices and their relationships
  const choices = {
    rock: { beats: "scissors" },
    paper: { beats: "rock" },
    scissors: { beats: "paper" },
  };

  // Determine the winner
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (choices[userChoice].beats === computerChoice) {
    result = "you  win!";
  } else {
    result = "you lose!";
  }
};

possibleChoices.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    userChoice = e.target.id;
    randomNumber = generateComputerChoice();

    if (randomNumber === 0) {
      computerChoice = "rock";
    } else if (randomNumber === 1) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    generateResult(userChoice, computerChoice);

    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
    resultDisplay.innerHTML = result;
  });
});
