"use strict";
/*
PSEUDOCODE:
first I need to store rock paper scissor strings into array 
when I click any of the string button the array should produce 
random strings and compare who won
whoever wins i should display the message
Initial moves left 10 and it will decrement until 1 then game finished
I should also implement the total scores of the both the players
*/
const computerMoves = ["rock", "paper", "scissor"];
let timer = 10;
let computerCurrentScore = 0;
let playerCurrentScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");
const movesLeft = document.querySelector(".moves-left");
const movesLeftPara = document.querySelector(".moves-left-para");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const headingTwo = document.querySelector(".headingTwo");

rock.addEventListener("click", function () {
  //user chose rock
  timer--;
  movesLeft.innerHTML = timer;
  if (timer < 1) {
    movesLeftPara.innerHTML = "Game Finished";
    result.classList.add("hide");
    console.log(playerCurrentScore, computerCurrentScore);
    if (playerCurrentScore > computerCurrentScore)
      headingTwo.innerHTML = "Player wins!";
    else if (playerCurrentScore < computerCurrentScore)
      headingTwo.innerHTML = "Computer wins!";
    else headingTwo.innerHTML = "Draw";
  }
  const randomNumber = Math.floor(Math.random() * computerMoves.length);
  const randomMove = computerMoves[randomNumber];
  console.log(randomMove);
  if (randomMove === "rock") {
    result.innerHTML = "Tie";
  } else if (randomMove === "paper") {
    result.innerHTML = "Computer wins!";
    if (timer >= 1) {
      computerCurrentScore++;
      computerScore.innerHTML = computerCurrentScore;
    }
  } else {
    result.innerHTML = "Player wins!";
    if (timer >= 1) {
      playerCurrentScore++;
      playerScore.innerHTML = playerCurrentScore;
    }
  }
});

paper.addEventListener("click", function () {
  //user chose rock
  timer--;
  movesLeft.innerHTML = timer;
  if (timer < 1) {
    movesLeftPara.innerHTML = "Game Finished";
    result.classList.add("hide");
    console.log(playerCurrentScore, computerCurrentScore);
    if (playerCurrentScore > computerCurrentScore)
      headingTwo.innerHTML = "Player wins!";
    else if (playerCurrentScore < computerCurrentScore)
      headingTwo.innerHTML = "Computer wins!";
    else headingTwo.innerHTML = "Draw";
  }
  const randomNumber = Math.floor(Math.random() * computerMoves.length);
  const randomMove = computerMoves[randomNumber];
  console.log(randomMove);
  if (randomMove === "paper") {
    result.innerHTML = "Tie";
  } else if (randomMove === "scissor") {
    result.innerHTML = "Computer wins!";
    if (timer >= 1) {
      computerCurrentScore++;
      computerScore.innerHTML = computerCurrentScore;
    }
  } else {
    result.innerHTML = "Player wins!";
    if (timer >= 1) {
      playerCurrentScore++;
      playerScore.innerHTML = playerCurrentScore;
    }
  }
});

scissor.addEventListener("click", function () {
  //user chose rock
  timer--;
  movesLeft.innerHTML = timer;
  if (timer < 1) {
    movesLeftPara.innerHTML = "Game Finished";
    result.classList.add("hide");
    console.log(playerCurrentScore, computerCurrentScore);
    if (playerCurrentScore > computerCurrentScore)
      headingTwo.innerHTML = "Player wins!";
    else if (playerCurrentScore < computerCurrentScore)
      headingTwo.innerHTML = "Computer wins!";
    else headingTwo.innerHTML = "Draw";
  }
  const randomNumber = Math.floor(Math.random() * computerMoves.length);
  const randomMove = computerMoves[randomNumber];
  console.log(randomMove);
  if (randomMove === "scissor") {
    result.innerHTML = "Tie";
  } else if (randomMove === "rock") {
    result.innerHTML = "Computer wins!";
    if (timer >= 1) {
      computerCurrentScore++;
      computerScore.innerHTML = computerCurrentScore;
    }
  } else {
    result.innerHTML = "Player wins!";
    if (timer >= 1) {
      playerCurrentScore++;
      playerScore.innerHTML = playerCurrentScore;
    }
  }
});

// SOLUTION 1 switch statement not so good
// rock.addEventListener("click", function () {
//   const computerRandom = Math.floor(Math.random() * computerMoves.length);
//   const computerMove = computerMoves[computerRandom];
//   console.log(computerMove);
//   switch (computerMove) {
//     case "rock":
//       result.innerHTML = "Tie";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else movesLeft.innerHTML = timer;
//       break;
//     case "paper":
//       result.innerHTML = "Computer wins! 🏆";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else {
//         computerTotalScore += 1;
//         movesLeft.innerHTML = timer;
//         computerScore.textContent = computerTotalScore;
//       }

//       break;

//     case "scissor":
//       result.innerHTML = "You wins! 🏆";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else {
//         playerTotalScore += 1;
//         movesLeft.innerHTML = timer;
//         playerScore.textContent = playerTotalScore;
//       }
//   }
// });

// paper.addEventListener("click", function () {
//   const computerRandom = Math.floor(Math.random() * computerMoves.length);
//   const computerMove = computerMoves[computerRandom];
//   console.log(computerMove);
//   switch (computerMove) {
//     case "paper":
//       result.innerHTML = "Tie";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else movesLeft.innerHTML = timer;
//       break;
//     case "scissor":
//       result.innerHTML = "Computer wins! 🏆";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else {
//         computerTotalScore += 1;
//         movesLeft.innerHTML = timer;
//         computerScore.textContent = computerTotalScore;
//       }

//       break;

//     case "rock":
//       result.innerHTML = "You wins! 🏆";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else {
//         playerTotalScore += 1;
//         movesLeft.innerHTML = timer;
//         playerScore.textContent = playerTotalScore;
//       }
//   }
// });

// scissor.addEventListener("click", function () {
//   const computerRandom = Math.floor(Math.random() * computerMoves.length);
//   const computerMove = computerMoves[computerRandom];
//   console.log(computerMove);
//   switch (computerMove) {
//     case "scissor":
//       result.innerHTML = "Tie";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else movesLeft.innerHTML = timer;
//       break;
//     case "rock":
//       result.innerHTML = "Computer wins! 🏆";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else {
//         computerTotalScore += 1;
//         movesLeft.innerHTML = timer;
//         computerScore.textContent = computerTotalScore;
//       }

//       break;

//     case "paper":
//       result.innerHTML = "You wins! 🏆";
//       timer--;
//       if (timer < 1) {
//         movesLeftPara.innerHTML = "Game finished! ⏰";
//         result.classList.add("hide");
//       } else {
//         playerTotalScore += 1;
//         movesLeft.innerHTML = timer;
//         playerScore.textContent = playerTotalScore;
//       }
//   }
// });
