const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  player1: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Player',
    required: true 
  },
  player2: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Player' 
  },
  currentPlayer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Player' 
  },
  board: { 
    type: Array, 
    default: initializeBoard 
  },
  player1Position: { 
    type: { x: Number, y: Number }, 
    default: { x: 0, y: 0 } 
  },
  player2Position: { 
    type: { x: Number, y: Number }, 
    default: { x: 9, y: 9 } 
  },
  player1Base: { 
    type: { x: Number, y: Number }, 
    default: { x: 0, y: 0 } 
  },
  player2Base: { 
    type: { x: Number, y: Number }, 
    default: { x: 9, y: 9 } 
  },
  status: { 
    type: String, 
    enum: ['waiting', 'ongoing', 'finished', 'abandoned'],
    default: 'waiting' 
  },
  winner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Player' 
  },
  turnCount: {
    type: Number,
    default: 0
  },
  maxTurns: {
    type: Number,
    default: 100
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  finishedAt: {
    type: Date
  },
  lastActivity: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for game duration
GameSchema.virtual('duration').get(function() {
  if (!this.finishedAt) return null;
  return this.finishedAt - this.createdAt;
});

// Improved board initialization
function initializeBoard() {
  const board = Array(10).fill().map(() => Array(10).fill(0));
  
  // Add obstacles more strategically (avoid blocking paths completely)
  const obstacleCount = 15; // Fixed number instead of random percentage
  const safeSpots = [
    [0,0], [9,9], // Player bases
    [0,1], [1,0], // Adjacent to player 1
    [8,9], [9,8]  // Adjacent to player 2
  ];

  let placed = 0;
  while (placed < obstacleCount) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    
    // Check if this is a safe spot or already has an obstacle
    const isSafe = safeSpots.some(spot => spot[0] === x && spot[1] === y);
    if (!isSafe && board[y][x] === 0) {
      board[y][x] = 1; // 1 represents obstacle
      placed++;
    }
  }
  
  return board;
}

// Pre-save hook to update lastActivity
GameSchema.pre('save', function(next) {
  this.lastActivity = new Date();
  
  if (this.status === 'finished' && !this.finishedAt) {
    this.finishedAt = new Date();
  }
  
  next();
});

// Static method to find active games
GameSchema.statics.findActive = function() {
  return this.find({ status: { $in: ['waiting', 'ongoing'] } });
};

// Instance method to check if move is valid
GameSchema.methods.isValidMove = function(player, x, y) {
  // Check bounds
  if (x < 0 || x > 9 || y < 0 || y > 9) return false;
  
  // Check for obstacles
  if (this.board[y][x] === 1) return false;
  
  // Get current position
  const currentPos = player === 'player1' ? this.player1Position : this.player2Position;
  
  // Check if move is adjacent
  return (
    (Math.abs(x - currentPos.x) === 1 && y === currentPos.y) ||
    (Math.abs(y - currentPos.y) === 1 && x === currentPos.x)
  );
};

// Instance method to check win condition
GameSchema.methods.checkWinCondition = function() {
  // Player 1 reached player 2's base
  if (this.player1Position.x === this.player2Base.x && 
      this.player1Position.y === this.player2Base.y) {
    return 'player1';
  }
  
  // Player 2 reached player 1's base
  if (this.player2Position.x === this.player1Base.x && 
      this.player2Position.y === this.player1Base.y) {
    return 'player2';
  }
  
  // Max turns reached
  if (this.turnCount >= this.maxTurns) {
    return 'draw';
  }
  
  return null;
};

module.exports = mongoose.model('Game', GameSchema);