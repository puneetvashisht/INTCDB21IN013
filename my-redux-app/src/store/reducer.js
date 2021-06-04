
import * as actions from '../actions/action'
let initialState = {
    employees:  [
        {id: 223, name: "Ravi Store", salary: 34343},
        {id: 23, name: "Srab", salary: 44343}
    ]
}
const reducer = (state = initialState, action)=>{
    console.log('In reducer recieved: ', action)
    switch(action.type){
        case actions.FETCH_EMPLOYEES:  return state.employees;
        case actions.ADD_EMPLOYEE:  
        // dont modify the state directly -- this is wrong
        //let length = state.employees.push(action.payload)

        // right way -- immutable changes
        let newEmployees = [...state.employees, action.payload]
        return {employees: newEmployees}

        case actions.DELETE_EMPLOYEE:
            let filteredEmployees = state.employees.filter(employee => employee.id != action.payload.id)
            return {employees: filteredEmployees}
    }
    return state;
}


export default reducer;