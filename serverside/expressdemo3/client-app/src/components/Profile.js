import React, { Component } from 'react'

export default class Profile extends Component {

    constructor(){
        super()
        this.state = {users: []}
    }

    componentDidMount() {
        fetch('http://localhost:8080/users')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({users: data})
        })
    }
    

    deleteUser(name){

        fetch('http://localhost:8080/users/'+ name, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            // this.props.history.push("/profile");
            // this.setState({users: data})
        })

    }

    render() {

       let usersList =  this.state.users.map((user, i)=>{
            return (
                <ul key ={i} className="list-group list-group-horizontal">
                    <li className="list-group-item">{user.name}</li>
                    <li className="list-group-item">{user.email}</li>
                    <li className="list-group-item">{user.password}</li>
                    <li className="list-group-item"><button className="btn btn-danger" onClick={this.deleteUser.bind(this, user.name)}> X </button></li>
                </ul>
            )
        })

        return (
            <div>
                <h2>Profile Page</h2>
                {usersList}
                
            </div>
        )
    }
}
