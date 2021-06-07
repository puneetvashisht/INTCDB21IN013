import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import MainHeader from './components/MainHeader/MainHeader';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";



function App() {

  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  


  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  const setTokens = (data) => {
    console.log('called to authenticate' ,data)
    setIsAuthenticated(data);
    console.log(isAuthenticated)
    
  }


  return (
    
<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated: setTokens  }}>
      <Router>
        <div>
        <MainHeader />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>

    // <React.Fragment>
    //   <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
    //   <main>
    //     {!isLoggedIn && <Login onLogin={loginHandler} />}
    //     {isLoggedIn && <Home onLogout={logoutHandler} />}
    //   </main>
    // </React.Fragment>
  );
}

export default App;
