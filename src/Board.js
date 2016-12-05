"use strict";
var NUM_FILES = 8;
var Pawn = require('./Pawn');
var Rook = require('./Rook');
var Knight = require('./Knight');
var Bishop = require('./Bishop');
var Queen = require('./Queen');
var King = require('./King');


module.exports = class Board {
  constructor() {

    this.ranks =  [
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
        this.ranks[1][i] = new Pawn({rank: 1, file: i}, 'white');
        this.ranks[5][i] = new Pawn({rank: 5, file: i}, 'black');
      }
    }

    this.setRooks = () => {
      this.ranks[0][0] = new Rook({rank: 0, file: 0}, 'white');
      this.ranks[0][7] = new Rook({rank: 0, file: 7}, 'white');
      this.ranks[7][0] = new Rook({rank: 7, file: 0}, 'black');
      this.ranks[7][7] = new Rook({rank: 7, file: 7}, 'black');
    };

    this.setKnights = () => {
      this.ranks[0][1] = new Knight({rank: 0, file: 1}, 'white');
      this.ranks[0][6] = new Knight({rank: 0, file: 6}, 'white');
      this.ranks[7][1] = new Knight({rank: 7, file: 1}, 'black');
      this.ranks[7][6] = new Knight({rank: 7, file: 6}, 'black');
    };

    this.setBishops = () => {
      this.ranks[0][2] = new Bishop({rank: 0, file: 2}, 'white');
      this.ranks[0][5] = new Bishop({rank: 0, file: 5}, 'white');
      this.ranks[7][2] = new Bishop({rank: 7, file: 2}, 'black');
      this.ranks[7][5] = new Bishop({rank: 7, file: 5}, 'black');
    };

    this.setQueens = () => {
      this.ranks[0][3] = new Queen({rank: 0, file: 3}, 'white');
      this.ranks[7][3] = new Queen({rank: 7, file: 3}, 'black');
    };

    this.setKings = () => {
      this.ranks[0][4] = new King({rank: 0, file: 4}, 'white');
      this.ranks[7][4] = new King({rank: 7, file: 4}, 'black');
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
