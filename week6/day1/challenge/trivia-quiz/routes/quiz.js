const express = require('express');
const router = express.Router();
const triviaQuestions = require('../data/questions');

// Start quiz - show first question
router.get('/', (req, res) => {
  req.session.score = 0;
  req.session.currentIndex = 0;
  res.redirect('/quiz/question');
});

// Display current question
router.get('/question', (req, res) => {
  const index = req.session.currentIndex;
  if (index >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const currentQuestion = triviaQuestions[index].question;
  res.send(`
    <h1>Question ${index + 1}</h1>
    <p>${currentQuestion}</p>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Submit answer
router.post('/', express.urlencoded({ extended: true }), (req, res) => {
  const userAnswer = req.body.answer.trim().toLowerCase();
  const index = req.session.currentIndex;
  const correctAnswer = triviaQuestions[index].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    req.session.score++;
  }

  req.session.currentIndex++;
  res.redirect('/quiz/question');
});

// Final score
router.get('/score', (req, res) => {
  const score = req.session.score || 0;
  res.send(`<h1>Your Final Score: ${score} / ${triviaQuestions.length}</h1>`);
});

module.exports = router;
