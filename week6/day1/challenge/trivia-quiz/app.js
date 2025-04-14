const express = require('express');
const session = require('express-session');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = 3000;

app.use(session({
  secret: 'quiz_secret_key',
  resave: false,
  saveUninitialized: true,
}));

app.use('/quiz', quizRouter);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Trivia Quiz Game!</h1><a href="/quiz">Start Quiz</a>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
