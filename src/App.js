import React from 'react';
import Login from './Login';
import './App.css';
import { users } from './_DATA';

function App() {
  return (
    <div className="App">
      <Login users={users}/>
    </div>
  );
}

export default App;
