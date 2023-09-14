let rs = require("readline-sync");

function game() {
  let intro = rs.keyIn("Press any key to start the game ", { limit: "$<a-z>" });
  let displayBoard = [
    [" ", " 1 ", "2 ", "3 ", "4 "],
    ["A", "A1", "A2", "A3", "A4"],
    ["B", "B1", "B2", "B3", "B4"],
    ["C", "C1", "C2", "C3", "C4"]
  ];
  for (let i = 0; i < displayBoard.length; i++) {
    console.log(displayBoard[i].join(" "));
  }
  let dataBoard = [...displayBoard];
  dataBoard.shift();
  dataBoard = dataBoard.map(function (arr) {
    return arr.slice(1);
  });
  console.log(dataBoard);
  let cellData = dataBoard.reduce((acc, curr) => [...acc, ...curr], []);
  console.log(cellData);
  //select a location
  function randomCell() {
    let row = Math.floor(Math.random() * cellData.length);
    return row;
  }
  //check if both variables are the same and if so make them run random gen again until they are not the same
  let cell1 = [randomCell()];
  let cell2 = [randomCell()];
  while (cell1[0] === cell2[0]) {
    cell1 = [randomCell()];
    cell2 = [randomCell()];
  }
  //create two ships
  //replace location with ship
  function Ship(name, length = 1, spot, hit = false) {
    this.name = name;
    this.length = length;
    this.spot = spot;
    this.hit = hit;
  }
  const ship1 = new Ship("Ship 1", 1, cellData[cell1[0]]);
  const ship2 = new Ship("Ship 2", 1, cellData[cell2[0]]);
  console.log([
    [ship1.name, ship1.length, ship1.spot],
    [ship2.name, ship2.length, ship2.spot],
  ]);

  //THE USER'S TURN
  let guessTarget1 = [];
  let guessTarget2 = [];
  function getStrikeLocal(theShip) {
    return rs.question(
      `Enter a location to strike like "A2". ${theShip}'s location: `
    );
  }
  function shipTarget(ship){
    return getStrikeLocal(ship.name);
  }
  let targetShip1;
  let targetShip2;
  function strikeTheShip(ship1, ship2) {
    targetShip1 = shipTarget(ship1);
    while (true) {
      if (targetShip1 === ship1.spot) {
        console.log('Hit. You have sunk a battleship. 1 ship remaining');
        break;
      } else {
        if (guessTarget1.includes(targetShip1)) {
          console.log('You have already picked this location. Miss!')
        } else {
          guessTarget1.push(targetShip1);
          console.log(guessTarget1)
          console.log('You have missed!') 
        }
        targetShip1 = shipTarget(ship1);
      }
    }
    targetShip2 = shipTarget(ship2);
    while (true) {
      if (targetShip2 === ship2.spot) {
        break;
      } else {
        if (guessTarget2.includes(targetShip2)) {
          console.log('You have already picked this location. Miss!')
        } else {
          guessTarget2.push(targetShip2);
          console.log(guessTarget2)
          console.log('You have missed!') 
        }
        targetShip2 = shipTarget(ship2);
      }
    }
  }
  strikeTheShip(ship1, ship2);
  let againOrQuit = rs.keyInYNStrict('You have destroyed all battleships. Would you like to play again?')
  
}
game();

//if target os equal to ship spot report hit and break
// use an array to store guessed cells
// make it that when ever you call the question and its a miss push the value to the guessed array 
// then check if the questions input is equal to the guessed array 