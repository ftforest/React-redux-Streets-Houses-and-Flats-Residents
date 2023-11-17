import React from 'react';
import logo from './logo.svg';
import './App.css';
import StreetsSlice from "./features/streets/streetsSlice";
import StreetsTree from "./features/streets/StreetsTree";

function App() {
  return (
    <div id="App">
      <StreetsTree />
    </div>
  );
}

export default App;
