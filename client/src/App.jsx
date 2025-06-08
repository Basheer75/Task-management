import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTask from './components/Addtask';
import TaskList from './components/TaskList';

const App = () => {
  const [view, setView] = useState('taskList'); // Default view is Task List
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5001/tasks');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <div className="header">
        <h1>Task Management</h1>
        <nav>
          <button onClick={() => setView('addTask')}>Add Task</button>
          <button onClick={() => setView('taskList')}>Task List</button>
        </nav>
      </div>
      <div className="content">
        {view === 'addTask' ? (
          <AddTask fetchTasks={fetchTasks} setView={setView} />
        ) : (
          <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        )}
      </div>
    </div>
  );
};

export default App;
