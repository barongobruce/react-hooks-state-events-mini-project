import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  // Map over the tasks array to render a Task component for each item
  const taskElements = tasks.map(task => (
    <Task 
      key={task.text} // Key prop
      text={task.text}
      category={task.category}
      onDelete={onDeleteTask} // Pass the delete handler down
    />
  ));

  return (
    <div className="tasks">
      {taskElements} {/* Renders all Task components */}
    </div>
  );
}

export default TaskList;

