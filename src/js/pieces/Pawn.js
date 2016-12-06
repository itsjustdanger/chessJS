"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class Pawn extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);
    this.hasMoved = false;

    this.directionMod = (this.color === 'white') ? 1 : -1;
    this.moveDirections = []

    this.captureMoves = (dest) => {

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

    this.moves = () => {

      var newRank, newFile;
      var boundaryRank = (this.color === 'white') ? 7 : 0;
      var moveList = [];
      var rank;

      if ((color === 'white' && this.pos.rank < boundaryRank) ||
          (color === 'black' && this.pos.rank > boundaryRank)) {
            
        rank = this.pos.rank + (1 * this.directionMod)
        moveList.push(Utils.coordsToAlg({rank: rank, file: this.pos.file}));
      }

      if (!this.hasMoved) {
        rank = this.pos.rank + (2 * this.directionMod)
        moveList.push(Utils.coordsToAlg({rank: rank, file: this.pos.file}));
      }

      moveList = moveList.concat(this.captureMoves());

      return moveList;
    };
  }
};
