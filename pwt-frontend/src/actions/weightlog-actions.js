


export const FETCH_WEIGHTLOGS = "FETCH_WEIGHTLOGS"



const findWeightLogs = (weightlogs) => {
    return {
        type: FETCH_WEIGHTLOGS,
        payload: weightlogs
    }
}


export const fetchWeightLogs = () => {

    // hardcoded
    // let workouts =  [
    //     {"title": "Run for 5 mins (from actions)", "desc": "test desc", cbpm: 343}
    // ]

    // delayed dispatch available

    console.log('In fech workout action *******************************')
    return dispatch => {

        fetch('http://localhost:8080/api/v1/weightlog')
            .then(res => res.json())
            .then(weightlogs => {
                console.log(weightlogs);
                dispatch(findWeightLogs(weightlogs.data));
            })

    }


    // fetch it from server side

    // return {
    //     type: FETCH_WORKOUTS,
    //     payload: workouts
    // }
}