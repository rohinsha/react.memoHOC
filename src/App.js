//by using react.memo and usecallback for addtodos as just with react.memo child comp was not stoping rendering again and again as always when the count state changes, all the functions in app will be freshly created and that is why referential equality of addtodos will always fail, as it will always assume that a new copy is getting passed to the child and the child component would still rerendered, only callback function is responsible in rendering the child component again and again.
import "./styles.css";
import React, { useState, useCallback } from "react";
import Todos from "./Todos";
export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([2, 3, 4, 5, 6]);

  function increment() {
    console.log("incrementing the count");
    setCount((prev) => prev + 1);
  }
  // const addTodos = useCallback(() => {
  //   console.log("adding the todos");
  //   setTodos((prev) => [...prev, "new todo"]);
  // }, []);

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => increment()}>increment the count</button>
      <Todos todos={todos} />
    </div>
  );
}
