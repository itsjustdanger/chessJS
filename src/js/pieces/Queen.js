"use strict";

var SlidingPiece = require('./SlidingPiece');
var Utils = require('../Utils');

var QUEEN_OFFSETS = [ [-1, -1], [1, -1], [-1, 1], [1, 1],
                      [1, 0], [-1, 0], [0, 1], [0, -1]];

module.exports = class Queen extends SlidingPiece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.movementOffsets = QUEEN_OFFSETS;
  }
};
