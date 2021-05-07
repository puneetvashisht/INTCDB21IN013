import React, { Component } from 'react'

export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {name: '', email: '', password: ''}
    }


    handleNameChange(event){
        this.setState({name: event.target.value});
    }
    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    register(){
        console.log(this.state)
        if(this.state.name == '' && this.state.name.length < 5){
             // name is empty,    
        }
        else{
            fetch('http://localhost:8080/users/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            })
                .then(res => {
                    console.log(res.status);
                    if (res.status === 201) {
                        // this.setState({ message: "Successfully inserted", name: '', salary: '' })
                        // browserHistory.push('/profile')
                        // this.props.history.push("/profile")
                        this.props.history.push("/profile");
                    }
                })
        }
        
        
    }

    render() {
        return (
            <div>


                <h2>Registration Page</h2>

                <div className="alert alert-primary" role="alert">
                {this.state.message}
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input type="text" onChange={this.handleNameChange.bind(this)} value={this.state.name} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" onChange={this.handleEmailChange.bind(this)} value={this.state.email} className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Password</span>
                <input type="password" onChange={this.handlePasswordChange.bind(this)} value={this.state.password} className="form-control" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <button disabled={false} onClick={this.register.bind(this)}  className="btn btn-primary">Register</button>


            </div>
        )
    }
}
