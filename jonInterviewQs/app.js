// 1 1 0 
// 0 1 0
// 1 0 1

// - Live cell with <2 live neigh dies
// - Live cell with 2 or 3 live neigh lives
// - Live cell with >3 live neight dies
// - A dead cell with exactly 3 lives neigh become live

// - iterate over all cells
// - check each cell for rules above
//   - check for inbounds
//   - count live neighbors
//   - state of current current cell
//   - don't mutate initial board, return a new board
//   - board array or arrays

var board = function(arrOfarrs) {
  this.board = arrOfarrs;
};

board.prototype.gameOfLife = function() {
  var newBoard ;
  var countNeighbors;
  this.forEach(function(i, j) {
    countNeighbors = this.countLiveNeighbors(i, j);
    if(countNeighbors < 2){
      newBoard[i][j] = 0;
    }
  })

};

board.prototype.forEach = function() {

};

board.prototype.countLiveNeighbors = function(x, y) {
  var count = 0;
  for(var i = x - 1; i <= x + 1; i++) {
    for(var j = y - 1; j <= j + 1 ; j++) {
      if(i !== x && j !== y && isInBounds(i, j) ){
        count += this.board[i][j];
      }
    }
  }
  return count;
};

function iterateOverNeighbors() {

}

function isInBounds = function() {

};



