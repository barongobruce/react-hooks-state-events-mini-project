import React from "react";

function Task({ text, category, onDelete }) {
  // Handler for the delete button click
  const handleDeleteClick = () => {
    // Call the onDelete prop, passing the task's text (needed for App.js to identify and delete)
    onDelete(text);
  };

  return (
    <div className="task">
      <div className="label">{category}</div> {/* Displays task category */}
      <div className="text">{text}</div>       {/* Displays task text */}
      <button className="delete" onClick={handleDeleteClick}>
        🗑️
      </button>
    </div>
  );
}

export default Task;
