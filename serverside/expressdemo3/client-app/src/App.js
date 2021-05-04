import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile" component={Profile}>
          
          </Route>
          <Route path="/register" component={Register}>
            {/* <Register /> */}
          </Route>
          <Route path="/" component={Login}>
            {/* <Login /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

