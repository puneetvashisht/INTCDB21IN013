import React, { Component } from 'react'

export default class ViewEmployees extends Component {

    constructor(){
        super();
        this.state = {message: ''}

    }


    deleteEmployee(id){
        console.log('Delete employee: ', id)

        fetch('http://localhost:3004/employees/' + id, {method: 'DELETE' })
        .then(res=>res.json())
        .then(data=>
        {
            console.log(data);
            this.setState({message: 'Record successfully deleted'})
            // this.setState({employees: data})

        });
    }
   

    render() {

        console.log(this.props.employees);

          let employeeList = this.props.employees.map((employee, i)=>{
            return (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{employee.name}</td>
                        <td>{employee.salary}</td>
                        <td><button type="button" onClick={this.deleteEmployee.bind(this, employee.id)} className="btn btn-danger"> X </button></td>
                    </tr>
            );
    })


    if(this.state.message){
       var message = ( <div class="alert alert-success" role="alert">
           {this.state.message}
       </div>)
   }
        return (
            <>
            
            {message}

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList}
                </tbody>
            </table>
            </>
        )
    }
}
