import React, { useState } from "react";
import TodoForm from "./TodosForm/TodoForm";
import List from "./TodosList/List";
import './style/styles.css'

const TodoApp = () => {
  const [todos, setTodos] = useState([{todoText:"asdf", isChecked: true},{todoText:"sadf", isChecked: false}]);
  return (
    <div className="todo--app">
      <TodoForm todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
