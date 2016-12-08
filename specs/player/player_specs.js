var test = require('tape');
var Player = require('../../src/js/Player');
var Board = require('../../src/js/Board');
var Game = require('../../src/js/Game');

test('New Player initializes with given color', (t) => {
  var board = new Board();
  var player = new Player('white', board);

  t.plan(1);

  t.equal(player.color, 'white');
});

test('Player can move owned piece', (t) => {
  var game = new Game();
  var board = game.board;
  var piece = board.getPiece('e2');
  var move = game.playerWhite.move('e2', 'e4');

  t.plan(3);
  t.ok(move, 'legal move returns true');
  t.equal(board.getPiece('e2'), null, 'moved piece origin is empty');
  t.equal(board.getPiece('e4'), piece, 'moved piece dest contains piece');
});
