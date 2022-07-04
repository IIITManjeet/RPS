let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
 const choices = ["r", "p", "s"];
 const randomNumber = Math.floor(Math.random() * 3);
 return choices[randomNumber];
}

function convertToWord(letter) {
 switch (letter) {
  case "r":
   return "Rock 🗿";
  case "p":
   return "Paper 📝";
  default:
   return "Scissors ✂️";
 }
}

function win(user, computer) {
 const smallUserWord = "user".fontsize(3).sup();
 const smallCompWord = "comp".fontsize(3).sup();

 const userChoice_div = document.getElementById(user);

 userScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;

 result_p.innerHTML = `${convertToWord(
  user
 )}${smallUserWord} beats ${convertToWord(
  computer
 )}${smallCompWord} ==> You win 😊!`;

 userChoice_div.classList.add("green-glow");

 setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}

function lose(user, computer) {
 const smallUserWord = "user".fontsize(3).sup();
 const smallCompWord = "comp".fontsize(3).sup();

 const userChoice_div = document.getElementById(user);

 computerScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;

 result_p.innerHTML = `${convertToWord(
  user
 )}${smallUserWord} lose to ${convertToWord(
  computer
 )}${smallCompWord} ==> You lost... 😥!`;

 userChoice_div.classList.add("red-glow");

 setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(user, computer) {
 const smallUserWord = "user".fontsize(3).sup();
 const smallCompWord = "comp".fontsize(3).sup();

 const userChoice_div = document.getElementById(user);

 result_p.innerHTML = `${convertToWord(
  user
 )}${smallUserWord} is same as ${convertToWord(
  computer
 )}${smallCompWord} ==> It is a draw!`;

 userChoice_div.classList.add("yellow-glow");

 setTimeout(() => userChoice_div.classList.remove("yellow-glow"), 500);
}

function game(userChoice) {
 const computerChoice = getComputerChoice();

 //   console.log(`user choice is ${userChoice}`);
 //   console.log(`computer choice is ${computerChoice}`);

 switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
   win(userChoice, computerChoice);
   break;
  case "rp":
  case "ps":
  case "sr":
   lose(userChoice, computerChoice);
   break;
  default:
   draw(userChoice, computerChoice);
 }
}

function main() {
 rock_div.addEventListener("click", () => game("r"));

 paper_div.addEventListener("click", () => game("p"));

 scissors_div.addEventListener("click", () => game("s"));
}

main();