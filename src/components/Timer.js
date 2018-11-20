import React  from 'react';

function Timer(props){
    let seconds = props.time/1000;
    return (
        <div className="timer">
           {seconds !== -1? seconds+" seconds" : "Time is up!"}
        </div>
    );
}

export default Timer;
