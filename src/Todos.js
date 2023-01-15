import React, { memo } from "react";
function Todos({ todos }) {
  console.log("child render");
  const consoleFunction = () => {
    console.log("child onclick function");
  };
  return (
    <>
      <h4>Add todos</h4>
      {todos.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={() => consoleFunction()}>console function</button>
    </>
  );
}
export default memo(Todos);
