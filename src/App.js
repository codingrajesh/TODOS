import "./styles.css";
import React from "react";
<<<<<<< HEAD
import Addition from "./components/Addition.jsx";
import Todo from "./components/Todo.jsx";
=======
import Addition from "../components/Addition.jsx";
import Todo from "../components/Todo.jsx";
import {useState} from 'react';
>>>>>>> 33e2c22da8bb5d05d7998bb7cdf8d23708d9b9ba
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
