import React, { useState, useEffect } from 'react'
/*  This particular useEffect runs only once after the component is rendered
    basically it simulates componentDidMount
    To do so we need to pass an empty array as the second paramter.
*/
function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useFffect called')
    window.addEventListener('mousemove', logMousePosition)
    /*  When you want to execute a "Component-Clean-Up" code (ie ComponentWillUnmount)
        you include it in a function and return it from the function that is passed
        into useEffect hook as a parameter
    */
    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  )
}

export default HookMouse