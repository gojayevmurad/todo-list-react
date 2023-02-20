import React, { useEffect, useState } from "react";



const initialTodo = { todoText: "", isChecked: false };
const TodoForm = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState(initialTodo);

  const onChangeTodo = (e) =>
    setTodo({ ...todo, [e.target.name]: e.target.value });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (todo.todoText.trim() == "") return false;

    setTodos([...todos, todo]);
    setTodo(initialTodo)
    event.target.todoText.value = ''
    return true;
  };

  return (
    <form className="todo--app__form" onSubmit={onFormSubmit}>
      <input placeholder="Enter new todo" name="todoText" type="text" onChange={onChangeTodo} />
    </form>
  );
};

export default TodoForm;
