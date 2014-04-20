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
    for(var j = 0; j < board.length - 1; j++) {
      if(row[j] == null)
        return false;
      if(row[j] != row[j+1])
        return false;
    }
    return row[0];
  };

  var checkAllRows = function () {
    var row;
    var rowWinner;
    for(var i = 0; i < board.length; i++) {
      row = board[i];
      rowWinner = checkRow(row);
      if(rowWinner)
        return rowWinner;
    }
    return false;
  };

  var checkCol = function (j) {
    for(var i = 0; i < board.length - 1; i++) {
      if(board[i][j] == null)
        return false;
      if(board[i][j] != board[i+1][j])
        return false;
    }
    return board[0][j];
  };

  var checkAllCols = function () {
    var colWinner;
    for(var j = 0; j < board.length; j++){
      colWinner = checkCol(j);
      if(colWinner)
        return colWinner;
    }
    return false;
  };


  winner = checkAllRows() || checkAllCols();
  return winner;
};

Board.prototype.print = function () {
  for(var i = 0; i < this.matrix.length; i++) {
    console.log(this.matrix[i]);
  }
};

var b = new Board(3);
b.addMove(0, 0, 'O');
b.addMove(0, 1, 'O');
b.addMove(0, 2, 'X');
b.addMove(1, 0, 'X');
b.addMove(1, 1, 'O');
b.addMove(1, 2, 'X');
b.addMove(2, 2, 'X');
b.addMove(2, 0, 'X');
b.print();
var winner = b.checkForWinner();
console.log(winner);
// console.log(JSON.stringify(b.getBoard()));
