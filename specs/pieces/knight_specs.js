var test = require('tape');
var Board = require('../../src/js/Board');

test('Knights return array of possible legal moves', (t) => {
  var board = new Board();
  var whiteKnight = board.getPiece('b1');
  var blackKnight = board.getPiece('b8');

  t.plan(2);

  t.deepEqual(whiteKnight.moves(), ['a3', 'c3']);
  t.deepEqual(blackKnight.moves(), ['a6', 'c6']);
});
