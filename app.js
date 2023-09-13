let rs = require("readline-sync");

let intro = rs.keyIn('Press any key to start the game ',{limit: '$<a-z>'});
let displayBoard = [
  [' ', ' 1 ', '2 ', '3 ','4 '],
  ['A', 'A1', 'A2', 'A3','A4'],
  ['B', 'B1', 'B2', 'B3','B4']
]
for(let i = 0; i < displayBoard.length;i++){
  console.log(displayBoard[i].join(' '))
}
let dataBoard = [...displayBoard]
dataBoard.shift();
dataBoard = dataBoard.map(function(arr){
  return arr.slice(1)
});
console.log(dataBoard);
let cellData;
for(let i = 0; i < dataBoard.length; i++){
  for(let x = 0; x < dataBoard[i].length; x++){
    cellData = dataBoard[i][x];
    console.log(cellData);
  }
}
//select two locations
//NOT DONE: make it so that the row skips the first array and the col skips the first element of the arrays after the first one
function randomRow(){
  let row = Math.floor(Math.random() * dataBoard.length ) ;
  return row;
}
function randomCol(){
  let col;
  for(let i = 0; i < dataBoard.length; i++){
    col = Math.floor(Math.random() * dataBoard[i].length)
  }
  return col;
}
//check if both variables are the same and if so make them run random gen again until they are not the same
let cell1 = [randomRow(),randomCol()];
let cell2 = [randomRow(),randomCol()];
while(cell1[0] === cell2[0] && cell1[1] === cell2[1]){
    cell1 = [randomRow(),randomCol()];
    cell2 = [randomRow(),randomCol()];
}
//create two ships
//replace location with ship
function Ship(name, length = 1, spot, hit = false){
  this.name = name;
  this.length = length;
  this.spot = spot;
  this.hit = hit;
}
const ship1 = new Ship('Ship 1', 1, dataBoard[cell1[0]][cell1[1]]);
const ship2 = new Ship('Ship 2', 1, dataBoard[cell2[0]][cell2[1]]);
console.log([
  [ship1.name, ship1.length , ship1.spot],
  [ship2.name, ship2.length, ship2.spot]
])
//THE USER'S TURN
function getStrikeLocal(theShip){
  rs.question(`Enter a location to strike like "A2". ${theShip}'s location: ` )
}
getStrikeLocal(ship1.name);


//Link two ships to the cell data


///Check see if work
//if the answer to the question is false repeat the question
//if the question's answer does not equal to ship one's spot repeat the question
