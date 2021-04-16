import logo from './logo.svg';
import './App.css';
import Badge from './Badge'
import Card from './Card'


import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();
    this.state = {employees: []}
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

    let employeeList = this.state.employees.map((employee, i)=>{
      return (
          <Card name={employee.name}></Card>
      );
    })


    return (
      <div class="container">
       <div class="row">
          {employeeList}
       </div>
      </div>
    )
  }
}



// function App() {
//   return (
//     <div class="container">
//       <div class="row">

//       <Card name="Ravi"></Card>
//       <Card name="Priya"></Card>
//       <Card name="Sahil"></Card>
      
        
//         </div>
//     </div>
//   );
// }

// export default App;
