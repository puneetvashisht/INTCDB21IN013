import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions/auth-actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'

import PrivateRoute from "./components/PrivateRoute";
import AddWorkout from "./components/AddWorkout";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthService from './services/auth'
import WorkoutOperations from "./components/WorkoutOperations";
import WeightLogView from "./components/WeightLogView";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App(props) {


  // const [authenticated, setAuthenticated] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  // const [message, setMessage] = useState('');

  // initialization 
  useEffect(() => {
    // setAuthenticated(AuthService.isAuthenticated())
    // setShowAdmin(AuthService.isAdmin())
    console.log('Admin role: ', showAdmin)
;  }, [])

  // let nav = authenticated ? (<ul>
  //   <li>
  //     <Link to="/addworkout">Add Workout</Link>
  //   </li>
  //   <li>
  //     <Link to="/dashboard">Dashboard</Link>
  //   </li>
  //   <li><a href="#" onClick={() => AuthService.logout()}>Logout</a></li>
  // </ul>) : (<ul><li>
  //   <Link to="/">Login</Link>
  // </li>
  //   <li>
  //     <Link to="/register">Sign Up</Link>
  //   </li></ul>);

  console.log('render again..', showAdmin)

  return (

    <Router>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PWT App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.authenticated &&<Nav.Link href="#home"><Link to="/dashboard">Dashboard</Link></Nav.Link>}
            {props.authenticated &&<Nav.Link href="#home"><Link to="/weights">Weight View</Link></Nav.Link>}
            {props.authenticated &&<Nav.Link href="#home"><a href="#" onClick={()=>props.onUserLogout()}>Logout</a></Nav.Link>}
            {showAdmin && <Nav.Link href="#link"><Link to="/addworkout">Add Workout</Link></Nav.Link>}
            
            {!props.authenticated && 
              <>
              <Nav.Link href="#link"><Link to="/">Login</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/register">Register</Link></Nav.Link>
              </>
            }
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
       
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Login}>  
        </Route>
        <Route path="/register" component={Register}>
        </Route>
        <PrivateRoute path="/addworkout" component={AddWorkout}>
        </PrivateRoute>
        <Route path="/dashboard" component={Dashboard}>
        </Route>
        <Route path="/weights" component={WeightLogView}>
        </Route>
        <Route path="/operations/:title" component={WorkoutOperations}>
        </Route>

      </Switch>

 
    </Router>
   
    // <Router>
    //   <div>
        

    //     <ul>
    //     {showAdmin && <li>
    //       <Link to="/addworkout">Add Workout</Link>
    //     </li>}
    //     {authenticated && <li>
    //   < Link to="/dashboard">Dashboard</Link>
    //     </li>}
    //     {authenticated && <li><a href="#" onClick={() => AuthService.logout()}>Logout</a></li>}

    //     {!authenticated && <><li>
    //       <Link to="/">Login</Link>
    //     </li>
    //     <li>
    //       <Link to="/register">Sign Up</Link>
    //     </li></>}

    //     </ul>
        
        
    //     <hr />

       
    //     <Switch>
    //       <Route exact path="/" component={Login}>
    //       </Route>
    //       <Route path="/register" component={Register}>
    //       </Route>
    //       <Route path="/addworkout" component={AddWorkout}>
    //       </Route>
    //       <Route path="/dashboard" component={Dashboard}>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}



const mapStateToProps = (state) => {
  console.log('Inside Component ', state);
  return {
    authenticated: state.authReducer.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogout: (user)=>dispatch(actions.login(false))
  }
}


// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(App);