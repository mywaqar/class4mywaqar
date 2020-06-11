import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Room from './Room'


  function App () {

    let [Num,setNum] = useState(1);
    let [isLit, setLit] = useState(true);


  return (
          <div className = "App">
            <h1>Bootcamp Class 4 - Assignment</h1>
            <hr/>
            <Counter count={Num}/>
            <button className = "button button1" onClick = {
                      ()=> setNum(++Num)
                    }>
                    Increase Count
            </button>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <button className="button button2" onClick = {
                      ()=> setNum(--Num)
                    }>
                    Decrease Count
            </button>
            <hr/>
          <button className="button button3" onClick = {
                      ()=> setLit(!isLit)
                      }>
                      ON/OFF Switch
            </button>
            <Room lit = {isLit}></Room>

            <br/>
            <br/>
            <br/>


            <h2>Waqar Azeem <br/>Git Hub: github.com/mywaqar/class4mywaqar<br/>SurgeURL: class4mywaqar.surge.sh</h2>

          </div>

      );
}

export default App;
