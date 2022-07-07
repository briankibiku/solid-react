import React, { useEffect, useState } from "react";

export default function useGetCatFact() {
  const [catFact, setCatfact] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await fetch("https://catfact.ninja/fact");
      const nameRes = await fetch("https://api.agify.io/?name=brian")


      const catFactNow = await res.json();
      await setCatfact(catFactNow);


      const nameNow = await nameRes.json();
      await setName(nameNow);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
<>
    <div>{catFact.fact}</div>
    <div>{name.name}</div>
</>
    )
}
