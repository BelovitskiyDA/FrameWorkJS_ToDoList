import React, { useState } from "react";
import TodoItem from "./todoItem";

const TodoList = ({ tasks, create, deleteTasks }) => {
  const [title, setTitle] = useState("");
  const createTask = () => {
    let task = {
      text: title,
      isDone: false,
    };
    create(task);
  };
  return (
    <div className="container">
      <header>
        <h1 className="mainTitle">Daily To Do List</h1>
        <div className="form-field">
          <input
            type="text"
            className="addInput"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {title ? (
            <button className="addButton" onClick={createTask}>
              Add
            </button>
          ) : (
            ""
          )}
        </div>
      </header>
      <div className="tasks">
        {tasks.map((t) => (
          <TodoItem task={t} key={t.id}></TodoItem>
        ))}
      </div>
      <footer>
        <hr />
        <p className="counter"> 5 item selected</p>
        <button className="button-81" onClick={deleteTasks}>
          Clear All
        </button>
      </footer>
    </div>
  );
};

export default TodoList;

{
  /* <h1 class="mainTitle">Daily To Do List</h1>

<div class="tasks">
    <app-task *ngFor="let item of tasks" [task]="item"></app-task>
</div>

<hr/>
<p class="counter">{{tasks.length}} item selected</p>
<p class="clear" (click)="Clear()">Clear All</p>
</div> */
}
