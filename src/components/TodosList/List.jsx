import React, { useEffect, useState } from "react";

const List = ({ todos, setTodos }) => {
  const [category, setCategory] = useState(null);
  //! CHANGE CHECK
  const changeCheck = (todo) => {
    let changedTodo = [...todos];
    changedTodo.filter((el) => {
      el == todo && (el.isChecked = !el.isChecked);
    });
    setTodos(changedTodo);
  };

  //! FILTERED ARRAY
  let filtered;
  if (category == null) {
    filtered = todos;
  } else {
    filtered = todos.filter((todo) => todo.isChecked == category);
  }

  //! CLEAR COMPLETED TODOS

  const clearCompleted = () => {
    let completed = todos.filter((todo) => {
      return todo.isChecked == false;
    });

    setTodos(completed);
  };

  //! COUNTER ACTIVE TODOS
  let counter = 0;
  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].isChecked) {
      counter++;
    }
  }

  return (
    <div className="todo--app__list">
      {filtered.map((todo, index) => {
        return (
          <div key={index} className="todo--app__list--todo">
            <input
              className="todo--app__list--todo__checkbox"
              onChange={() => changeCheck(todo)}
              type="checkbox"
              checked={todo.isChecked}
            />
            <span
              id={todo.isChecked ? "gray" : " "}
              className="todo--app__list--todo__text"
            >
              {todo.todoText}
            </span>
          </div>
        );
      })}

      <div className="actions">
        <p>
          <span>{counter}</span> items left
        </p>
        <ul>
          <li>
            <button onClick={() => setCategory(null)}>All</button>
          </li>
          <li>
            <button onClick={() => setCategory(false)}>Active</button>
          </li>
          <li>
            <button onClick={() => setCategory(true)}>Completed</button>
          </li>
        </ul>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
};

export default List;
