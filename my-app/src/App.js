import React, { useEffect, useRef, useState } from "react";
import TodoList from "./component/todoList";
import "./style/App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, text: "text0", isDone: false },
    { id: 1, text: "text1", isDone: true },
    { id: 2, text: "text2", isDone: false },
    { id: 3, text: "tex3", isDone: false },
    { id: 4, text: "text4", isDone: false },
    { id: 5, text: "text5", isDone: false },
    { id: 6, text: "text6", isDone: false },
    { id: 7, text: "text7", isDone: false },
    { id: 8, text: "text8", isDone: false },
  ]);
  const [maxId, setMaxId] = useState(tasks.length);
  const createTask = (task) => {
    setMaxId(maxId + 1);
    task = {
      ...task,
      id: maxId,
    };
    setTasks([...tasks, task]);
    console.log(tasks);
  };

  const deleteDoneTasks = () => {
    setTasks(tasks.filter((t) => t.isDone === false));
  };
  return (
    <TodoList
      tasks={tasks}
      create={createTask}
      deleteTasks={deleteDoneTasks}
    ></TodoList>
  );
}

export default App;
