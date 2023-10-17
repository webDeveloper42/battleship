let rs = require("readline-sync");

function game() {
  
  function replayOrExit(){
    let againOrQuit = rs.keyInYNStrict(
      "You have destroyed all battleships. Would you like to play again?"
    );
    if (againOrQuit) {
      game();
    }
  }
  //CheatSheet
  

  //GameFunction order
  // start();
  // replayOrExit();
}
game();
