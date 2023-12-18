let rs = require("readline-sync");
let theGrid = [];
let alphabet = ["A","B","C","D","E","F","G","H","I","J"];
function game() {
  function start() {
    rs.keyIn("Press any key to start the game ", { limit: "$<a-z>" });
    function createGrid(rows = 10,cols = 10){
      for (let i = 0; i < rows; i++){
        let row = [];
        theGrid.push(row);
        
        for(let k = 0; k < cols; k ++){
          let col = [];
          col.push(`${(alphabet[i]) + (k + 1)}`);
          row.push(col);
          col.join(" ");
        }
      }
    }
    createGrid();
    for(let i = 0; i < theGrid.length; i++){
      let gridToDisplay = theGrid[i];
      let strings = gridToDisplay.join(" ");
      console.log(strings);
    }
  }

  function backgroundRuns(){

  }
  //CheatSheet

  //GameFunction order
  start();
  // backgroundRuns();
  //guessing();
  // replayOrExit();
}
game();
