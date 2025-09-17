const path = require('path');
const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');
const { takeCoverage } = require('v8');


const filePath = path.join(__dirname, 'tasks.json');

let tasks = fileHandler.loadTasks(filePath);

taskManager.addTask(tasks, 'do something');
taskManager.addTask(tasks, 'do something else');

taskManager.listTasks(tasks);

fileHandler.saveTasks(filePath, tasks);
