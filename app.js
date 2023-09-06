let rs = require("readline-sync");

let intro = rs.keyIn('Press any key to start the game ',{limit: '$<a-z>',});
let board = [
  [' ', ' 1 ', '2 ', '3 ','4 '],
  ['A', 'A1', 'A2', 'A3','A4'],
  ['B', 'B1', 'B2', 'B3','B4']
]
for(let i = 0; i < board.length;i++){
  console.log(board[i].join(' '))
}
//select two locations
//NOT DONE: make it so that the row skips the first array and the col skips the first element of the arrays after the first one
function add(type){
  if(type === 0){
    type += 1;
  }
}
function randomRow(){
  let row = Math.floor(Math.random() * board.length ) ;
  add(row);
  return row;
}
function randomCol(){
  let col;
  for(let i = 0; i < board.length; i++){
    col = Math.floor(Math.random() * board[i].length)
    add(col);
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
function Ship(name, length = 1, spot){
  this.name = name;
  this.length = length;
  this.spot = spot;
}
const ship1 = new Ship('Ship 1', 1, board[cell1[0]][cell1[1]]);
const ship2 = new Ship('Ship 2', 1, board[cell2[0]][cell2[1]]);
console.log([[ship1.name, ship1.length , ship1.spot],[ship2.name, ship2.length, ship2.spot]])