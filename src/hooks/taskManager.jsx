import { useState, useEffect } from 'react';

function taskManager() {

    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        return tasks;
    }

    const createTask = (title = "Unnamed task", description = "No description", id = (Date.now().toString(16) + "_" + Math.random().toString(16).slice(2))) => {
        const newTask = {
            title: title,
            description: description,
            id: id
        }

        setTasks((t) => [newTask, ...t])

        return tasks;
    }

    const deleteTask = (taskId) => {
        const taskIndex = tasks.findIndex(t => t.id === taskId)
        if (taskIndex === -1) return console.error("No task. Got this ID: " + taskId, tasks);

        if (taskIndex >= 0) {
            const allTasks = [...tasks];
            allTasks.splice(taskIndex, 1);

            setTasks(allTasks);
            return tasks;
        }
    }

    useEffect(() => {
        console.log(tasks)
      })

    return {
        getTasks, createTask, deleteTask
    };

}

export default taskManager;