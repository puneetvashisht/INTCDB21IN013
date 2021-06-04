import logo from './logo.svg';
import './App.css';
import ViewEmployees from './components/ViewEmployees';
import DisplayEmployee from './components/DisplayEmployee';

function App() {
  return (
    <div className="App">
      <ViewEmployees></ViewEmployees>
      <hr></hr>
      <DisplayEmployee></DisplayEmployee>
    </div>
  );
}

export default App;
