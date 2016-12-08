"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class SlidingPiece extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);

    // Implemented by child class
    this.movementOffsets = [];
  }

  /**
  * Finds all sliding moves based on provided offsets. Stops after adding a
  * capture square or before adding a square occupied by a friendly piece.
  * @returns {Array} Array of possible legal moves as algs.
  */
  moves() {
    var moveList = [];

    this.movementOffsets.forEach((offset) => {
      var dest = {
        file: (this.pos.file + offset[1]),
        rank: (this.pos.rank + offset[0])
      };

      while (Utils.inBounds(dest) && !this.occupiedByFriendly(dest)) {
        moveList.push(Utils.toAlg(dest));

        if (this.occupiedByEnemy(dest)) {
          break;
        }

        dest.rank += offset[0];
        dest.file += offset[1];
      }
    });

    return moveList;
  }
};
