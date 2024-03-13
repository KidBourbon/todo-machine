import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

import "./styles.css";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("");

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   addTodo(newTodoValue);
  //   setOpenModal(false);
  // };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onClickAddButton = () => {
    addTodo(newTodoValue);
    onCancel();
  };

  return (
    <form>
      <label>Type a new todo</label>

      <textarea placeholder="Learn React.js" onChange={onChange} />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="button"
          className="TodoForm-button TodoForm-button--add"
          onClick={onClickAddButton}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
