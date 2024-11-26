import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onEditTask, onDeleteTask, onToggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
