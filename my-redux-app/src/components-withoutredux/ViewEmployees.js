import React, { Component } from 'react'

export default class ViewEmployees extends Component {

    constructor(){
        super();
        this.state = {employees: [
            {id: 223, name: "Ravi", salary: 34343},
            {id: 23, name: "Srab", salary: 44343}
        ]}
    }

    deleteEmployees(){
        this.setState({employees: []})
    }

    render() {

        let employeeList = this.state.employees.map((employee, i)=>{
            return (<li>{employee.name}</li>)
        })

        return (
            <div>
                <button onClick={this.deleteEmployees.bind(this)}>Delete All Employees</button>
                <ul>
                    {employeeList}
                </ul>
            </div>
        )
    }
}
