import React from 'react';
import { Route, Link, Switch  } from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login.js'
import { PrivateRoute } from './components/auth/PrivateRoute.js'
import Friends from './components/Friends.js' 
import FriendsForm from './components/FriendsForm.js'
function App() {
  return (
    <div className="App">
    <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/friendsForm">New Friend</Link>
      </li>
      <li>
        <Link to="/friends">My Friends</Link>
      </li>
    </ul>

    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>

      <PrivateRoute path='/friends' component={Friends}/>
      <PrivateRoute path='/friendsForm' component={FriendsForm}/>
    </Switch>
    </div>
  );
}

export default App;
