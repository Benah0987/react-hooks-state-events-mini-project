import React from "react";
 
//iterate over the categories prop
//button to filter task based on category
function CategoryFilter({categories, onSelectCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key = {category}
         onClick={() => onSelectCategory(category)}>category
         </button>
      ))}
      
    </div>
  );
}

export default CategoryFilter;
