import React, { useState } from "react";
import styles from "./Todo.module.css";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(!inputValue) return
    setTodos([...todos, inputValue]);
    setInputValue("");
  }
  function deleteTodos(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <div className={styles.box}>
        <h1>React Todo App</h1>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={inputValue}
            placeholder="enter new Todo"
            onChange={handleChange}
          />
          <button className={styles.Addbutton} onClick={handleSubmit}>
            Add
          </button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button className={styles.Delbutton} onClick={() => deleteTodos(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
