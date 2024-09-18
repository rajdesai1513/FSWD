import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(), // Using a timestamp as a unique ID
        text: inputValue.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    if (editingIndex !== null && tasks[editingIndex]?.id === id) {
      setEditingIndex(null);
      setInputValue("");
    }
  };

  const toggleTaskCompletion = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const startEditing = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingIndex(tasks.findIndex((task) => task.id === id));
      setInputValue(taskToEdit.text);
    }
  };

  const saveTask = () => {
    if (inputValue.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[editingIndex].text = inputValue.trim();
      setTasks(newTasks);
      setEditingIndex(null);
      setInputValue("");
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add or edit a task..."
        />
        {editingIndex !== null ? (
          <button onClick={saveTask}>Save Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </div>
      <div className="task-sections">
        <h2>Incomplete Tasks</h2>
        <ul className="task-list">
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <li key={task.id} className="task-item">
                {task.text}
                <div className="task-buttons">
                  <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className="complete-button"
                  >
                    ✅
                  </button>
                  <button onClick={() => startEditing(task.id)}>Edit</button>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>

        <h2>Completed Tasks</h2>
        <ul className="task-list">
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <li key={task.id} className="task-item completed">
                {task.text}
                <div className="task-buttons">
                  <button
                    onClick={() => toggleTaskCompletion(task.id)}
                    className="complete-button"
                  >
                    ✅
                  </button>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
