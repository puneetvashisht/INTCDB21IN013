import React, { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from "react-router-dom";
import authHeader from '../services/auth-header'
import {connect} from 'react-redux';
import * as actions from '../actions/workout-actions';

function Dashboard(props) {

    // const [workouts, setWorkouts] = useState([]);
    const [search, setSearch] = useState('');

      // replacement of ComponentDidMount
  useEffect(() => {

    props.onFetchWorkouts();


    //  fetch('http://localhost:8080/api/v1/workouts',{
    //   headers: authHeader()
    //  })
    //      .then(res=>res.json())
    //      .then(data=>{
    //        console.log(data);
    //        setWorkouts(data.data);
    //      })
   }, []);


   const handleSearchChange = (event)=>{
      console.log('title change')
      
      // let filteredWorkouts = workouts.filter(workout => workout.title.startsWith(event.target.value))
      // setWorkouts(filteredWorkouts)
      // setSearch(event.target.value)
   }

   if(props.workouts){
    var workoutsList = props.workouts.map((workout,i)=>{
      return (
         <tr key={i}>
           <td>{i+1}</td>
           <td><Link to={'/operations/' + workout.title}>{workout.title}</Link></td>
           <td>{workout.desc}</td>
           <td>{workout.cbpm}</td>
           <td><button onClick={()=>props.onDeleteWorkout(workout._id)}> X </button></td>
         </tr>
      )
  })
   }
   

    return (

      <>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Search By Title</span>
        <input onChange={handleSearchChange} value={search} type="text" class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Calories Burnt(per minute)</th>
          </tr>
        </thead>
        <tbody>
          {workoutsList}
        </tbody>
      </Table>
      </>
    )
}



const mapStateToProps = (state) => {
  console.log('Inside Component ', state);
  return {
      workouts: state.workoutReducer.workouts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onFetchWorkouts: ()=>dispatch(actions.fetchWorkouts()),
      onDeleteWorkout: (id)=>dispatch(actions.deleteWorkout(id))

  }

}

// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);