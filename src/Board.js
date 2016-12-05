"use strict";
var NUM_FILES = 8;
var Pawn = require('./Pawn');

module.exports = class Board {
  constructor() {

    this.ranks =  [
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null]
    ];

    this.setPawns = () => {
      var i;

      for (i = 0; i < NUM_FILES; i++) {
        this.ranks[1][i] = new Pawn({rank: 1, file: i}, 'white');
        this.ranks[5][i] = new Pawn({rank: 5, file: i}, 'black');
      }
    }

    this.setPawns();
  }

}
