import React from "react";
import useGetCatFact from "../hooks/useGetCatFact";
import useGetGender from "../hooks/useGetGender";

export default function CustomHook() {
  const catFact = useGetCatFact();
  const gender = useGetGender();
  // console.log("RANDOM PIC");
  // console.log(GetRandomPic());
  // const apiResponse = GetRandomPic();
  // const chartName = apiResponse.bpi.chartName;
  const genderColor =
    gender === "male" ? (
      <h6 style={{ color: "red" }}>Gender</h6>
    ) : (
      <h6 style={{ color: "green" }}>Gender</h6>
    );
  return (
    <>
      <div>
        <ul>
          <li>✅ Call Hooks from React function components.</li>
          <li>
            ✅ Call Hooks from custom Hooks (we’ll learn about them on the next
            page).
          </li>
        </ul>
        <h5>Random Cat Fact From a Beautiful API</h5>
        <p>{catFact}</p>
        <div>{genderColor}</div>
        <div>
          <p>{gender}</p>
        </div>
      </div>
    </>
  );
}
