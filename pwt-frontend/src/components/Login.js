import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import {connect} from 'react-redux';
import * as actions from '../actions/auth-actions';

function Login(props){

    let history = useHistory();
    const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        console.log('registering a user');
        let user = {email, password}
        console.log(user)
        props.onUserLogin(user);
    
    //     AuthService.login(user)
    //    .then(()=> {
    //        console.log('in Login component.......')
    //        history.push("/dashboard");
    //        window.location.reload();
    //    })
    //    .catch(err => {
    //        console.log('In login catch .......')
    //        console.log(err);
    //        setMessage(err.message);
    //     });


    }
  
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return(
        <>
        <h2>Login</h2>
        {/* <h3>{message}</h3> */}
        <input onChange={onEmailChange} value={email} type="email" placeholder="Enter email"/>
        <input onChange={onPasswordChange} value={password} type="password" placeholder="Enter password"/>
        <button onClick = {login}>Login</button>
        </>
    );
}


const mapDispatchToProps = (dispatch) => {
  return {
      onUserLogin: (user)=>dispatch(actions.userLogin(user))
  }
}

export default connect(null, mapDispatchToProps)(Login);