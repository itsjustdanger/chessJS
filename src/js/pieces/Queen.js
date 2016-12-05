"use strict";

var Piece = require('./Piece');

module.exports = class Queen extends Piece {
  constructor (pos, color) {
    super(pos, color);
  }
};
