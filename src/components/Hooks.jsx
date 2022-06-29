import React from "react";
import MouseTracker from "./MouseTracker";
import UseEffectHook from "./UseEffectHook";
import UsestateHook from "./UsestateHook";

const Hooks = () => {
  return (
    <>
      <p>Let you use state and other React features without writing a class.</p>
      <div>
        <h4>1. useState</h4>
        <UsestateHook />
        <h4>2. usEffect</h4>
        <UseEffectHook />
        <MouseTracker />
      </div>
    </>
  );
};

export default Hooks;
