import React from "react";
import { Todo } from "./Todo";

const TodoList = props => {
  return (
    <>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          handleCheck={() => props.handleCheck(todo.id)}
          checked={todo.checked}
          title={todo.title}
        />
      ))}
    </>
  );
};

export default TodoList;
