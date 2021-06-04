
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';

export const deleteEmployee = (id)=> {
    return {type:DELETE_EMPLOYEE, payload: id}
}

export const addEmployee = (employee)=> {
    return {type:ADD_EMPLOYEE, payload: employee}
}

export const fetchEmployees = ()=> {
    return {type:FETCH_EMPLOYEES}
}