import React, { Component } from 'react';
import './App.css';
import DataFetching from './components/useEffect/DataFetching';
// // useState React-Hooks
// import ClassCounter from './components/useState/ClassCounter'
// import HookCounter from './components/useState/HookCounter'
// import HookCounterTwo from './components/useState/HookCounterTwo'
// import HookCounterThree from './components/useState/HookCounterThree'
// import HookCounterFour from './components/useState/HookCounterFour'
// import HookCounterFive from './components/useState/HookCounterFive'
// // useEffect React-Hooks
// import ClassCounterOne from './components/useEffect/ClassCounterOne'
// import ClassMouse from './components/useEffect/ClassMouse'
// import UseEffectHookCounter from './components/useEffect/UseEffectHookCounter'
// import HookMouse from './components/useEffect/UseEffectHookMouse'
// import MouseContainer from './components/useEffect/MouseContainer'
// import IntervalClassCounter from './components/useEffect/IntervalClassCounter'
// import IntervalHookCounter from './components/useEffect/IntervalHookCounter'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>useEffect Hook</h1>
        <DataFetching />
        {/* <h3>Interval ticks</h3>
        <IntervalClassCounter />
        <IntervalHookCounter />
        <br/>
        <h3>MouseContainer</h3>
        <MouseContainer />
        <br />
        <h3>ClassCounterOne</h3>
        <ClassCounterOne />
        <br />
        <h3>ClassMouse</h3>
        <ClassMouse />
        <br />
        <HookMouse />
        <br />
        <h3>UseEffectHookCounter</h3>
        <UseEffectHookCounter />
        <hr /><hr /><hr />
        <h1>useState Hook</h1>
        <h3>Class Counter</h3>
        <ClassCounter />
        <br />
        <h3>HookCounterOne</h3>
        <HookCounter />
        <br /><br />
        <h3>HookCounterTwo</h3>
        <HookCounterTwo />
        <br />
        <h3>HookCounterThree</h3>
        <HookCounterThree />
        <br />
        <h3>HookCounterFour</h3>
        <HookCounterFour />
        <h3>HookCounterFive</h3>
        <HookCounterFive />
        <hr /> */}

      </div>
    );
  }
}

export default App;
