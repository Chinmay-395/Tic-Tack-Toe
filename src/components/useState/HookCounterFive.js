//This is noted from webDevSimplified 
//youtube channel; video --> https://youtu.be/O6P86uwfdR0
import React, { useState } from 'react'
/*  In class-components the states are initialized inside the `constructor`
    method, similarly the initializations in the useState hook works the same.
    So, it takes the function as a parameter as well.
*/
function CountInitial() {
  // console.log("Run")
  return 4
}

function HookCounterFive() {
  const [count, setCount] = useState(() => CountInitial())
  // The below instruction are what been explained in the above commented section
  // const [count, setCount] = useState(CountInitial())

  /* [NOTE]
      The reason we should use the useState(()=>CountInitial()) is that if we
      want to do some complex instruction we should use function it would
      reduce the compute time of the program since the "commented way" will 
      get render again and agian whereas the arrow function (ie "uncommented way")
      will run only once.
  */
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default HookCounterFive
