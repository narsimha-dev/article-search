import React from 'react';
import './App.css';
import SearchBar from './component/SearchBar';
import RouterPath from './component/RouterPath';

function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <div className="container">
        <RouterPath/>
             <SearchBar/>
    </div>
    </div>
  );
}

export default App;
