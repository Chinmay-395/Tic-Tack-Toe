import React from 'react';
import './App.css';
import DataFetchingOne from './components/useReducer/DataFetchingOne';
import DataFetchingTwo from './components/useReducer/DataFetchingTwo';

function App() {
  return (
    <div className="App">
      <h1>useReducer with useContext</h1>
      {/* <DataFetchingOne /> */}
      <DataFetchingTwo />
    </div>
  );
}

export default App;
