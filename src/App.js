import React, { Component } from 'react';
import Timer from './components/Timer';
import SpotTheDifferences from './components/SpotTheDifferences';
import FindWrongCode from './components/FindWrongCode';
import SubmitAnswers from './components/SubmitAnswers';
import './App.css';
import QuizQuestions from "./components/QuizQuestions";

class App extends Component {
    constructor() {
        super();
        this.state = {
            time: 0
        };
    }

    componentDidMount() {
        this.tick();
    }

    tick() {
        let time = this.state.time;
        this.interval = setInterval(() => {
            if (time >= 0) {
                time += 1000;
                this.setState({
                    time
                });
            } else {
                this.stop();
            }

        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    stop() {
        clearInterval(this.interval);
    }

    render() {
        let seconds = this.state.time/1000;
        return (
            <div className="App">
                <Timer refs="timer" time={seconds}></Timer>
                <QuizQuestions/>
                <FindWrongCode/>
                <SpotTheDifferences/>
                <SubmitAnswers/>
            </div>
        );
    }
}

export default App;
