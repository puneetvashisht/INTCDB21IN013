import React from 'react';

import classes from './Navigation.module.css';
import { useAuth } from "../../context/auth";
import {Link} from 'react-router-dom';


const Navigation = (props) => {

  const {isAuthenticated,setIsAuthenticated} = useAuth();
  console.log('In navigation ', isAuthenticated)

  return (
    <nav className={classes.nav}>
      <ul>
        {isAuthenticated && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={()=>setIsAuthenticated(false)}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
