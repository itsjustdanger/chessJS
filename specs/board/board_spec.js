var test = require('tape');
var Game = require('../../src/js/Game');

test('Allow legal pawn move using alg notation (e3)', (t) => {
  var game = new Game();
  var board = game.board;
  var pawn = board.getPiece('e2');
  var move = board.move('e2', 'e3');

  t.plan(3);

  t.ok(move, 'move e3 was legal');
  t.equal(board.getPiece('e2'), null, 'pawn is no longer at e2');
  t.equal(board.getPiece('e3'), pawn, 'pawn is now at e3');
});

test('Disallow movement when no piece is on the requested square', (t) => {
  var game = new Game();
  var board = game.board;
  var move = board.move('e4', 'e5');

  t.plan(3);

  t.ok(!move, 'move from e4 was illegal');
  t.equal(board.getPiece('e4'), null, 'there is no piece at e4');
  t.equal(board.getPiece('e5'), null, 'there is no piece at e5');
});
