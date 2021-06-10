let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDice1 = "dice" + randomNumber1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDice2 = "dice" + randomNumber2;

// Change h1 who won and draw the match
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = " 🚩 Draw 🚩";
}

// to change the dice
document
  .querySelector(".img1")
  .setAttribute("src", "images/" + randomDice1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "images/" + randomDice2 + ".png");
