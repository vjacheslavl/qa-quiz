import React, {Component} from 'react';
import Timer from './components/Timer';
import SpotTheDifferences from './components/SpotTheDifferences';
import './App.css';
import QuizQuestions from "./components/QuizQuestions";

class App extends Component {
    constructor() {
        super();
        this.state = {
            time: 60000
        };
    }

    componentDidMount() {
        this.tick();
    }

    tick() {
        let time = this.state.time;
        this.interval = setInterval(() => {
            if (time >= 0) {
                time -= 1000;
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
        return (
            <div className="App">
                <div className="container">
                    <h1>Evo QA Quiz!</h1>
                <Timer time={this.state.time}></Timer>
                <QuizQuestions/>
                <h3>Whats wrong in this code?</h3>
                <div><code>
                    function okruglik(num)
                    iif(isNaN(num))
                        summi = summi;
                     else
                        summi = Math.floor(num);
                    }
                        return summi;
                    }</code></div>
                <SpotTheDifferences></SpotTheDifferences><button type="submit" className="btn btn-primary">Submit quiz answers</button>
                </div>
            </div>
        );
    }
}

export default App;