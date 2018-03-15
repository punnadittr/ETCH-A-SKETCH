const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');
const clearButton = document.querySelector('.clear');
const canvasSize = document.querySelector(".newSize");
const randomButton = document.querySelector('.randomColor');
let userInputSize = 50;
let colors = "black";
let isRandom;
// random int function
function getRanInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// create and append divs to the canvas
function createCasvas() {
  let square;
  let i;
  for (i = 0; i < (userInputSize*userInputSize); i++) {
    square = document.createElement('div');
    square.classList.add('insideSquares');
    canvas.appendChild(square);
    canvas.style.gridTemplateColumns = `repeat(${userInputSize}, 1fr)`;
  }
}
// add event listener to every div
function draw() {
  let l;
  for (l = 0; l < squares.length; l++) {
    squares[l].style.backgroundColor = "white";
    squares[l].addEventListener('mouseover', function(e) {
      oneSquare = e.target;
      if (isRandom != true){
        oneSquare.style.backgroundColor = "black";
      }
      else {
        oneSquare.style.backgroundColor = randomColor();
      }
    })
  }
}
// return divs to white
function clearCanvas() {
  let num;
  for (num = 0; num < squares.length; num++) {
    squares[num].style.backgroundColor = "white";
    isRandom = false
  }
}
// gets a random rgb value
function randomColor() {
  let red;
  let green;
  let blue;
  red = getRanInt(0, 255);
  green = getRanInt(0, 255);
  blue = getRanInt(0, 255);
  return "rgb("+ red + ", " + green +", " + blue +")";
}
//buttons and their roles
randomButton.addEventListener('click', function(){isRandom = true;});
clearButton.addEventListener('click', clearCanvas);
canvasSize.addEventListener('click', function() {
  do {
    userInputSize = prompt("Enter 4-90");
  }
  while (userInputSize < 4 || userInputSize > 90 || isNaN(userInputSize));
  //remove the all the divs
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
}
  // create divs again
  createCasvas();
  // new squares
  squares = Array.from(document.querySelectorAll('.insideSquares'));
  draw();
})
//executes the program (default value)
createCasvas();
let squares = Array.from(document.querySelectorAll('.insideSquares'));
draw();
