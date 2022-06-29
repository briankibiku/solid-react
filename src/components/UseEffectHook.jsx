import React, { useState, useEffect } from "react";
import { getCryptoRates } from "../services/api";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState({});
  useEffect(() => {
    let mounted = true;
    document.title = `Your are on count ${count}`;
    getCryptoRates().then((items) => {
      if (mounted) {
        setResponse(items);
        console.log(response);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <>
      <p>
        The Effect Hook, useEffect, adds the ability to perform side effects
        from a function component. It serves the same purpose as
        componentDidMount, componentDidUpdate, and componentWillUnmount in React
        classes, but unified into a single API
      </p>
      <code>
        useEffect(() => {(document.title = `Your are on count ${count}`)})
      </code>
      <h6>Bitcoin Rate From Coinbase</h6>
      <p>Addition happening... {count}</p>
      <img
        src={`https://source.unsplash.com/random`}
        height="40"
        width="40"
        alt="img"
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add i++
      </button>
    </>
  );
}