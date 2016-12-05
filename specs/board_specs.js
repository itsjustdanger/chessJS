var test = require('tape');
var Board = require('../src/Board.js');

test('Board populates 8x8 grid on creation', (t) => {
  var board = new Board();
  var ranks = board.ranks.length;
  var files = board.ranks[0].length;

  t.plan(2);

  t.equal(ranks, 8);
  t.equal(files, 8);
});
