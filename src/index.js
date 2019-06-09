import React, { useState } from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import { AddTodo } from "./AddTodo";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState([{ id: 0, title: "already there" }]);

  const handleAddTodo = title => {
    console.log("APP handleAddTodo");

    setTodos(prevTodos => {
      return [...prevTodos, { id: prevTodos.length, title }];
    });
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <AddTodo handleSubmit={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
