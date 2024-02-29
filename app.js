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
  if (userChoice === computerChoice) {
    result = "its a draw";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
  } else if (computerChoice === "rock" && userChoice === "scissor") {
    result = "you lose!";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose!";
  } else if (computerChoice === "paper" && userChoice === "scissor") {
    result = "you  win!";
  } else if (computerChoice === "scissor" && userChoice === "rock") {
    result = "you  win!";
  } else if (computerChoice === "scissor" && userChoice === "paper") {
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
      computerChoice = "scissor";
    }
    generateResult(userChoice, computerChoice);

    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
    resultDisplay.innerHTML = result;
  });
});
