import React, { Component } from 'react'

export default class AddEmployee extends Component {

    constructor() {
        super();
        this.state = { name: 'eeee', message: '', salary: 34343 };
        // this.name = React.createRef();
        // this.salary = React.createRef();
        // this.state = {}
    }


    handleChange(event) {

        if (event.target.value.length < 5) {
            console.log('should be at least 5 characters')
            this.setState({ nameerror: 'should be at least 5 characters' })
            // show an error message .. validation..
        }

        console.log(event.target.value)
        this.setState({ name: event.target.value })
    }

    handleSalaryChange(event) {
        console.log(event.target.value)
        this.setState({ salary: event.target.value })
    }

    addEmployee(event) {
        console.log('Add employee method...');
        // get the values of name, salary

        console.log('A name was submitted: ' + this.state.name);
        console.log('A salary was submitted: ' + this.state.salary);
        event.preventDefault();

        // invoke http post by using fetch

        fetch('http://localhost:3004/employees/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.state.name, salary: this.state.salary })
        })
            .then(res => {
                console.log(res.status);
                if (res.status === 201) {
                    this.setState({ message: "Successfully inserted", name: '', salary: '' })

                }
            })
    }

    render() {


        if (this.state.message) {
            var message = (<div className="alert alert-success" role="alert">
                {this.state.message}
            </div>)
        }


        return (

            <>

                {message}
                <div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                        <input onChange={this.handleChange.bind(this)} value={this.state.name} type="text" className="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1" />
                        <div className="invalid-feedback">
                            Some value {this.state.nameerror}
                        </div>
                    </div>

                    <form class="was-validated">
                    <div className="col-md-4">
                        <label forName="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input onChange={this.handleChange.bind(this)} value={this.state.name} type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" />
                            {/* <input id="validationCustomUsername" onChange={this.handleChange.bind(this)} value={this.state.name} type="text" className="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1" /> */}
                            <div id="validationServerUsernameFeedback" className="invalid-feedback">
                             Please choose a username.
                             </div>

                             <div id="validationServerUsernameFeedback" className="invalid-feedback">
                             {this.state.nameerror}
                             </div>
                        </div>
                    </div>
                    </form>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Salary</span>
                        <input onChange={this.handleSalaryChange.bind(this)} value={this.state.salary} type="text" className="form-control" placeholder="Enter salary" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <button type="button" onClick={this.addEmployee.bind(this)} className="btn btn-primary">Add Employee</button>

                </div>
            </>
        )
    }
}
