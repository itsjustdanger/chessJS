var test = require('tape');
var Game = require('../../src/js/Game.js');

test('Game newGame initializes a new game.', (t) => {
  var game = new Game();

  t.plan(4);

  t.equal(game.playerWhite.color, 'white', 'set up playerWhite');
  t.equal(game.playerBlack.color, 'black', 'set up playerBlack');
  t.equal(game.board.constructor.name, 'Board', 'set up game board');
  t.equal(game.currentPlayer, game.playerWhite, 'white to move');
});

test('Game move only allows moves included within a pieces move list', (t) => {
  var game = new Game();

  t.plan(2);
  t.ok(game.move(game.playerWhite, 'e2', 'e3'), 'legal move returns true');
  t.ok(!game.move(game.playerWhite, 'e2', 'e5'), 'illegal move returns false');
});

test('Game attaches pieces to given player', (t) => {
  var game = new Game();

  var whitePieces = game.playerWhite.pieces;
  var allPiecesAreWhite = true;

  whitePieces.forEach((piece) => {
    if (piece.color !== 'white') {
      allPiecesAreWhite = false;
    }
  });

  t.plan(2);
  t.ok(allPiecesAreWhite, 'all white\'s pieces are white');
  t.equal(whitePieces.length, 16, 'white has all 16 pieces');
});

test('Game attaches King to correct player', (t) => {
  var game = new Game();

  var whiteKing = game.playerWhite.king;

  t.plan(2);
  t.equal(whiteKing.constructor.name, 'King');
  t.equal(whiteKing.color, 'white');
})

test('Game determines whether player is in check', (t) => {
  var game = new Game();
  var board = game.board;

  board.move('d2', 'e7');

  t.plan(2);
  t.ok(game.playerInCheck(game.playerBlack), 'black in check');
  t.ok(!game.playerInCheck(game.playerWhite), 'white not in check');
});
