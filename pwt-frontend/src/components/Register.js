
import React, { useState } from 'react'

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        console.log('registering a user');
        let user = {name, email, password}
        console.log(user)
    
       fetch('http://localhost:8080/api/v1/users', {
           headers: {
               'content-type': 'application/json',
           },
           method: 'POST',
           body: JSON.stringify(user)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
           if(data.success){
               localStorage.setItem('token', data.token);
               // show an alert message or transition into dashboard component

           }
       })
    }
    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return(
        <>
        <h2>Register</h2>
        <input onChange={onNameChange} value={name} type="text" placeholder="Enter name"/>
        <input onChange={onEmailChange} value={email} type="email" placeholder="Enter email"/>
        <input onChange={onPasswordChange} value={password} type="password" placeholder="Enter password"/>
        <button onClick = {register}>Register</button>
        </>
    );
}

export default Register;