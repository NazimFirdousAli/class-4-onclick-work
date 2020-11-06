import React, {useState} from 'react';
import {Message} from './message.js';
import './App.css';

function App() {
  let [count,setCount] = useState(0);
  let [isMorning,setMorning] = useState(false)
  return (
    <div className= {`box ${isMorning? 'isMorning' : 'isDay' }`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter = {count}/>
  <br />
  <button onClick={
    () => setCount(count=count+1)
  }>Update Counter increment
  </button>
  <br /> <br /><br />

  <button onClick = {() => setMorning(!isMorning)}>Update Morning / Night</button>
  </div>
  );
}

export default App;
