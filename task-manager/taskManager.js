function addTask(tasks, task) {
    tasks.push(task);
    console.log(`Task "${task}" added!`);
}

function listTasks(tasks) {
    console.log('Current Tasks:');
    tasks.forEach((task, index) => console.log(`${index + 1}.${task}`));
}

module.exports = { addTask, listTasks };