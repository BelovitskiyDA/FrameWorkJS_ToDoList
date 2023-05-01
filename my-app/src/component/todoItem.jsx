import React, { useState } from "react";

const TodoItem = ({ task }) => {
  const [checked, setChecked] = useState(task.isDone);
  return (
    <div className="checkboxContainer">
      <input
        type="checkbox"
        className="checkbox"
        id={task.id}
        checked={checked}
        onChange={(e) => {
          setChecked(!checked);
          task.isDone = !task.isDone;
        }}
      />
      <label htmlFor={task.id} className="checkboxText">
        {task.text}
      </label>
    </div>
  );
};

export default TodoItem;
