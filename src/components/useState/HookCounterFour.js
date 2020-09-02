import React, { useState } from 'react'

function HookCounterFour() {
  const [items, setItems] = useState([])
  /* initializing the useState hook with empty array */
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  /* As we know the setter function (ie setItems in this case)
     doesn't automatically updates and merges we have to do it
     manually using the spread operator.
     In this example we handle this by spreading the items array
     and then we push the new object where the <id> is items.length
     and <value> is random integer between 1 to 10.
     Explaination for the spread-Operator use in this example:-
      we make a copy of all the items in the array using the spread-Operator
      to that list of copied item we append another object that way we
      are not overiding the original-array(the concept of not overiding 
        is similar to using prevState[ie an instance of the state] 
        instead of updating the actual state)
  */
  return (
    <div>
      {/* {console.log("The item array", items)} */}
      <button onClick={addItem}>Add a number</button>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.value}</li>)
        }
      </ul>
    </div>
  )
}

export default HookCounterFour
