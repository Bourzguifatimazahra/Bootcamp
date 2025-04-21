const express = require('express');
const router = express.Router();
const { readTasks, writeTasks } = require('../utils/fileHandler');
const { v4: uuidv4 } = require('uuid');

// GET /tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks.' });
  }
});

// GET /tasks/:id
router.get('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read task.' });
  }
});

// POST /tasks
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    const tasks = await readTasks();
    const newTask = {
      id: uuidv4(),
      title,
      description: description || '',
      completed: false,
    };
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task.' });
  }
});

// PUT /tasks/:id
router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);
    if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

    if (title !== undefined) tasks[taskIndex].title = title;
    if (description !== undefined) tasks[taskIndex].description = description;
    if (completed !== undefined) tasks[taskIndex].completed = completed;

    await writeTasks(tasks);
    res.json(tasks[taskIndex]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task.' });
  }
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const filteredTasks = tasks.filter(t => t.id !== req.params.id);
    if (tasks.length === filteredTasks.length) return res.status(404).json({ error: 'Task not found' });

    await writeTasks(filteredTasks);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task.' });
  }
});

module.exports = router;
