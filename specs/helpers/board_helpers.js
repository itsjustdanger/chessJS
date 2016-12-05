
var Helpers = {

  /**
   * Generalized checkPiece function that checks an indiviaul square for the
   * presence of an expected piece/color.
   */
  checkPiece: function(obj, piece, color) {
    return (obj && obj.constructor.name === piece && obj.color === color);
  },


  /**
   * Generalized checkPieces function that checks for the expected piece and color
   * within the given positions. Returns boolean based on expectations.
   */
  checkPieces: function(board, piece, color, positions) {
    var rank, file, obj, i;

    for (i = 0; i < positions.length; i++) {
      rank = positions[i][0];
      file = positions[i][1];
      obj = board.ranks[rank][file];

      if (!this.checkPiece(obj, piece, color)) {
          return false;
      }
    }

    return true;
  },


  /**
   * Make sure that pawns fill up ranks 2 and 6, and that they are the correct color.
   */
  checkPawns: function (board, color) {
    var rank = (color === 'white') ? 1 : 5;
    var i;
    var piece;

    for (i = 0; i < 8; i++) {
      piece = board.ranks[rank][i];

      if (!this.checkPiece(piece, 'Pawn', color)) {
        return false;
      }
    }

    return true;
  },


  /**
   * Make sure the rooks are in the correct locations for given color.
   * white ~> [0, 0], [0, 7]
   * black ~> [7, 0], [7, 7]
   */
  checkRooks: function(board, color) {
    var positions = (color === 'white') ? [[0, 0], [0, 7]] : [[7, 0], [7, 7]];

    return this.checkPieces(board, 'Rook', color, positions);
  },


  /**
   * Make sure the knights are in the correct locations for given color.
   * white ~> [0, 1], [0, 6]
   * black ~> [7, 1], [7, 6]
   */
  checkKnights: function(board, color) {
    var positions = (color === 'white') ? [[0, 1], [0, 6]] : [[7, 1], [7, 6]];

    return this.checkPieces(board, 'Knight', color, positions);
  },


  /**
   * Make sure the bishops are in the correct locations for given color.
   * white ~> [0, 2], [0, 5]
   * black ~> [7, 2], [7, 5]
   */
  checkBishops: function(board, color) {
    var positions = (color === 'white') ? [[0, 2], [0, 5]] : [[7, 2], [7, 5]];

    return this.checkPieces(board, 'Bishop', color, positions);
  },


  /**
  * Make sure the queens are in the correct locations for a given color.
  * white ~> [0, 3]
  * black ~> [7, 3]
  */
  checkQueen: function(board, color) {
    var positions = (color === 'white') ? [[0, 3]] : [[7, 3]];

    return this.checkPieces(board, 'Queen', color, positions);
  },


  /**
   * Make sure the kings are in the correct locations for given color.
   * white ~> [0, 4]
   * black ~> [7, 4]
   */
   checkKing: function(board, color) {
     var positions = (color === 'white') ? [[0, 4]] : [[7, 4]];

     return this.checkPieces(board, 'King', color, positions);
   }
};

module.exports = Helpers;
