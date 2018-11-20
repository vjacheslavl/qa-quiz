import React  from 'react';

function Timer(props){
    return (
        <div className="timer">
           {props.time/1000} seconds to complete the quizzzzzz!!
        </div>
    );
}

export default Timer;
