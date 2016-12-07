"use strict";

var SlidingPiece = require('./SlidingPiece');
var Utils = require('../Utils');

var BISHOP_OFFSETS = [[-1, -1], [1, -1], [-1, 1], [1, 1]];

module.exports = class Bishop extends SlidingPiece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.movementOffsets = BISHOP_OFFSETS;
  }
};
