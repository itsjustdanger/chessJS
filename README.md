# chessJS
A basic implementation of chess in JavaScript (with some ES6 goodies).

## Structure

This is a great exercise after a while of repetitive development projects. While TDD helps, it's not wise to go into this blindly. Here's the basic structure I've decided to follow in my implementation:

Game - Stores Players, the Board, and manages overall game state.

Board - Stores Squares, handles a good deal of game logic. I decided the board should be able to set itself up. It may be better to have the Game object do that sort of thing, but I want to keep that object responsible for high level game logic like switching player turns, etc.

Square - Stores piece and location information. Tracks some random things like whether another location is diagonal, horizontal, or vertically aligned. This will help with some legality considerations.

Piece - Pieces have all the information about themselves. Eventually will have an image associated with itself, will know its board location (a redundancy to make some things easier), etc. I think a given pieces should be able to determine whether a move is legal, but this may require some undue coupling, so I'll need to figure out how to reduce that. The piece effectively needs to ask the board whether a move is legal. I like the idea of highlighting legal moves on the board when the piece is selected, so I'll need to have _something_ that determines possible legal moves more or less on the spot.
