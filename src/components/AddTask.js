import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
  type="text"
  value={taskText}
  onChange={(e) => setTaskText(e.target.value)}
  className="form-control pencil-input"
  placeholder="Write your task ✏️"
/>

        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddTask;
