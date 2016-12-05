"use strict";

var Piece = require('./Piece');

module.exports = class Knight extends Piece {
  constructor (pos, color) {
    super(pos, color);
  }
};
