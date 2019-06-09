import React from "react";
import TodoList from "./TodoList";
import { AddTodo } from "./AddTodo";

export class App extends React.Component {
  state = { todos: [{ id: 0, title: "already there", checked: false }] };

  handleCheck = todoId => {
    this.setState((state, props) => {
      return {
        todos: state.todos.map(todo =>
          todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
        )
      };
    });
  };

  handleAddTodo = title => {
    this.setState((state, props) => {
      return {
        todos: [
          ...state.todos,
          { id: state.todos.length, title, checked: false }
        ]
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <AddTodo handleSubmit={this.handleAddTodo} />
        <TodoList handleCheck={this.handleCheck} todos={this.state.todos} />
      </div>
    );
  }
}
