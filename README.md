# what are React-hooks
    Hooks are a new feature addition in React version 16.8 which allow
    you to use React features without having to write a class.  
## Rules of Hooks
    1. Only call Hooks at the Top Level
      ==> Don't call Hooks inside loops,conditions or nested function
    2. Only call Hooks from React Functions
      ==> Call them from within React functional components and not just any 
          regular javaScript function


### useState Hook
    - A `useState` hook allows you to add state to a functional component.
    - The hook returns a tuple where the first parameter is the current state
        of the <counter> and <setCount> is the method that will allow us
        to update the counter's state.
    - In class-components the state is always an object
        using the useState hook, the state doesn't have to be an object.
    - In case your new state value depends on the previous state value you 
        can pass a function to the setter function.


### useEffect Hook
    - This hook lets you perform side effects in functional components
    - It is a close replacement for componentDidMount, ComponentDidUpdate 
        & ComponentWillMount
    - useEffect is a method just like the useState Hook; this useEffect 
        method run everytime the component renders.