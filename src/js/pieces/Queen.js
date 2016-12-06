"use strict";

var Piece = require('./Piece');

module.exports = class Queen extends Piece {
  constructor (pos, color, board) {
    super(pos, color, board);
  }
};
