const db = require('../config/db');

const getAllTodos = () => db('tasks');
const getTodoById = (id) => db('tasks').where({ id }).first();
const createTodo = (data) => db('tasks').insert(data).returning('*');
const updateTodo = (id, data) => db('tasks').where({ id }).update(data).returning('*');
const deleteTodo = (id) => db('tasks').where({ id }).del();

module.exports = { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo };
