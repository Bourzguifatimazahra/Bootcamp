const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

const readTasks = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);
      try {
        resolve(JSON.parse(data));
      } catch (e) {
        reject(e);
      }
    });
  });
};

const writeTasks = (tasks) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = { readTasks, writeTasks };
