const pool = require('../config/db');

const getAllPosts = () => {
  return pool.query('SELECT * FROM posts');
};

const getPostById = (id) => {
  return pool.query('SELECT * FROM posts WHERE id = $1', [id]);
};

const createPost = (title, content) => {
  return pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
};

const updatePost = (id, title, content) => {
  return pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id]);
};

const deletePost = (id) => {
  return pool.query('DELETE FROM posts WHERE id = $1', [id]);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
