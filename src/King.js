"use strict";

var Piece = require("./Piece");

module.exports = class King extends Piece {
  constructor (pos, color) {
    super(pos, color);
  }
};
