import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  /* [NOTE]
      To make the useEffect run like ComponentDidMount we set dependency array
        as an empty array
      To make the useEffect run like ComponentWillUnmount we set the 
        return function which will unmount
      *** The most important thing: ***
      Always add the dependency in the dependency array.
  */
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
