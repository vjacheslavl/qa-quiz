import React  from 'react';

function Timer(props){
    let seconds = props.time;
    return (
        <div id="timer" seconds={seconds} className="timer">
           {seconds !== -1? seconds+" seconds" : "Time is up!"}
        </div>
    );
}

export default Timer;
