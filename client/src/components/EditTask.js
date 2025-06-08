import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditTask = ({ task, fetchTasks, closeEdit }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [status, setStatus] = useState(task.status);

  const updateTask = async () => {
    await axios.put(`http://localhost:5001/tasks/${task._id}`, { title, description, dueDate, status });
    fetchTasks();
    closeEdit();
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form class="task-form">
    <label for="edit-title">Title:</label>
    <input id="edit-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />

    <label for="edit-dueDate">Due Date:</label>
    <input id="edit-dueDate" type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="Due Date (dd-mm-yyyy)" />

    <label for="edit-description">Description:</label>
    <textarea id="edit-description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>

    <label for="edit-status">Status:</label>
    <select id="edit-status" value={status} onChange={(e) => setStatus(e.target.value)}>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>

    <button type="button" onClick={updateTask}>Update Task</button>
    <button type="button" onClick={closeEdit}>Cancel</button>
  </form>

    </div>
  );
};

export default EditTask;
