"use client";
import React, { useCallback, useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100; i++) {
    num += 1;
  }
  return num;
};

const Page = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("");
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  //   const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new todo"]);
  }, []); // Removed `todos` dependency

  return (
    <div style={{ backgroundColor }}>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <input type="text" onChange={(e) => setBackgroundColor(e.target.value)} />
    </div>
  );
};

export default React.memo(Page);
