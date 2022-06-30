import React, { useEffect, useState } from "react";

export default function useGetCatFact() {
  const [catFact, setCatfact] = useState("");
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await fetch("https://catfact.ninja/fact");
      const catFactNow = await res.json();
      await setCatfact(catFactNow);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return <div>{catFact.fact}</div>;
}
