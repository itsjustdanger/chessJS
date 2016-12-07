"use strict";

var Pieces = require('./pieces/Pieces');
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

    this.setupBoard();
  }

  /**
   * Inserts the piece at the origin into the square at the destination. Does
   * NOT check for legality, validity, obstruction, etc. Changes hasMoved on
   * piece to true if false.
   * @params {string} origin - the origin square, in algorithmic notation
   * @params {string} dest - the destination square, in algorithmic notation
   * @returns {boolean} Returns true when move has completed.
   */
  move(origin, dest) {
    var piece = this.getPiece(origin);

    if (!piece) {
      return false;
    }

    this.setPiece(dest, piece);
    this.setPiece(origin, null);

    if (!piece.hasMoved) {
      piece.hasMoved = true;
    }

    return true;
  }

  /**
   * Gets the piece at the given location.
   * @params {string} alg - The location in algorithmic notation.
   * @returns {Piece|null|Boolean} The piece, a null square, or false.
   */
  getPiece(alg) {
    var pos = Utils.toCoords(alg);
    var piece;

    if (Utils.inBounds(pos)) {
      piece = this.ranks[pos.rank][pos.file];
      return piece;
    }

    return false;
  }

  /**
   * Checks whether a given location is empty.
   * @params {string} alg - The location in algorithmic notation.
   * @returns {Boolean} Whether a the given square is empty.
   */
  isEmpty(alg) {
    return (!this.getPiece(alg));
  };

  /**
   * Places a piece in the destination square. Ignores all restrictions.
   * @params {string} dest - The destination to place the piece in alg. not.
   * @params {Piece} piece - The piece to place.
   */
  setPiece(dest, piece) {
    var pos = Utils.toCoords(dest);

    this.ranks[pos.rank][pos.file] = piece;

    if (piece) {
      piece.pos = pos;
    }
  }

  setupBoard() {
    this.setupPieces('white');
    this.setupPieces('black');
  }

  setupPieces(color) {
    var file;
    var rank = (color === 'white') ? 0 : 7;
    var pawnRank = (color === 'white') ? 1 : 6;

    // Setup pawns
    for (file = 0; file < 8; file++) {
      this.ranks[pawnRank][file] = new Pieces.Pawn({ rank: pawnRank, file },
                                                  color, this);
    }

    // Setup rooks
    this.ranks[rank][0] = new Pieces.Rook({rank, file: 0}, color, this);
    this.ranks[rank][7] = new Pieces.Rook({rank, file: 7}, color, this);

    // Setup knights
    this.ranks[rank][1] = new Pieces.Knight({rank, file: 1}, color, this);
    this.ranks[rank][6] = new Pieces.Knight({rank, file: 6}, color, this);

    // Setup bishops
    this.ranks[rank][2] = new Pieces.Bishop({rank, file: 2}, color, this);
    this.ranks[rank][5] = new Pieces.Bishop({rank, file: 5}, color, this);

    // Setup queen
    this.ranks[rank][3] = new Pieces.Queen({rank, file: 3}, color, this);

    // Setup king
    this.ranks[rank][4] = new Pieces.King({rank, file: 4}, color, this);
  }
};
