import React, { useState, useEffect } from 'react'
/*  1)Import useEffect hook from react call it within the fucntional component
      and pass in the function that needs to be executed after every render
      of that component
      we can easily use the state and props of the component since the useEffect hook
      is always written inside the functional component.
    2)In order to conditionally render the useEffect hook specify the parameters (in
      an array form) over which the useEffect should run. (in this case 
        it is <count> variable)
  */
function UseEffectHookCounter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log("UseEffect - Updating document title")
    document.title = `Clicked ${count} times`
  }, [count])

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        Click {count} times
        </button>
    </div>
  )
}

export default UseEffectHookCounter
