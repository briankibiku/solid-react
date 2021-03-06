import React, { useState, useEffect } from "react";
import { getCryptoRates } from "../services/api";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let mounted = true;
    document.title = `Your are on count ${count}`;
    getCryptoRates().then((items) => {
      if (mounted) {
        setResponse(items);
        console.log(response);
        console.log("-->APICALL<--");
      }
    });
    return () => (mounted = false);
    // No idea why this error is here
  }, []);
  // here the use effect does a cleanup by returning a function
  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, [open]);

  return (
    <>
      <p>
        The Effect Hook, useEffect, adds the ability to perform side effects
        from a function component. It serves the same purpose as
        componentDidMount, componentDidUpdate, and componentWillUnmount in React
        classes, but unified into a single API
      </p>
      <p>--- Some effects might require cleanup so they return a function:</p>
      <pre>
        {
          " {useEffect(() => {function handleStatusChange(status) {setIsOnline(status.isOnline);}ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);"
        }
        {
          "return () => { ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)}})} "
        }
      </pre>
      {/* <p>{response?.bpi?.chartName}</p> */}
      <code>
        useEffect(() = {(document.title = `Your are on count ${count}`)})
      </code>
      <p>You can use multiple useEffects to seperate concern.</p>
      <p>--- SKIPPING EFFECT IN CASE THE PROP DOES NOT CHANGE</p>
      <pre>
        {
          "useEffect(() => {document.title = `You clicked ${count} times`;}, [count])"
        }
      </pre>
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
