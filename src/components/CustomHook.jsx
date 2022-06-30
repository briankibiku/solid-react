import React from 'react'
import GetRandomPic from '../hooks/getRandomPic'

export default function CustomHook() {
    console.log("RANDOM PIC")
    console.log(GetRandomPic())
    const apiResponse = GetRandomPic()
    // const chartName = apiResponse.bpi.chartName;
  return (
    <>
    <div>{}</div>
    </>
  )
}
