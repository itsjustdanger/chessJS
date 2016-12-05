
var Helpers = {

  checkPawns: function (board, color) {
    var rank = (color === 'white') ? 1 : 5;
    var i;
    var piece;

    for (i = 0; i < 8; i++) {
      piece = board.ranks[rank][i];

      if (piece.constructor.name !== 'Pawn' || piece.color !== color) {
        return false;
      }
    }

    return true;
  }
};

module.exports = Helpers;
