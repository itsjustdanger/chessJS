"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class Pawn extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);
    this.hasMoved = false;

    this.directionMod = (this.color === 'white') ? 1 : -1;
    this.moveDirections = []

    this.moves = () => {
      var newRank, newFile;
      var moveList = [];
      var rank = this.pos.rank;
      var file = this.pos.file;

      if (rank < 7) {
        newRank = rank + (1 * this.directionMod)
        moveList.push(Utils.coordsToAlg({rank: newRank, file: file}));
      }

      if (!this.hasMoved) {
        newRank = rank + (2 * this.directionMod)
        moveList.push(Utils.coordsToAlg({rank: newRank, file: file}));
      }


      return moveList;
    };
  }
};
