import React from 'react';
import './App.css';
import AllCountryFiles from './components/allCountryFiles';
import Data from './Data.json';

function App() {
  console.log(Data);
  return (
    <div className="App">
      <AllCountryFiles />
    </div>
  );
}

export default App;
