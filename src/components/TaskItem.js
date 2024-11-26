import React from "react";

function TaskItem({ task, onEditTask, onDeleteTask, onToggleComplete }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <span>{task.name}</span>
      <button onClick={() => onEditTask(task)}>Modifier</button>
      <button onClick={() => onDeleteTask(task.id)}>Supprimer</button>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
    </li>
  );
}

export default TaskItem;
