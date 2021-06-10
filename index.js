let randomNumber1 = "dice" + (Math.floor(Math.random() * 6) + 1);
let randomNumber2 = "dice" + (Math.floor(Math.random() * 6) + 1);
document
  .querySelector(".img1")
  .setAttribute("src", "images/" + randomNumber1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "images/" + randomNumber2 + ".png");
