
var Helpers = {

  checkPiece: function(obj, piece, color) {
    return (obj && obj.constructor.name === piece && obj.color === color);
  },

  /**
   * Make sure that pawns fill up ranks 2 and 6, and that they are the correct color.
   */
  checkPawns: function (board, color) {
    var rank = (color === 'white') ? 1 : 5;
    var i;
    var piece;
    console.log(this);
    for (i = 0; i < 8; i++) {
      piece = board.ranks[rank][i];

      if (!this.checkPiece(piece, 'Pawn', color)) {
        return false;
      }
    }

    return true;
  },

  /**
   * Make sure the rooks are in the corners, and the colors are correct.
   * white ~> [0, 0], [0, 7]
   * black ~> [7, 0], [7, 7]
   */
  checkRooks: function(board, color) {
    var rank = (color === 'white') ? 0 : 7;
    var files = [0, 7];
    var piece;
    var i;

    for (i = 0; i < 2; i++) {
      piece = board.ranks[rank][files[i]];

      if (!this.checkPiece(piece, 'Rook', color)) {
        return false;
      }
    }

    return true;
  }
};

module.exports = Helpers;
