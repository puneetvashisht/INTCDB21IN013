// import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter as Router, Switch,
  Route} from 'react-router-dom'
import ViewEmployees from './components/ViewEmployees';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <Router>
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/">View Employees</Link>
            </li>
            <li>
              <Link to="/add">Add Employee</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
           
           
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/add">
            <AddEmployee />
          </Route>
          <Route path="/update/:id" component={UpdateEmployee}>
            {/* <UpdateEmployee /> */}
          </Route>
          <Route path="/">
            <ViewEmployees />
          </Route>
        </Switch>

    </div>
    </Router>
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


