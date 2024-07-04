//get the names of two players
// var player1 = prompt("what is player1's name");
// var player2 = prompt("what is player2's name");

//change the name of player1 and play2
// document.getElementsById("player1")[0].textContent = "Player1: " + player1;
// document.getElementsById("player2")[0].textContent = "Player2:  "+ player2;
// console.log(document.getElementsById("player1")[0]);

function rollDice() {
  //get the random number to set the dice picture
  var diceNum1 = Math.floor(Math.random() * 6) + 1;
  var diceNum2 = Math.floor(Math.random() * 6) + 1;

  //change the src of the dice img
  document.getElementsByClassName("dice-img1")[0].src =
    "./image/dice" + diceNum1 + ".png";

  document.getElementsByClassName("dice-img2")[0].src =
    "./image/dice" + diceNum2 + ".png";

  // change h1 to who win the game
  if (diceNum1 === diceNum2) {
    document.getElementsByTagName("h1")[0].textContent = "Draw 🤝!";
  } else if (diceNum1 >= diceNum2) {
    document.getElementsByTagName("h1")[0].textContent = "🚩 Player 1 Wins !";
  } else {
    document.getElementsByTagName("h1")[0].textContent = "Player 2 🚩 Wins !";
  }
}

const button = document.querySelector("button");
button.addEventListener("click", rollDice);
