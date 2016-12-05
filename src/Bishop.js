"use strict";

var Piece = require('./Piece');

module.exports = class Bishop extends Piece {
  constructor (pos, color) {
    super(pos, color);
  }
};
