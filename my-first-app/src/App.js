// import logo from './logo.svg';
import './App.css';
// import Badge from './Badge'
// import Card from './Card'


import React, { Component } from 'react'
import ViewEmployees from './components/ViewEmployees';
import AddEmployee from './components/AddEmployee';
import Clock from './components/Clock'
import Dropdown from './components/Dropdown';
import Parent from './components/Parent'

export default class App extends Component {

  constructor(){
    super();
    this.state = {employees: [], message: ''}
  }


  componentDidMount(){
    console.log('initialization codde...');
    fetch('http://localhost:3004/employees')
    .then(res=>res.json())
    .then(data=>
      {
        console.log(data);
        this.setState({employees: data})

      });
  }

  render() {

    // let employeeList = this.state.employees.map((employee, i)=>{
    //   return (
    //       <Card name={employee.name}></Card>
    //   );
    // })


    return (
      <div className="container">
       <div className="row">
         <Parent></Parent>
          {/* {employeeList} */}

          {/* <Clock></Clock> */}

          {/* <Dropdown></Dropdown> */}
          {/* <AddEmployee></AddEmployee>
          <hr></hr>
          <ViewEmployees employees={this.state.employees}></ViewEmployees> */}
       </div>
      </div>
    )
  }
}



// function App() {
//   return (
//     <div className="container">
//       <div className="row">

//       <Card name="Ravi"></Card>
//       <Card name="Priya"></Card>
//       <Card name="Sahil"></Card>
      
        
//         </div>
//     </div>
//   );
// }

// export default App;
