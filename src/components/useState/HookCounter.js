import React, { useState } from 'react'
/* A `useState` hook allows you to add state to a functional component.
   The hook returns a tuple where the first parameter is the current state
    of the counter and setCount is the method that will allow us
    to update the counter's state.
*/
function HookCounter() {
  const [count, setCount] = useState(0)
  /*How to implement a useState
    <count> --> current state
    <setCount> --> the method that will update the count
    the `useState` hook is initialized with a value inside the parenthesis
    which is in this case zero.  
  */
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>COunt {count}</button>
    </div>
  )
}

export default HookCounter
