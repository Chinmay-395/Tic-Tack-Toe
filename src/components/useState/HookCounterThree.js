import React, { useState } from 'react'
/* In this example the useState would be initialized 
    by an object as the state variable 
*/
function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' })
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })}
        /* The spread operator helps us in updating a specific value
          in this case the `onChange` updates the first-name only;
          without updating the lastName field.
          If we dont use the spread-operator the `onChange` will update
          the entire object from { firstName: '', lastName: '' } 
          to { firstName: whateverTheUserWrote}.
          --------------------------------------------------------------
          The key difference between useState in React-Hooks and setState
          in class-compoments is that the setState will update a specific
          part of th object(ie merge the state); whereas in useState
          we have to do it manually.
        */
        />
        <input
          type="text"
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Ypur First Name is = {name.firstName}</h2>
        <h2>Ypur Last Name is = {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default HookCounterThree
