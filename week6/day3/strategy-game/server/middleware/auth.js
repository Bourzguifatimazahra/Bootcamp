const jwt = require('jsonwebtoken');
const Player = require('../models/Player');

module.exports = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify token
    const decoded = jwt.verify(token, 'secret');
    
    // Find player and attach to request
    const player = await Player.findById(decoded.id).select('-password');
    if (!player) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.player = player;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};