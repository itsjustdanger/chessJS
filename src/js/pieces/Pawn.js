"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class Pawn extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.directionMod = (this.color === 'white') ? 1 : -1;
  }


  /**
  * Returns a list of possible legal moves for the piece. Calls captureMoves
  * to check for special pawn diagonal captures.
  * @returns {Array} Array of possible legal move algs.
  */
  moves() {
    var dest, rank;
    var boundaryRank = (this.color === 'white') ? 7 : 0;
    var moveList = [];
    var file = this.pos.file;

    if ((this.color === 'white' && this.pos.rank < boundaryRank) ||
    (this.color === 'black' && this.pos.rank > boundaryRank)) {

      rank = this.pos.rank + (1 * this.directionMod)
      dest = Utils.toAlg({file, rank});

      if (this.board.isEmpty(dest)) {
        moveList.push(dest);
      }
    }

    if (!this.hasMoved) {
      rank = this.pos.rank + (2 * this.directionMod)
      dest = Utils.toAlg({file, rank});

      if (this.board.isEmpty(dest)) {
        moveList.push(dest);
      }
    }

    moveList = moveList.concat(this._captureMoves());

    return moveList;
  }


  /**
   * Find diagonal capture moves.
   * @return {Array} Array of move algs.
   */
  _captureMoves() {
    var moveList = [];
    var rank = this.pos.rank + (1 * this.directionMod);
    var leftCapture = Utils.toAlg({file: this.pos.file - 1, rank});
    var rightCapture = Utils.toAlg({file: this.pos.file + 1, rank});

    if (this.board.getPiece(leftCapture)) {
      moveList.push(leftCapture);
    }

    if (this.board.getPiece(rightCapture)) {
      moveList.push(rightCapture);
    }

    return moveList;
  }
};
