const express = require('express');
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

// GET /
router.get('/', (req, res) => {
  res.render('form', { emojis, error: null });
});

// POST /greet
router.post('/greet', (req, res) => {
  const { name, emoji } = req.body;

  if (!name || name.trim() === "") {
    return res.render('form', { emojis, error: "Name is required." });
  }

  res.render('greet', { name, emoji });
});

module.exports = router;
