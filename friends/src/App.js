import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login.js'
import Friends from './components/Friends.js' 
// /friends
function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
