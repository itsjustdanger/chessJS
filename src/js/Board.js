"use strict";

var Pawn = require('./pieces/Pawn');
var Rook = require('./pieces/Rook');
var Knight = require('./pieces/Knight');
var Bishop = require('./pieces/Bishop');
var Queen = require('./pieces/Queen');
var King = require('./pieces/King');
var Utils = require('./Utils');

var NUM_FILES = 8;


module.exports = class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;

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

    this.checkLegalMove = (algOrigin, algDest) => {
      var piece = this.getPiece(algOrigin);
      if (piece) {
        return true;
      }

      return false;
    };


    this.move = (algOrigin, algDest) => {
      var piece;

      if (!this.checkLegalMove(algOrigin, algDest)) {
        return false;
      }

      piece = this.getPiece(algOrigin);

      this.setPiece(algDest, piece);
      this.setPiece(algOrigin, null);

      if (!piece.hasMoved) {
        piece.hasMoved = true;
      }

      return true;
    };


    this.getPiece = (alg) => {
      var pos = Utils.toCoords(alg);
      var piece;

      if (Utils.inBounds(pos)) {
        piece = this.ranks[pos.rank][pos.file];
        return piece;
      }

      return false;
    };


    this.isEmpty = (alg) => {
      return (!this.getPiece(alg));
    };


    this.setPiece = (algDest, piece) => {
      var pos = Utils.toCoords(algDest);

      this.ranks[pos.rank][pos.file] = piece;

      if (piece) {
        piece.pos = pos;
      }
    };


    this.setPawns = () => {
      var i;

      for (i = 0; i < NUM_FILES; i++) {
        this.ranks[1][i] = new Pawn({rank: 1, file: i}, 'white', this);
        this.ranks[6][i] = new Pawn({rank: 6, file: i}, 'black', this);
      }
    };

    this.setRooks = () => {
      this.ranks[0][0] = new Rook({rank: 0, file: 0}, 'white', this);
      this.ranks[0][7] = new Rook({rank: 0, file: 7}, 'white', this);
      this.ranks[7][0] = new Rook({rank: 7, file: 0}, 'black', this);
      this.ranks[7][7] = new Rook({rank: 7, file: 7}, 'black', this);
    };

    this.setKnights = () => {
      this.ranks[0][1] = new Knight({rank: 0, file: 1}, 'white', this);
      this.ranks[0][6] = new Knight({rank: 0, file: 6}, 'white', this);
      this.ranks[7][1] = new Knight({rank: 7, file: 1}, 'black', this);
      this.ranks[7][6] = new Knight({rank: 7, file: 6}, 'black', this);
    };

    this.setBishops = () => {
      this.ranks[0][2] = new Bishop({rank: 0, file: 2}, 'white', this);
      this.ranks[0][5] = new Bishop({rank: 0, file: 5}, 'white', this);
      this.ranks[7][2] = new Bishop({rank: 7, file: 2}, 'black', this);
      this.ranks[7][5] = new Bishop({rank: 7, file: 5}, 'black', this);
    };

    this.setQueens = () => {
      this.ranks[0][3] = new Queen({rank: 0, file: 3}, 'white', this);
      this.ranks[7][3] = new Queen({rank: 7, file: 3}, 'black', this);
    };

    this.setKings = () => {
      this.ranks[0][4] = new King({rank: 0, file: 4}, 'white', this);
      this.ranks[7][4] = new King({rank: 7, file: 4}, 'black', this);
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
