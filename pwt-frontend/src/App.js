import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddWorkout from "./components/AddWorkout";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthService from './services/auth'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {


  const [authenticated, setAuthenticated] = useState(false);
  // const [message, setMessage] = useState('');

  // initialization 
  useEffect(() => {
    setAuthenticated(AuthService.isAuthenticated())
  }, [])

  let nav = authenticated ? (<ul>
    <li>
      <Link to="/addworkout">Add Workout</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li><a href="#" onClick={() => AuthService.logout()}>Logout</a></li>
  </ul>) : (<ul><li>
    <Link to="/">Login</Link>
  </li>
    <li>
      <Link to="/register">Sign Up</Link>
    </li></ul>);

  return (
    <Router>
      <div>
        {nav}
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <Route path="/register" component={Register}>
          </Route>
          <Route path="/addworkout" component={AddWorkout}>
          </Route>
          <Route path="/dashboard" component={Dashboard}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




