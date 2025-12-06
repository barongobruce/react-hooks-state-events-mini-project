import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  // State for managing the list of tasks
  const [tasks, setTasks] = useState(TASKS);
  // State for tracking the currently selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter tasks based on the selectedCategory state
  const displayedTasks = tasks.filter(task => {
    if (selectedCategory === "All") {
      return true;
    }
    return task.category === selectedCategory;
  });

  // Event handler for deleting a task
  const handleDeleteTask = (taskText) => {
    // Filter out the task that matches the taskText (using text as a unique identifier)
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    setTasks(updatedTasks);
  };

  // Event handler for category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Event handler for adding a new task (onTaskFormSubmit prop requirement)
  const handleTaskFormSubmit = (newTask) => {
    // Add the new task to the tasks state array
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2 style={{textAlign: "center"}}>TaskMaster 📝</h2>
      
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit} // Required callback prop
      />
      
      <TaskList 
        tasks={displayedTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
