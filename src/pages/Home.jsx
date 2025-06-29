// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCheckCircle,
  faClock,
  faClipboardList,
  faCalendarAlt,
  faFolder,
  faSpinner,
  faEdit,
  faTrash,
  faPlus,
  faUndo,
  faCrown,
  faSignOutAlt, // ✅ import logout icon
} from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });
  const [category, setCategory] = useState('Personal');
  const [date, setDate] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      text: task,
      category,
      date,
      completed: false,
    };

    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = newTask;
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setTask('');
    setDate('');
    setCategory('Personal');
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const editTask = (index) => {
    const t = tasks[index];
    setTask(t.text);
    setDate(t.date);
    setCategory(t.category);
    setEditingIndex(index);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const upcomingCount = tasks.filter(t => !t.completed && t.date && new Date(t.date) > new Date()).length;

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2><FontAwesomeIcon icon={faUser} /> Hello! Welcome back</h2>
        <div className="stats">
          <p><FontAwesomeIcon icon={faCheckCircle} /> Completed Tasks: {completedCount}</p>
          <p><FontAwesomeIcon icon={faClock} /> Upcoming Tasks: {upcomingCount}</p>

          <div className="premium-card">
            <h4><FontAwesomeIcon icon={faCrown} style={{ color: '#fbbf24' }} /> Premium Plan</h4>
            <p>Unlock advanced features and unlimited tasks</p>
            <button className="premium-btn">Get Premium</button>
          </div>
        </div>

        {/* ✅ Logout Button */}
        {/* ✅ Logout Link at Bottom without Black Button */}
<div className="logout-link" onClick={() => {
  localStorage.clear();
  window.location.href = "/login"; // or use navigate() if using react-router
}}>
  <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '8px' }} />
  Logout
</div>

      </aside>

      <main className="main-content">
        <div className="task-card">
          <h3><FontAwesomeIcon icon={faClipboardList} /> What's your task today?</h3>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your task here..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
            <button onClick={addTask}>
              <FontAwesomeIcon icon={faPlus} /> {editingIndex !== null ? 'Update' : 'Add Task'}
            </button>
          </div>
        </div>

        <div className="task-list">
          {tasks.map((t, index) => (
            <div key={index} className={`task-item ${t.completed ? 'completed' : ''}`}>
              <div>
                <h4>{t.text}</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {t.date || 'No date'} |{' '}
                  <FontAwesomeIcon icon={faFolder} /> {t.category}
                </p>
                <p>
                  <FontAwesomeIcon icon={t.completed ? faCheckCircle : faSpinner} />{' '}
                  {t.completed ? 'Completed' : 'In Progress'}
                </p>
              </div>
              <div className="task-actions">
                <button onClick={() => toggleComplete(index)}>
                  <FontAwesomeIcon icon={t.completed ? faUndo : faCheckCircle} />
                </button>
                <button onClick={() => editTask(index)}><FontAwesomeIcon icon={faEdit} /></button>
                <button onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
