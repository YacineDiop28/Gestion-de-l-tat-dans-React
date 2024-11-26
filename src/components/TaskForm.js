import React, { useState, useEffect } from "react";

function TaskForm({ onAddTask, onUpdateTask, editingTask, setEditingTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;

    if (editingTask) {
      onUpdateTask({ ...editingTask, name, description });
      setEditingTask(null);
    } else {
      onAddTask({ id: Date.now(), name, description, completed: false });
    }
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{editingTask ? "Modifier" : "Ajouter"}</button>
    </form>
  );
}

export default TaskForm;
