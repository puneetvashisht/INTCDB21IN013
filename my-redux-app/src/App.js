import logo from './logo.svg';
import './App.css';
import ViewEmployees from './components/ViewEmployees';
import DisplayEmployee from './components/DisplayEmployee';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <AddEmployee></AddEmployee>
      <hr></hr>
      <ViewEmployees></ViewEmployees>
      <hr></hr>
      <DisplayEmployee></DisplayEmployee>
    </div>
  );
}

export default App;
