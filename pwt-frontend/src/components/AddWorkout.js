import React, { useState } from 'react'
import WorkoutService from '../services/workout';
import {connect} from 'react-redux';
import * as actions from '../actions/workout-actions';
import { Alert } from 'react-bootstrap'


function AddWorkout(props){

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [cbpm, setCbpm] = useState('');

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const onDescChange = (event) => {
        setDesc(event.target.value);
    }
    const onCbpmChange = (event) => {
        setCbpm(event.target.value);
    }

    const addWorkout = ()=> {
        let workout = {title, desc, cbpm, user: {
            _id: '60ab4882ca8ce633c096aa8e'
        }};
        console.log(workout)
        // WorkoutService.addWorkout(workout);
        props.onAddWorkout(workout);
    }

    return (
        <>
        <h2>Add Workout</h2>

        {props.message && <Alert key="idx" variant="primary">
            {props.message}
        </Alert>}

        <input onChange={onTitleChange} value={title} type="text" placeholder="Enter title"/>
        <input onChange={onDescChange} value={desc} type="email" placeholder="Enter desc"/>
        <input onChange={onCbpmChange} value={cbpm} type="number" placeholder="Enter calories"/>
        <button onClick = {addWorkout}>Add Workout</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        onAddWorkout: (workout)=>dispatch(actions.addWorkout(workout))
    }
  }

// export default AddWorkout;
export default connect(mapStateToProps, mapDispatchToProps)(AddWorkout);