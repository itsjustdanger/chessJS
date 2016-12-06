"use strict";

var FILE_MAP = {
  'a' : 0,
  'b' : 1,
  'c' : 2,
  'd' : 3,
  'e' : 4,
  'f' : 5,
  'g' : 6,
  'h' : 7,
  0   : 'a',
  1   : 'b',
  2   : 'c',
  3   : 'd',
  4   : 'e',
  5   : 'f',
  6   : 'g',
  7   : 'h',
};


var Utils = module.exports = {
  algToCoords: (alg) => {
    var rank, file;

    alg = alg.split('');

    rank = parseInt(alg[1]) - 1;
    file = FILE_MAP[alg[0]];

    return { file: file, rank: rank };
  },

  coordsToAlg: (coords) => {
    return FILE_MAP[coords.file] + (coords.rank + 1);
  }
};
