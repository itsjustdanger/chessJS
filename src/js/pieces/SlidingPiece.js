"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class SlidingPiece extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);

    /**
     * Implemented by child class
     */
    this.movementOffsets = [];


    /**
     * Finds all sliding moves based on provided offsets. Stops after adding a
     * capture square or before adding a square occupied by a friendly piece.
     */
    this.moves = () => {
      var dest, algDest, offset, i;
      var moveList = [];

      for (i = 0; i < this.movementOffsets.length; i++) {
        offset = this.movementOffsets[i];
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
