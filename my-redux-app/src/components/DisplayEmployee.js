import {useState} from 'react'
import {connect} from 'react-redux'
function DisplayEmployee(props){

    let employeeList = props.employees.map((employee, i)=>{
        return <tr><td>{employee.name}</td></tr>
    })
    return (
        <table border="1"> 
           {employeeList}    
        </table>
    )
}

const mapStateToProps = (state) =>{
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(DisplayEmployee)