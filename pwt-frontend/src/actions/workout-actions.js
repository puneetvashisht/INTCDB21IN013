


export const FETCH_WORKOUTS = "FETCH_WORKOUTS"
export const START_WORKOUT = "START_WORKOUT"
export const END_WORKOUT = "END_WORKOUT"
export const ADD_WORKOUT = "ADD_WORKOUT"


const removeWorkout = (workouts) => {
    return {
        type: 'DELETE_WORKOUT',
        payload: workouts
    }
}

export const deleteWorkout = (id) => {
    // http call / async call

    return dispatch => {
        fetch('http://localhost:8080/api/v1/workouts' + id , {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(workouts => {
                console.log(workouts);
                dispatch(removeWorkout(workouts));
            })
    }
}


const saveWorkout = (workouts) => {
    return {
        type: ADD_WORKOUT,
        payload: workouts
    }
}

export const addWorkout = (workout) => {
    // http call / async call
    return dispatch => {
        fetch('http://localhost:8080/api/v1/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        })
            .then(res => res.json())
            .then(workouts => {
                console.log(workouts);
                dispatch(saveWorkout(workouts));
            })
    }
}


const findWorkouts = (workouts) => {
    return {
        type: FETCH_WORKOUTS,
        payload: workouts
    }
}


export const fetchWorkouts = () => {

    // hardcoded
    // let workouts =  [
    //     {"title": "Run for 5 mins (from actions)", "desc": "test desc", cbpm: 343}
    // ]

    // delayed dispatch available

    console.log('In fech workout action *******************************')
    return dispatch => {

        fetch('http://localhost:8080/api/v1/workouts')
            .then(res => res.json())
            .then(workouts => {
                console.log(workouts);
                dispatch(findWorkouts(workouts.data));
            })

    }


    // fetch it from server side

    // return {
    //     type: FETCH_WORKOUTS,
    //     payload: workouts
    // }
}