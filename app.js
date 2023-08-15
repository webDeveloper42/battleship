let rs = require("readline-sync");

let start, chooseLocation;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const options = alphabet + numbers;
let board = [
  [" ", "1 ", "2 ", "3 "],
  ["A", "A1", "A2", "A3"],
  ["B", "B1", "B2", "B3"],
  ["C", "C1", "C2", "C3"],
];
let displayBoard = function () {
  let display = "";
  let newDisplay = "";
  for (let i = 0; i < board.length; i++) {
    newDisplay += display + board[i].join(" ") + `\n`;
  }
  console.log(newDisplay);
};
function Ship(name, length = 1, value = "ship") {
  this.name = name;
  this.length = length;
  this.value = value;
}
const shipA = new Ship("Ship A");
const shipB = new Ship("Ship B");
function Cell(cellName, length = 1, value = "empty") {
  this.cellName = cellName;
  this.length = length;
  this.value = value;
}
let cellsData = {};
for (let i = 1; i < board.length; i++) {
  for (let x = 1; x < board[1].length; x++) {
    cellsData[`Cell_${i}_${x}`] = new Cell(board[i][x]);
  }
}
var randomKey1, randomKey2;
function getRandomProperty(obj) {
  const keys = Object.keys(obj);
  const randomIndex1 = Math.floor(Math.random() * keys.length);
  let randomIndex2 = Math.floor(Math.random() * (keys.length - 1));
  if (randomIndex2 >= randomIndex1) {
    randomIndex2++;
  }
  randomKey1 = keys[randomIndex1];
  randomKey2 = keys[randomIndex2];
  return [obj[randomKey1], obj[randomKey2]];
}

function numGen(arr) {
  let newArray = [];
  for (let i = 1; i < arr.length; i++) {
    let nestedArr = arr[i];
    let nestedArray = [];
    for (let j = 1; j < nestedArr.length; j++) {
      nestedArray.push(nestedArr[j]);
    }
    newArray.push(nestedArray);
  }
  
  let randomIndex1 = Math.floor(Math.random() * newArray.length);
  let randomIndex2 = Math.floor(Math.random() * newArray[randomIndex1].length);
  while (randomIndex1 === randomIndex2) {
    randomIndex2 = Math.floor(Math.random() * newArray[randomIndex1].length);
  }
  
  let randomProperty;
  if (Array.isArray(arr)) {
    randomProperty = newArray[randomIndex1][randomIndex2];
  } else if (typeof arr === 'object') {
    randomProperty = getRandomProperty(arr);
  }
  
  return randomProperty;
}

var cell1, cell2;
function getRandomCell() {
  let sameRow = true;
  while (sameRow) {
    cell1 = numGen(board);
    cell2 = numGen(board);
    sameRow = cell1[0] === cell2[0];
  }
  console.log([cell1, cell2]);
}

// choose two random cell and replace the value to ship
// use math.random to choose a random cell
// create a variable for the two random cells 
// change the random cells value to ship 



function choose() {
  getRandomProperty(cellsData);
  const randomValues = getRandomProperty(cellsData);
  console.log(randomValues[0].cellName, randomValues[1].cellName);
  let cellData1 = randomValues[0];
  let cellData2 = randomValues[1];
  cellData1.value = shipA.value
  cellData2.value = shipB.value
  // if (chooseLocation === randomValues[0].cellName || chooseLocation === randomValues[1].cellName)
  
}
start = rs.keyIn("Press any key to start the game", { limit: options });
getRandomCell();
displayBoard();
console.log(cellsData);
choose();
chooseLocation = rs.question("Enter a location to strike");
