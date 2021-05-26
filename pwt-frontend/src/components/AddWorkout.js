import React, { useState } from 'react'
import WorkoutService from '../services/workout';

function AddWorkout(){

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
        WorkoutService.addWorkout(workout);
    }

    return (
        <>
        <h2>Add Workout</h2>

        <input onChange={onTitleChange} value={title} type="text" placeholder="Enter title"/>
        <input onChange={onDescChange} value={desc} type="email" placeholder="Enter desc"/>
        <input onChange={onCbpmChange} value={cbpm} type="number" placeholder="Enter calories"/>
        <button onClick = {addWorkout}>Add Workout</button>
        </>
    )
}
export default AddWorkout;