"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

var BISHOP_OFFSETS = [[-1, -1], [1, -1], [-1, 1], [1, 1]];

module.exports = class Bishop extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);

    this.moves = () => {
      var dest, algDest, offset, i;
      var moveList = [];

      for (i = 0; i < BISHOP_OFFSETS.length; i++) {
        offset = BISHOP_OFFSETS[i];
        dest = {
          rank: (this.pos.rank + offset[0]),
          file: (this.pos.file + offset[1]),
        };

        algDest = Utils.coordsToAlg(dest);

        while (Utils.inBounds(dest) && !this.occupiedByFriendly(algDest)) {
          moveList.push(algDest);

          if (this.occupiedByEnemy(algDest)) {
            break;
          }

          dest.rank += offset[0];
          dest.file += offset[1];
          algDest = Utils.coordsToAlg(dest);
        }
      }

      return moveList;
    };
  }
};
