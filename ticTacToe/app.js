//board object: n x n matrix with 'X' or 'O' representing player 1 or player 2 respectively

window.onload = (function () {

  var Board = function (n) {
    this.length = n;
    this.matrix = null;
    this.el = document.getElementById("board");
    this.playerChecked = null;
    this.winner = null;
  };

  Board.prototype.initialize = function () {
    var n = this.length;
    this.matrix = [];
    this.togglePlayerChecked();
    this.winner = null;
    for(var i = 0; i < n; i++) {
      var row = [];
      for(var j = 0; j < n; j++) {
        row.push(null);
      }
      this.matrix.push(row);
    }
    var previousWinner = document.getElementById('winnerName');
    if(previousWinner)
      document.getElementById('declareWinner').removeChild(previousWinner);
  };

  Board.prototype.getBoard = function () {
    return this.matrix;
  };

  Board.prototype.setMove = function(i, j) {
    if(!this.winner) {
      var moves = {
        player1: 'X',
        player2: 'O'
      };
      this.playerChecked = getPlayerChecked();
      var move = moves[this.playerChecked];
      var currVal = this.getValue(i, j);
      if(!currVal){
        this.matrix[i][j] = move;
        return true;
      }
      return false;
    }
  };

  Board.prototype.getValue = function(i, j) {
    return this.matrix[i][j];
  };


  Board.prototype.render = function () {
    var board = this.getBoard();
    var elBoard = this.el;
    var length = this.length;
    var val;
    var playerChecked;

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

    playerChecked = this.playerChecked;
    var elPlayerChecked = document.getElementById(playerChecked);
    elPlayerChecked.checked = 'checked';

    if(this.checkForWinner()) {
      var parentEl = document.getElementById('declareWinner');
      var winnerEl = document.createElement('span');
      winnerEl.id = 'winnerName';
      winnerEl.textContent = "Winner: " + this.winner;
      parentEl.appendChild(winnerEl);
    }
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

    switch (winner) {
      case 'X': 
        this.winner = 'Player1';
        return 'Player1';
      case 'O': 
        this.winner = 'Player2';
        return 'Player2';
      default: 
        return false;
    }
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

  Board.prototype.togglePlayerChecked = function () {
    if(this.playerChecked == 'player1') {
      this.playerChecked = 'player2';
    } else if (!(this.playerChecked) || this.playerChecked == 'player2') {
      this.playerChecked = 'player1';
    } else
      return null;
  };

  Board.prototype.boardClicked = function(event) {
    var row = event.srcElement.parentNode.rowIndex;
    var col = event.srcElement.cellIndex;
    var newMoveBoolean = this.setMove(row, col);  //check to see if attempted move was valid
    if(newMoveBoolean) {
      this.togglePlayerChecked();
      this.print();
      this.render();
    }
  };

  var resetButtonClicked = function (board) {
    console.log('i vvas clicked: board');
    board.initialize();
    board.render();
  };
  
  Board.prototype.addBoardListeners = function () { 
    var that = this;
    var el = this.el;
    el.addEventListener("click", Board.prototype.boardClicked.bind(b), false);
    var resetButtonEl = document.getElementById('resetButton');
    resetButtonEl.addEventListener('click', function(){resetButtonClicked(that)}, false);
  };

  var b = new Board(3);
  b.initialize();
  b.addBoardListeners();
  b.print();
  b.render();

})();
