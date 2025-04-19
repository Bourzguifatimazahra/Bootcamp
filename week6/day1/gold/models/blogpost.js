let posts = [];
let idCounter = 1;

function createPost(title, content) {
  return {
    id: idCounter++,
    title,
    content,
    timestamp: new Date()
  };
}

module.exports = {
  posts,
  createPost
};
