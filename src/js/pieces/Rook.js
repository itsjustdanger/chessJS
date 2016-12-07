"use strict";

var SlidingPiece = require('./SlidingPiece');
var Utils = require('../Utils');

var ROOK_OFFSETS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

module.exports = class Rook extends SlidingPiece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.movementOffsets = ROOK_OFFSETS;
  }
};
