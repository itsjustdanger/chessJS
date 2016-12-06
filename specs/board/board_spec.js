var test = require('tape');
var Board = require('../../src/js/Board.js');

test('Allow legal pawn move using alg notation (e3)', (t) => {
  var board = new Board();
  var pawn = board.getPiece('e2');
  var move = board.move('e2', 'e3');

  t.plan(3);

  t.ok(move, 'move e3 was legal');
  t.equal(board.getPiece('e2'), null, 'pawn is no longer at e2');
  t.equal(board.getPiece('e3'), pawn, 'pawn is now at e3');
});