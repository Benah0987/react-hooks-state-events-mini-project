import React from "react";
import CategoryFilter from "./CategoryFilter";
//add props category,text, onDelete
function Task({category,text, onDelete}) {

  function handleDelete() {
    //onDelete is a function, removes the task
    onDelete()
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick = {handleDelete}>X</button>
    </div>
  );
}

export default Task;
