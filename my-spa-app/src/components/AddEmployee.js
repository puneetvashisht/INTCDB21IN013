import React, { Component } from 'react'

export default class AddEmployee extends Component {

    constructor(){
        super();
        this.name = React.createRef();
        this.salary = React.createRef();
        this.state = {message: ''}
    }

    addEmployee(event){
        console.log('Add employee method...');
        // get the values of name, salary

        console.log('A name was submitted: ' + this.name.current.value);
        console.log('A salary was submitted: ' + this.salary.current.value);
        event.preventDefault();
        
        // invoke http post by using fetch

        fetch('http://localhost:3004/employees/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.name.current.value, salary: this.salary.current.value })
        })
        .then(res=>{
            console.log(res.status);
            if(res.status === 201){
                this.setState({message: "Successfully inserted"})
            }
        })
    }

    render() {


        if(this.state.message){
            var message = ( <div className="alert alert-success" role="alert">
                {this.state.message}
            </div>)
        }


        return (

            <>

            {message}
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input ref={this.name} type="text" className="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Salary</span>
                    <input ref={this.salary} type="text" className="form-control" placeholder="Enter salary" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <button type="button" onClick={this.addEmployee.bind(this)} className="btn btn-primary">Add Employee</button>
     
            </div>
            </>
        )
    }
}
