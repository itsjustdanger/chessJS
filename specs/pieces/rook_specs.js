var test = require('tape');
var Board = require('../../src/js/Board');

test('Rooks return an array of possible legal moves', (t) => {
  var board = new Board();
  var whiteRook = board.getPiece('a1');
  var blackRook = board.getPiece('h8');

  board.move('a1', 'a4');
  board.move('h8', 'h5');

  t.plan(2);

  t.deepEqual(whiteRook.moves(), ['a5', 'a6', 'a7', 'a3', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4']);
  t.deepEqual(blackRook.moves(), ['h6', 'h4', 'h3', 'h2', 'g5', 'f5', 'e5', 'd5', 'c5', 'b5', 'a5']);
});
