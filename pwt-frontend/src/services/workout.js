import authHeader from './auth-header'
const API_URL = 'http://localhost:8080/api/v1/';


const addWorkout = (workout) => {
    return fetch(API_URL + 'workouts/', {
           headers: authHeader(),
           method: 'POST',
           body: JSON.stringify(workout)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
       })
       
}

export default {addWorkout};