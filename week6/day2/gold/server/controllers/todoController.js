const model = require('../models/todoModel');

exports.getAll = async (req, res) => {
  const todos = await model.getAllTodos();
  res.json(todos);
};

exports.getOne = async (req, res) => {
  const todo = await model.getTodoById(req.params.id);
  if (todo) res.json(todo);
  else res.status(404).json({ message: 'Todo not found' });
};

exports.create = async (req, res) => {
  const [newTodo] = await model.createTodo(req.body);
  res.status(201).json(newTodo);
};

exports.update = async (req, res) => {
  const [updated] = await model.updateTodo(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ message: 'Todo not found' });
};

exports.delete = async (req, res) => {
  const deleted = await model.deleteTodo(req.params.id);
  deleted ? res.json({ message: 'Todo deleted' }) : res.status(404).json({ message: 'Todo not found' });
};
