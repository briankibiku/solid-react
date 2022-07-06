import React, { useEffect, useState } from "react";

export default function useGetGender() {
  const [gender, setGender] = useState("");
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/");
      const results = await res.json();
      await setGender(results.results[0].gender);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return <div>{gender}</div>;
}
