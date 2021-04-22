// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import AlertDismissibleExample from './AlertDismissibleExample';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

function App() {

  // const useState();
  const [count, setCount] = useState(10);

  return (
    <>
      <AlertDismissibleExample></AlertDismissibleExample>
      <ProgressBar now={count} />
      <Button variant="primary" onClick={()=> setCount(count+10)}>Increase Progress</Button>
  </>
  );
}

export default App;
