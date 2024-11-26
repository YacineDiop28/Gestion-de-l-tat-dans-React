import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) =>
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));

  const deleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  return (
    <div className="App">
      <h1>Liste de tâches</h1>
      <TaskForm
        onAddTask={addTask}
        onUpdateTask={updateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <TaskList
        tasks={tasks}
        onEditTask={setEditingTask}
        onDeleteTask={deleteTask}
        onToggleComplete={(taskId) =>
          setTasks(
            tasks.map((task) =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            )
          )
        }
      />
    </div>
  );
}

export default App;
