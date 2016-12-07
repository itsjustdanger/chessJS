"use strict";

var SteppingPiece = require("./SteppingPiece");

var KING_OFFSETS = [[-1, 0],  [1, 0],   [-1, -1], [-1, 1],
                    [1, 1],   [1, -1],  [0, 1],   [0, -1]];

module.exports = class King extends SteppingPiece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.movementOffsets = KING_OFFSETS;
  }
};
