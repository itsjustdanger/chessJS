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

    if (!Utils.inBounds(alg)) {
      return false;
    }

    alg = alg.split('');

    rank = parseInt(alg[1]) - 1;
    file = FILE_MAP[alg[0]];

    if (typeof file === 'undefined') {
      return false;
    }

    return { file: file, rank: rank };
  },

  coordsToAlg: (coords) => {
    if (!Utils.inBounds(coords)) {
      return false;
    }

    return FILE_MAP[coords.file] + (coords.rank + 1);
  },

  inBounds: (loc) => {
    var alg, rank, file;

    if (typeof loc === 'string') {
      alg = loc.split('')
      rank = parseInt(alg[1] -1);
      file = alg[0];

      return (alg.length === 2 && rank < 8 && rank >= 0 && file <= 'h' && file >= 'a');
    }

    return (loc.rank < 8 && loc.file < 8 && loc.rank >= 0 && loc.file >= 0);
  },
};
