import React from "react";
import CustomHook from "./CustomHook";
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
        <h4>3. Custom Hooks</h4>
        <CustomHook />
        <MouseTracker />
      </div>
    </>
  );
};

export default Hooks;
