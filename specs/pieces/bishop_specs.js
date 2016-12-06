var test = require('tape');
var Board = require('../../src/js/Board');

test('Bishops return array of possible legal moves', (t) => {
  var board = new Board();
  var whiteBishop = board.getPiece('c1');
  var blackBishop = board.getPiece('c8');

  board.move('c1', 'f4');
  board.move('c8', 'f5');

  t.plan(2);

  t.deepEqual(whiteBishop.moves(), ['e3', 'e5', 'd6', 'c7', 'g3', 'g5', 'h6']);
  t.deepEqual(blackBishop.moves(), ['e4', 'd3', 'c2', 'e6', 'g4', 'h3', 'g6']);
});
