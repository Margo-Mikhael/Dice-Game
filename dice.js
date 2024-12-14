let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");

dice1.src = "./images/dice" + randomNumber1 + ".png";
dice2.src = "./images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
  document.getElementById("h1").innerHTML = " 🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.getElementById("h1").innerHTML = " 🚩Player 2 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.getElementById("h1").innerHTML = "Draw !!";
}
