import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="card">
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="button button-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? "completed" : ""}
          >
            {task.text}
            <div className="task-actions">
              <button
                className="button button-secondary"
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? "Undo" : "Done"}
              </button>
              <button
                className="button button-danger"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
