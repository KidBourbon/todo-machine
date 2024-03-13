import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

import "./styles.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      You have completed <span>{completedTodos}</span> of{" "}
      <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
