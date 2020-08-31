import React, { useState, useEffect } from 'react'

function UseEffectHookCounter() {
  const [count, setCount] = useState(0)
  /*  Import useEffect hook from react call it within the fucntional component
      and pass in the function that needs to be executed after every render 
      of that component
      we can easily use the state and props of the component since the useEffect hook
      is always written inside the functional component.

  */
  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click {count} times
        </button>
    </div>
  )
}

export default UseEffectHookCounter
