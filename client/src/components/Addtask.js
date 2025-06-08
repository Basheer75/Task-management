import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ fetchTasks, setView }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const addTask = async () => {
    await axios.post("http://localhost:5001/tasks", {
      title,
      description,
      dueDate,
      status,
    });
    fetchTasks();
    setView("taskList"); // Navigate to task list after adding the task
  };

  return (
    <div class="container">
      <center>
        <h2>Add Task</h2>
        
  <form class="task-form">
    <label for="title">Title:</label>
    <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />

    <label for="dueDate">Due Date:</label>
    <input id="dueDate" type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="Due Date (dd-mm-yyyy)" />

    <label for="description">Description:</label>
    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>

    <label for="status">Status:</label>
    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>

    <button type="button" onClick={addTask}>Add Task</button>
  </form>
      </center>
    </div>
  );
};

export default AddTask;
