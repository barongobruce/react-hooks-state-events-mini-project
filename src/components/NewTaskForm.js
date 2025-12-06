import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State for controlled component
  const [taskText, setTaskText] = useState("");
  // Set default category to the first non-All category (assuming "All" is categories[0])
  const [taskCategory, setTaskCategory] = useState(categories[1] || ""); 

  // Filter out the "All" category for the <select> options (TEST REQUIREMENT)
  const categoryOptions = categories
    .filter(category => category !== "All")
    .map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create the new task object
    const newTask = {
      text: taskText,
      category: taskCategory,
    };

    // Call the required callback prop
    onTaskFormSubmit(newTask);

    // Reset the text input
    setTaskText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={taskText} // Controlled input value
          onChange={(e) => setTaskText(e.target.value)} // Update state on change
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={taskCategory} // Controlled select value
          onChange={(e) => setTaskCategory(e.target.value)} // Update state on change
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
