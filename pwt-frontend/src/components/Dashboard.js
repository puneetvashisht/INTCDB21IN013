import React, { useEffect } from 'react'
import authHeader from '../services/auth-header'
function Dashboard() {


    useEffect(()=>{
        console.log('Fetch all users call');
        fetch('http://localhost:8080/api/v1/users',{
            headers: authHeader()
        })
        .then(res=>res.json())
        .then(data=>console.log(data));

    }, [])

    return (
      <div>
        <h2>Display all users</h2>
      </div>
    );
  }
export default Dashboard;