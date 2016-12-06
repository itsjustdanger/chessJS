"use strict";
var NUM_FILES = 8;
var Pawn = require('./pieces/Pawn');
var Rook = require('./pieces/Rook');
var Knight = require('./pieces/Knight');
var Bishop = require('./pieces/Bishop');
var Queen = require('./pieces/Queen');
var King = require('./pieces/King');


module.exports = class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.files =  [
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null]
    ];

    this.setPawns = () => {
      var i;

      for (i = 0; i < NUM_FILES; i++) {
        this.files[1][i] = new Pawn({rank: 1, file: i}, 'white', this);
        this.files[5][i] = new Pawn({rank: 5, file: i}, 'black', this);
      }
    }

    this.setRooks = () => {
      this.files[0][0] = new Rook({rank: 0, file: 0}, 'white', this);
      this.files[0][7] = new Rook({rank: 0, file: 7}, 'white', this);
      this.files[7][0] = new Rook({rank: 7, file: 0}, 'black', this);
      this.files[7][7] = new Rook({rank: 7, file: 7}, 'black', this);
    };

    this.setKnights = () => {
      this.files[0][1] = new Knight({rank: 0, file: 1}, 'white', this);
      this.files[0][6] = new Knight({rank: 0, file: 6}, 'white', this);
      this.files[7][1] = new Knight({rank: 7, file: 1}, 'black', this);
      this.files[7][6] = new Knight({rank: 7, file: 6}, 'black', this);
    };

    this.setBishops = () => {
      this.files[0][2] = new Bishop({file: 0, rank: 2}, 'white', this);
      this.files[0][5] = new Bishop({file: 0, rank: 5}, 'white', this);
      this.files[7][2] = new Bishop({file: 7, rank: 2}, 'black', this);
      this.files[7][5] = new Bishop({file: 7, rank: 5}, 'black', this);
    };

    this.setQueens = () => {
      this.files[0][3] = new Queen({file: 0, rank: 3}, 'white', this);
      this.files[7][3] = new Queen({file: 7, rank: 3}, 'black', this);
    };

    this.setKings = () => {
      this.files[0][4] = new King({file: 0, rank: 4}, 'white', this);
      this.files[7][4] = new King({file: 7, rank: 4}, 'black', this);
    }

    this.setPieces = () => {
      this.setPawns();
      this.setRooks();
      this.setKnights();
      this.setBishops();
      this.setQueens();
      this.setKings();
    }

    this.setPieces();
  }
};
