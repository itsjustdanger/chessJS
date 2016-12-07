var test = require('tape');
var Board = require('../../src/js/Board');

test('Rooks return an array of possible legal moves', (t) => {
  var board = new Board();
  var whiteRook = board.getPiece('a1');
  var blackRook = board.getPiece('a8');

  board.move('a1', 'a3');
  board.move('h8', 'h6');

  t.plan(2);

  t.deepEqual(whiteRook.moves(), ['a4', 'a5', 'a6', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3']);
  t.deepEqual(blackRook.moves(), ['h5', 'h4', 'h3', 'g6', 'f6', 'e6', 'd6', 'c6', 'b6', 'a6']);
});
