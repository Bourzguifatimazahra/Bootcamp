const express = require('express');
const router = express.Router();
let books = [];
let id = 1;

router.get('/', (req, res) => res.json(books));

router.post('/', (req, res) => {
  const book = { id: id++, ...req.body };
  books.push(book);
  res.status(201).json(book);
});

router.put('/:id', (req, res) => {
  const index = books.findIndex(book => book.id == req.params.id);
  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).send('Book not found');
  }
});

router.delete('/:id', (req, res) => {
  books = books.filter(book => book.id != req.params.id);
  res.sendStatus(204);
});

module.exports = router;

