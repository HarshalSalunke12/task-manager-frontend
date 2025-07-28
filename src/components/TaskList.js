// TaskList.js
import React, { useState, useEffect } from "react";
import "../App.css";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="task-container">
      <h1 className="heading">My Tasks</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="✏️ Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-btn">Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id} className={t.completed ? "completed" : ""}>
            <span onClick={() => handleCompleteTask(t.id)}>{t.text}</span>
            <button onClick={() => handleDeleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
