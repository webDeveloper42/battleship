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
function add(type){
  if(type === 0){
    type += 1;
  }
}
//NOT DONE PLEASE MAKE......IDEA: make a function that spits out a row and a column
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
//NOT DONE PLEASE MAKE......IDEA: check if both variables are the same and if so make them run random gen again until they are not the same
let cell1 = [randomRow(),randomCol()];
let cell2 = [randomRow(),randomCol()];
if(cell1 === cell2 && cell2 === cell1){
  cell1;
  cell2;
}
console.log(cell1 ,cell2);
//create two ships
function Ship(name, length = 1){
  this.name = name;
  this.length = length;
}
const ship1 = new Ship('Ship 1');
const ship2 = new Ship('Ship 2');
console.log([[ship1.name, ship1.length],[ship2.name, ship2.length]])
//replace location with ship