import React from "react";
import Task from "./Task";
//mapping over the tasks array ad rendering task
//passing a key prop for each task
/*import the Task component and each task is passed to
classname task*/
function TaskList(tasks) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task  key ={task.id} task ={task} />
      ))}
    </div>
  );
}

export default TaskList;
