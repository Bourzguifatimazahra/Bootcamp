// server/routes/bookRoutes.js

const express = require('express');
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,     // <== ici !
  deleteBook      // <== ici aussi !
} = require('../controllers/bookController');

router.get('/', getAllBooks);
router.get('/:bookId', getBookById);
router.post('/', createBook);
router.put('/:bookId', updateBook);   // <== là où ça bloquait
router.delete('/:bookId', deleteBook);

module.exports = router;
