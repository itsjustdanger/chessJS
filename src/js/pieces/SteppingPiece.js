"use strict";

var Piece = require('./Piece');
var Utils = require('../Utils');

module.exports = class SteppingPiece extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);

    /**
     * Implemented by child class
     */
    this.movementOffsets = [];
  }

  /**
  * Finds all stepping moves based on provided offsets. Only applies offset
  * once and omits squares occupied by a friendly piece.
  * @returns {Array} Array of possible legal moves as algs.
  */
  moves() {
    var moveList = [];

    this.movementOffsets.forEach((offset) => {
      var dest = {
        rank: (this.pos.rank + offset[0]),
        file: (this.pos.file + offset[1])
      };

      if (Utils.inBounds(dest) && !this.occupiedByFriendly(dest)) {
        moveList.push(Utils.toAlg(dest));
      }
    });

    return moveList;
  }
}
