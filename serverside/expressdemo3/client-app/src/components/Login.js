import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {name: '', password: ''}
    }


    handleNameChange(event){
        this.setState({name: event.target.value});
    }
    
    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    login(){
        fetch('http://localhost:8080/users/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                if(data.auth){
                    // go to profile page
                    this.props.history.push("/profile");
                }
                else{
                    //display a message
                    this.setState({ message: "Wrong username/password!! ", name: '', password: '' })
                }
            })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <div className="alert alert-primary" role="alert">
                {this.state.message}
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input type="text" onChange={this.handleNameChange.bind(this)} value={this.state.name} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

               
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Password</span>
                <input type="password" onChange={this.handlePasswordChange.bind(this)} value={this.state.password} className="form-control" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <button onClick={this.login.bind(this)}  className="btn btn-primary">Register</button>

            </div>
        )
    }
}
