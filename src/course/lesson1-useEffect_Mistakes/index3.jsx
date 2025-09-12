import React, { useEffect, useState } from 'react'

function Lesson1_2() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("effect run !");
    // toggle
    

    // return a cleanup function
    
    return () => {
      console.log('wait! before running the effect, i should clean up previous effect !');
      // clear sthg from the previous effect
      console.log("okey done ! you can run")
    }
  },[toggle])


  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default Lesson1_2