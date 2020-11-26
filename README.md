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


### useCallback Hook
    - What is useCallback Hook
        - useCallback is a hook that will return a "memoized" [memoized meaning in computation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.] version of the callback
            function that only changes if one of the dependencies has changed
        - useCallback hook will "Cache" other functions ie incrementSalary function
            in our example and return that if the salary is not incremented 
            if the salary does increment ie the dependency has changed only then 
            a new function would be returned.
    - Why do we need it
        - It is useful when passing callbacks to optimized child components that rely on
            reference equality to prevent unncessary renders.
            The child components are optimized by "React.memo" function.
        - By doing this we can achieve performance optimizations
    - How to use it
        1) Import useCallback in the parent component
        2) Call the useCallback which accepts 
            i)  a callBack function [first parameter] 
            ii) an array of dependencies as the second parameter.



### useMemo Hook
    - What is useMemo Hook
        - This hook also is for performance optimization just like the useCallback
        - useMemo hook will return 
        - useMemo hook will only recompute the cache value when one of the 
            dependency has changed
    - why/Requirement
        - Everytime the state updates the component rerenders all the function
            pertaining to the functional component gets run. 
        - So this method basically tells react  which values not to 
            calculate unneccessarily.
    - How to use it
        1) Import useMemo in the component
        2) Call the useMemo which accepts 
            i) we pass in a function whose return value needs to be cached.
            ii) an array of dependencies as the second parameter.


###### [Note]
useCallback: Caches the provided function instance
useMemo: Invokes the provided function & caches the result


### useRef Hook
<!-- Need to go through other videos for better understanding -->


### 

