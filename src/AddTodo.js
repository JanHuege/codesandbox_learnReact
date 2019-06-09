import React, { useState } from "react";

export const AddTodo = props => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.handleSubmit(inputValue);
  };

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput} value={inputValue} type="text" />
      <button>Add Todo</button>
    </form>
  );
};
