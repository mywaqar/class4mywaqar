import React from 'react';
import './App.css';

export default function Room (props){

return(

    <div className = {`${props.lit? 'divLiteON':'divLiteOff'}`}> 
            <h1>Room lights are : {props.lit? "ON":"OFF"}</h1>        
    </div>
);

}