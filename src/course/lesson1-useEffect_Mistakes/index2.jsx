import React, { useEffect, useState } from 'react'

function Lesson1_1() {
  const [number, setNumber] = useState(0);

  // when the number change, effects will run , it create setInterval(setNumber({currentNum } + 1 ), 1000)
  // it mean it create > n + 1 setInterval (n is second), and it not be cleared => memory leak
  useEffect(() => {
    console.log("effect");
    // create interval to update number every second ( after 1 second, react read the latest number value, and add 1 to it)
    const interval = setInterval(() => {
      setNumber(prev => prev + 1); 
    }, 1000);

    // add clean up for useEffect to clear the interval when number change or component unmount
    return () => {
      clearInterval(interval);
    }
  },[])
  // remove dependency in useEffect, so the effect only run once when component mount


  return (
    <div>{number}</div>
  )
}

export default Lesson1_1