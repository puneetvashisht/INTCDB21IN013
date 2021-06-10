import React, { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {connect} from 'react-redux';
import * as actions from '../actions/weightlog-actions';

function WeightLogView(props) {



      // replacement of ComponentDidMount
  useEffect(() => {
    props.onFetchWeightLogs();
   }, []);

   if(props.weightLogs){
    var weightLogsList = props.weightLogs.map((weightLog,i)=>{
      return (
         <tr key={i}>
           <td>{i+1}</td>
           <td>{weightLog.weight}</td>
           <td>{weightLog.user}</td>
         </tr>
      )
  })
   }
   

    return (

      <>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Weight</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {weightLogsList}
        </tbody>
      </Table>
      </>
    )
}



const mapStateToProps = (state) => {
  console.log('Inside Component ', state);
  return {
      weightLogs: state.weightLogReducer.weightlogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onFetchWeightLogs: ()=>dispatch(actions.fetchWeightLogs()),

  }

}

// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(WeightLogView);