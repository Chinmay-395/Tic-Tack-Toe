import React, { useReducer } from 'react'
/* [Note]
    We can maintain both state and action as an object
      - by using action as an object we are able to pass additional data to the
        reducer function
      - by using state as an object we are able to keep track of 
        multiple state variables
    - Now this approach to maintain multiple state variables in a single state
      object is suited when dealing with global state
      To deal with local state their is another way
      
*/
const initialState = {
  firstCounter: 0,
  secondCounter: 10
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>firstCounter - {count.firstCounter}</div>
      <div>SecondCounter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement by 5</button>
      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment2</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrement2</button>
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}

export default CounterTwo
