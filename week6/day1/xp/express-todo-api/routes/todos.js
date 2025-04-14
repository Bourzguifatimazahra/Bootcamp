const express = require('express');
const router = express.Router();
let todos = [];
let id = 1;

router.get('/', (req, res) => res.json(todos));

router.post('/', (req, res) => {
  const todo = { id: id++, ...req.body };
  todos.push(todo);
  res.status(201).json(todo);
});

router.put('/:id', (req, res) => {
  const index = todos.findIndex(todo => todo.id == req.params.id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...req.body };
    res.json(todos[index]);
  } else {
    res.status(404).send('To-do not found');
  }
});

router.delete('/:id', (req, res) => {
  todos = todos.filter(todo => todo.id != req.params.id);
  res.sendStatus(204);
});

module.exports = router;
 