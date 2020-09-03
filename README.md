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

### useContext Hook
    - This is an extension of react-Context-API.
        - [ContextAPI briefly explained]
            - Consider a react application which has many components
                you want to use the props used at the very root component
                at subsequent child component; for that you would have
                push that props in every child component in between the
                root and the "required child component".
            - ContextAPI provides a way to pass data thorugh the component
                tree without having to pass props down manually at every level
            - [Working of ContextAPI]
                1) Create the context (in the root component) using 
                    createConext method [wherein the value of props resides]
                2) Provide this context with a value and the provider
                    must wrap the children component for value to be
                    available
                3) The "required child component" will use the context value
                    using context-consumer.
                4) For multiple values you must nest the requried chilren
                    component within the context-providers. 
                    [and consuming the same becomes very difficult]

        - React useContext hook makes the consumption of the context simpler.
        - [Working]
            1) Create the context (in the root component) using 
                createConext method
            2) Provide the context value at a high-level in the context
                tree using the "Provider" method inside "CreateContext"
                method
            3) import the useContext hook & import the necessary 
                context-provider from higher-level component in the tree
            4) pass in the context-provider in the useContext method
                and set the useContext hook to a variable.

### useReducer Hook
    - useReducer is hook that is used for state management in React
    - useReducer takes in two parameters 
        1. reducer function
        2. initialState
    - it is similar reducer in react-redux; the reducer function in
        react-redux takes has two parameters 
        1. currentState
        2. action
        depending upon these parameter the reducer who return a new state.