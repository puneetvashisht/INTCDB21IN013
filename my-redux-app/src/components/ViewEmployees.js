import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/action'

class ViewEmployees extends Component {

    deleteEmployee(id){
        // dispatch an action from here
        this.props.onDeleteEmployee({id});
    }

    render() {

        let employeeList = this.props.employees.map((employee, i)=>{
            return (<li>{employee.name}  <button onClick={this.deleteEmployee.bind(this, employee.id)}> X </button></li>)
        })

        return (
            <div>
               
                <ul>
                    {employeeList}
                </ul>
            </div>
        )
    }
}

// export default ViewEmployees;

const mapStateToProps = (state) => {
    console.log(state);
    return {
        employees: state.employees
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteEmployee: (id)=> dispatch(actions.deleteEmployee(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployees)
