import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  // Map over the categories array to create a button for each
  const categoryButtons = categories.map(category => {
    // Determine if the current button is the selected one
    const isSelected = category === selectedCategory;
    
    return (
      <button
        key={category} // Key prop equal to the category (TEST REQUIREMENT)
        className={isSelected ? "selected" : ""} // Apply 'selected' class (TEST REQUIREMENT)
        onClick={() => onCategoryChange(category)} // Call handler on click
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Filter by category</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;