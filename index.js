// setting a random image to be loaded for the left Dice
var randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log (randomNumber1);
var leftDiceimg = "images/dice"+randomNumber1+".png";
console.log(leftDiceimg);
document.querySelector(".img1").setAttribute("src", leftDiceimg);

//setting a random image to be loaded for the Right Dice
var randomNumber2 = Math.floor(Math.random()*6) + 1;
console.log (randomNumber2);
var rightDiceimg = "images/dice"+randomNumber2+".png";
console.log(leftDiceimg);
document.querySelector(".img2").setAttribute("src", rightDiceimg);

//checking to see a winner
if (randomNumber1===randomNumber2) document.querySelector(".container h1").innerHTML = "🙅‍♀️Draw!";

if (randomNumber1>randomNumber2) document.querySelector(".container h1").innerHTML = "🏁Player 1 Wins!";

if (randomNumber1<randomNumber2) document.querySelector(".container h1").innerHTML = "Player 2 Wins!🏁";
