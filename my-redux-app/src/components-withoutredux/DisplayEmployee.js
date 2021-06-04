import {useState} from 'react'
export default function(){

    const[employees, setEmployees] = useState([
        {id: 223, name: "Ravi", salary: 34343},
        {id: 23, name: "Srab", salary: 44343}
    ]);

    let employeeList = employees.map((employee, i)=>{
        return <tr><td>{employee.name}</td></tr>
    })

    return (
        <table border="1"> 
           {employeeList}    
        </table>

    )
}