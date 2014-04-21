//board object: n x n matrix with 'X' or 'O' representing player 1 or player 2 respectively

window.onload = (function () {

  var Board = function (n) {
    this.length = n;
    this.matrix = [];
    this.el = document.getElementById("board");
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

  Board.prototype.addMoveToBoard = function (i, j, move) {
    var row = this.matrix[i];
    row[j] = move;
  };

  Board.prototype.render = function () {
    var board = this.getBoard();
    var elBoard = this.el;
    var length = this.length;
    var val;

    var setBoardCell = function(i, j, val) {
      var row = elBoard.rows[i];
      var cell = row.cells[j];
      cell.textContent = val;
    };

    for(var i = 0; i < length; i++) {
      for(var j = 0; j < length; j++) {
        val = board[i][j];
        setBoardCell(i, j, val);
      }  
    }
  }

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

    var checkDiagPos = function() {
      for(var i = 0; i < board.length - 1; i++) {
        if(!board[i][i])
          return false;
        if(board[i][i] != board[i+1][i+1])
          return false;
      }
      return board[0][0];
    };

    var checkDiagNeg= function() {
      for(var dx = 0; dx < board.length - 1; dx++) {
        if(!board[board.length - 1 - dx][dx])
          return false;
        if(board[board.length - 1 - dx][dx] != board[board.length - 1 - dx - 1][dx+1])
          return false;
      }
      return board[board.length - 1][0];
    };

    winner = checkAllRows() || checkAllCols() || checkDiagPos() || checkDiagNeg();
    return winner;
  };  //END of checkForWinner

  Board.prototype.print = function () {
    for(var i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i]);
    }
  };

  var getPlayerChecked = function () {
    var elPlayer1 = document.getElementById("player1");
    var elPlayer2 = document.getElementById("player2");
    if(elPlayer1.checked)
      return 'player1';
    if(elPlayer2.checked)
      return 'player2';
    return null;
  };

  Board.prototype.getRowColClicked = function(event) {
    console.log(event.srcElement);
    var row = event.srcElement.parentNode.rowIndex;
    var col = event.srcElement.cellIndex;
    var playerChecked = getPlayerChecked();
    if(playerChecked == 'player1')
      this.addMoveToBoard(row, col, 'X');
    else if (playerChecked == 'player2')
      this.addMoveToBoard(row, col, 'O');
    this.print();
    this.render();
    console.log(b.matrix);
  };
  
  Board.prototype.addBoardListeners = function () { 
    var el = this.el;
    el.addEventListener("click", Board.prototype.getRowColClicked.bind(b), false);
  };

  var b = new Board(3);
  b.addBoardListeners();

  // b.addMoveToBoard(0, 0, 'O');
  // b.addMoveToBoard(0, 1, 'O');
  // b.addMoveToBoard(0, 2, 'X');
  // b.addMoveToBoard(1, 0, 'X');
  // b.addMoveToBoard(1, 1, 'X');
  // b.addMoveToBoard(1, 2, 'O');
  // b.addMoveToBoard(2, 2, 'O');
  // b.addMoveToBoard(2, 0, 'X');
  b.print();
  b.render();
  var winner = b.checkForWinner();
  console.log(winner);

})();
