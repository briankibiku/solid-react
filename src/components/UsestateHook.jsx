import { React, useState } from "react";

const UsestateHook = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount(count + 1);
  };

  return (
    <>
      {" "}
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
      <br />
      <code>const [count, setCount] = useState(0)</code>
    </>
  );
};

export default UsestateHook;
