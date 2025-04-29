import "./styles.css";
import React from "react";
import Addition from "./components/Addition.jsx";
import Todo from "./components/Todo.jsx";
export default function App() {
  return (
    <>
      <div className="App">
        <Addition />
        <Todo />

      </div>
    </>
  );
}
