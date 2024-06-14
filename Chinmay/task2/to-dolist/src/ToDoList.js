import React, { useState, useEffect } from 'react';
import './App.css'; 
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage when component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = { id: Date.now(), text: taskInput, completed: false };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-list">
      <h1>TODO</h1>
      <div className="task-summary">
        <div className="task-summary-circle">
          <span>{completedTasksCount}/{tasks.length}</span>
        </div>
        <div>
          <h2>Task Done</h2>
          <p>Keep it up</p>
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Write your next task"
        />
        <button onClick={addTask}>
          <span className="plus-icon">+</span>
        </button>
      </div>
      <div className="controls">
        <label>
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
      </div>
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleCompletion(task.id)}>{task.text}</span>
            <div className="task-buttons">
              <button className="complete-button" onClick={() => toggleCompletion(task.id)}>
                <span className="check-icon">&#x2714;</span>
              </button>
              <button className="remove-button" onClick={() => removeTask(task.id)}>
                <span className="trash-icon">&#x1F5D1;</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
