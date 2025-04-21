// server/controllers/bookController.js
let books = require('../models/bookModel');

// GET /api/books
const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// GET /api/books/:bookId
const getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// POST /api/books
const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

// PUT /api/books/:bookId
const updateBook = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const { title, author, publishedYear } = req.body;

  const bookIndex = books.findIndex(b => b.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = {
      id: bookId,
      title: title || books[bookIndex].title,
      author: author || books[bookIndex].author,
      publishedYear: publishedYear || books[bookIndex].publishedYear,
    };
    res.status(200).json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// DELETE /api/books/:bookId
const deleteBook = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    res.status(200).json({ message: 'Book deleted', book: deletedBook[0] });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// ✅ Un seul export ici
module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
