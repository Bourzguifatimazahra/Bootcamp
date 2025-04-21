const express = require('express');
const Game = require('../models/game');
const Player = require('../models/Player');
const router = express.Router();
const auth = require('../middleware/auth');

// Create new game
router.post('/', auth, async (req, res) => {
  try {
    const player1 = req.player.id;
    const game = new Game({ player1, status: 'waiting' });
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Join existing game
router.post('/:id/join', auth, async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    
    if (game.player2) return res.status(400).json({ message: 'Game is full' });
    
    game.player2 = req.player.id;
    game.currentPlayer = game.player1;
    game.status = 'ongoing';
    await game.save();
    
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Make a move
router.post('/:id/move', auth, async (req, res) => {
  try {
    const { direction } = req.body;
    const game = await Game.findById(req.params.id).populate('player1 player2');
    
    if (!game) return res.status(404).json({ message: 'Game not found' });
    if (game.status !== 'ongoing') return res.status(400).json({ message: 'Game is not ongoing' });
    if (game.currentPlayer.toString() !== req.player.id) return res.status(400).json({ message: 'Not your turn' });
    
    const player = game.player1._id.toString() === req.player.id ? 'player1' : 'player2';
    const opponent = player === 'player1' ? 'player2' : 'player1';
    const currentPos = game[`${player}Position`];
    const opponentBase = game[`${opponent}Base`];
    
    // Calculate new position
    let newPos = { ...currentPos };
    switch (direction) {
      case 'up': newPos.y = Math.max(0, currentPos.y - 1); break;
      case 'down': newPos.y = Math.min(9, currentPos.y + 1); break;
      case 'left': newPos.x = Math.max(0, currentPos.x - 1); break;
      case 'right': newPos.x = Math.min(9, currentPos.x + 1); break;
      default: return res.status(400).json({ message: 'Invalid direction' });
    }
    
    // Check if move is valid
    if (game.board[newPos.y][newPos.x] === 1) {
      return res.status(400).json({ message: 'Cannot move through obstacle' });
    }
    
    // Check for win condition
    if (newPos.x === opponentBase.x && newPos.y === opponentBase.y) {
      game.status = 'finished';
      game.winner = req.player.id;
      await game.save();
      
      // Update player stats
      await Player.findByIdAndUpdate(req.player.id, { $inc: { wins: 1 } });
      await Player.findByIdAndUpdate(game[opponent]._id, { $inc: { losses: 1 } });
      
      return res.json({ 
        message: 'You won!', 
        game, 
        winner: player === 'player1' ? game.player1.username : game.player2.username 
      });
    }
    
    // Update game state
    game[`${player}Position`] = newPos;
    game.currentPlayer = game[player === 'player1' ? 'player2' : 'player1']._id;
    await game.save();
    
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;