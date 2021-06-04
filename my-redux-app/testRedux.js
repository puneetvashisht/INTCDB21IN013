// Import redux library
const redux = require('redux')


let initialState = {
    employees:  [
        {id: 223, name: "Ravi", salary: 34343},
        {id: 23, name: "Srab", salary: 44343}
    ]
}
// Reducer -> Modifies state 
const reducer = (state = initialState, action)=>{
    console.log('In reducer recieved: ', action)
    switch(action.type){
        case 'FETCH_EMPLOYEES':  return state.employees;
        case 'ADD_EMPLOYEE':  
        // dont modify the state directly -- this is wrong
        //let length = state.employees.push(action.payload)

        // right way -- immutable changes
        let newEmployees = [...state.employees, action.payload]
        return {employees: newEmployees}

        case 'DELETE_EMPLOYEE':
            let filteredEmployees = state.employees.filter(employee => employee.id != action.payload.id)
            return {employees: filteredEmployees}
    }
}

// Store -> One single store to contain all application state
const store = redux.createStore(reducer);

store.subscribe(()=> console.log(store.getState()))

// Action -> Type and data
// const action = {type: 'FETCH_EMPLOYEES'}
// const action = {type: 'ADD_EMPLOYEE', payload: {id:34, name:"Anshul", salary: 34343}}

const action = {type: 'DELETE_EMPLOYEE', payload: {id:23}}

// Dispatch -> Dispatch actions
store.dispatch(action)


