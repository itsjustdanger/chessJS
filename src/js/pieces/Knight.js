"use strict";

var SteppingPiece = require('./SteppingPiece');
var Utils = require('../Utils');

var KNIGHT_OFFSETS = [[-1, -2], [1, -2], [-1, 2], [1, 2],
                      [-2, -1], [2, -1], [-2, 1], [2, 1]];

module.exports = class Knight extends SteppingPiece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.movementOffsets = KNIGHT_OFFSETS;
  }
};
