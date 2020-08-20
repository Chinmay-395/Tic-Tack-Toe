import React, { Component } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
class App extends Component {
  render() {
    console.log("Inside the render function")
    return (
      <div className="App">
        <h1>Class Counter</h1>
        <ClassCounter />
        <br />
        <h1>HookCounterOne</h1>
        {/* <ClassCounter /> */}
        <HookCounter />
        <br /><br />
        <h2>HookCounterTwo</h2>
        {console.log("I ran before HookCounterTwo")}
        <HookCounterTwo />
        <br />
        <h3>HookCounterThree</h3>
        <HookCounterThree />
        <br />
        <h3>HookCounterFour</h3>
        <HookCounterFour />
      </div>
    );
  }
}

export default App;
