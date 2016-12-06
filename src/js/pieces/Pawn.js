"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class Pawn extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);
    this.hasMoved = false;

    this.moveDirections = []

    this.moves = () => {
      var moveList = [];
      var rank = this.pos.rank;
      var file = this.pos.file;

      moveList.push(Utils.coordsToAlg({rank: rank + 1, file: file}));
      
      if (!this.hasMoved) {
        moveList.push(Utils.coordsToAlg({rank: rank + 2, file: file}));
      }


      return moveList;
    };
  }
};
