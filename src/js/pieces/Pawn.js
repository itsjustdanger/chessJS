"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class Pawn extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);
    this.hasMoved = false;

    this.directionMod = (this.color === 'white') ? 1 : -1;
    this.moveDirections = []


    /**
     * Checks forward diagonals for Pawn captures and returns them.
     */
    this._captureMoves = (dest) => {

      var moveList = [];
      var rank = this.pos.rank + (1 * this.directionMod);
      var leftCapture = Utils.coordsToAlg({rank: rank, file: this.pos.file - 1});
      var rightCapture = Utils.coordsToAlg({rank: rank, file: this.pos.file + 1});

      if (this.board.getPiece(leftCapture)) {
        moveList.push(leftCapture);
      }

      if (this.board.getPiece(rightCapture)) {
        moveList.push(rightCapture);
      }

      return moveList;
    };

    /**
     * Returns a list of possible legal moves for the piece. Calls captureMoves to
     * check for special pawn diagonal captures.
     */
    this.moves = () => {

      var newRank, newFile, rank, dest;
      var boundaryRank = (this.color === 'white') ? 7 : 0;
      var moveList = [];

      if ((color === 'white' && this.pos.rank < boundaryRank) ||
          (color === 'black' && this.pos.rank > boundaryRank)) {

        rank = this.pos.rank + (1 * this.directionMod)
        dest = Utils.coordsToAlg({rank: rank, file: this.pos.file});

        if (board.isEmpty(dest)) {
          moveList.push();
        }
      }

      if (!this.hasMoved) {
        rank = this.pos.rank + (2 * this.directionMod)
        dest = Utils.coordsToAlg({rank: rank, file: this.pos.file})

        if (board.isEmpty(dest)) {
          moveList.push();          
        }
      }

      moveList = moveList.concat(this._captureMoves());

      return moveList;
    };
  }
};
