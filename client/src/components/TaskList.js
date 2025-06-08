import React, { useState } from 'react';
import axios from 'axios';
import EditTask from './EditTask';

const TaskList = ({ tasks, fetchTasks }) => {
  const [editingTask, setEditingTask] = useState(null);

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5001/tasks/${id}`);
    fetchTasks();
  };

  const openEdit = (task) => {
    setEditingTask(task);
  };

  const closeEdit = () => {
    setEditingTask(null);
  };

  return (
    <div>
      <h2>Task List</h2>
      {editingTask ? (
        <EditTask task={editingTask} fetchTasks={fetchTasks} closeEdit={closeEdit} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => openEdit(task)}>Edit</button>
                  <button onClick={() => deleteTask(task._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
