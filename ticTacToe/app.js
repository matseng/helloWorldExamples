//board object: n x n matrix with 'X' or 'O' representing player 1 or player 2 respectively

var Board = function (n) {
  this.length = n;
  this.matrix = [];
  for(var i = 0; i < n; i++) {
    var row = [];
    for(var j = 0; j < n; j++) {
      row.push(null);
    }
    this.matrix.push(row);
  }
};

Board.prototype.getBoard = function () {
  return this.matrix;
};

Board.prototype.addMove = function (i, j, move) {
  var row = this.matrix[i];
  row[j] = move;
};

Board.prototype.checkForWinner = function () {
  var winner = null;
  var board = this.getBoard();
  
  var checkRow = function (row) {
    for(var j = 0; j < row.length - 1; j++) {
      if(row[j] == null)
        return false;
      if(row[j] != row[j+1])
        return false;
    }
    return row[0];
  };

  var checkAllRows = function (board) {
    for(var i = 0; i < board.length; i++) {
      var row = board[i];
      var rowWinner = checkRow(row);
      if(rowWinner)
        return rowWinner;
    }
    return false;
  };

  winner = checkAllRows(board);
  return winner;
};

Board.prototype.print = function () {
  for(var i = 0; i < this.length; i++) {
    console.log(this.matrix[i]);
  }
};

var b = new Board(3);
b.addMove(0, 0, 'X');
b.addMove(0, 1, 'O');
b.addMove(0, 2, 'X');
b.addMove(1, 0, 'O');
b.addMove(1, 1, 'O');
b.addMove(1, 2, 'O');
b.addMove(2, 2, 'X');
b.print();
var winner = b.checkForWinner();
console.log(winner);
// console.log(JSON.stringify(b.getBoard()));
