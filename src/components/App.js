import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
   //updating App to keep track of selected category
   //
  const [selectedCategory, setselectedCategory]= useState("All");
  //selectedCategory initialized with the value of "ALL"
  //if selected category is ALL
  const filteredTasks = selectedCategory === "All"?
  //then display all tasks
  TASKS : 
  //otherwise filter to only include the selected one
  TASKS.filter((task)  =>task.category === selectedCategory);
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}/>
        onSelectCategory={setselectedCategory}

      <NewTaskForm />
      <TaskList tasks ={filteredTasks}/>
    </div>
  );
}

export default App;
