import { connect } from "react-redux"
import * as actions from '../actions/action'

function AddEmployee(props){

    const addEmployee = () =>{
        props.onAddEmployee({id: 233, name:"Test", salary: 11111});
    }

    return (
        <>
        <h2>Add Employee</h2>
        <button onClick={addEmployee}>Add Test Employee</button>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddEmployee: (employee)=> dispatch(actions.addEmployee(employee))
    }

}
export default connect(null, mapDispatchToProps)(AddEmployee);