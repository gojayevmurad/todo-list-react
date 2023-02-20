import React, { useEffect, useState } from "react";

const List = ({ todos, setTodos }) => {
  const changeCheck = (index) => {
    let changedTodo = [...todos];
    changedTodo[index].isChecked = !changedTodo[index].isChecked;
    setTodos(changedTodo);
  };

  
  
  const filtered = todos.filter(element=>{
    return 
  })

 

  let counter = 0;

  for (let i = 0; i < todos.length; i++) {
    if (!todos[i].isChecked) {
      counter++;
    }
  }

  return (
    <div className="todo--app__list">
      {todos.map((todo, index) => {
        return (
          <div key={index} className="todo--app__list--todo">
            <input className="todo--app__list--todo__checkbox"
              onChange={() => changeCheck(index)}
              type="checkbox"
              checked={todo.isChecked}
            />
            <span id={todo.isChecked? 'gray': ' '} className="todo--app__list--todo__text">{todo.todoText}</span>
          </div>
        );
      })}

      <div className="actions">
        <p><span>{counter}</span> items left</p>
        <ul>
          <li><button>All</button></li>
          <li><button>Active</button></li>
          <li><button>Completed</button></li>
        </ul>
        <button>Clear completed</button>
      </div>
    </div>
  );
};

export default List;
