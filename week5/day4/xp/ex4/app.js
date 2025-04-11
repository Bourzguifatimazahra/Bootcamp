import { TodoList } from './todo.js';

const myTodoList = new TodoList();

// Ajouter des tâches
myTodoList.addTask('Finish homework');
myTodoList.addTask('Read a book');
myTodoList.addTask('Go for a walk');

// Marquer certaines tâches comme terminées
myTodoList.markTaskComplete('Finish homework');

// Lister toutes les tâches
myTodoList.listTasks();
