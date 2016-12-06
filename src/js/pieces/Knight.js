"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

var KNIGHT_OFFSETS = [[-1, -2], [1, -2], [-1, 2], [1, 2],
                      [-2, -1], [2, -1], [-2, 1], [2, 1]];

module.exports = class Knight extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.moves = () => {
      var dest, offset, i;
      var moveList = [];

      for (i = 0; i < KNIGHT_OFFSETS.length; i++) {
        offset = KNIGHT_OFFSETS[i];
        dest = Utils.coordsToAlg({
          rank: (this.pos.rank + offset[0]),
          file: (this.pos.file + offset[1]),
        });

        if (dest && !this.occupiedByFriendly(dest)) {
          moveList.push(dest);
        }
      }

      return moveList;
    };
  }
};
