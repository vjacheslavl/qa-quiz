import React, {Component} from 'react';
import leftImage from './images/left-image.jpg';
import rightImage from './images/right-image.jpg';
import Timer from './components/Timer';
import SpotTheDifferences from './components/SpotTheDifferences';
import './App.css';

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
                <header className="App-header">
                    <h1>QA Quiz!</h1>
                </header>
                <Timer time={this.state.time}></Timer>
                <h3>Some theoretical questions!</h3>
                <div class="questions">

                    <div className="question">
                        <div><b> 1. What AAA stands for?</b></div>
                        <form>
                            <div><input type="radio" name="gr1"/>Arrange Act Assert</div>
                            <div><input type="radio" name="gr1"/>Act Act Act</div>
                            <div><input type="radio" name="gr1"/>Artificial Alien Assault</div>
                        </form>
                    </div>
                    <div className="question">
                        <div><b> 2. Which of the following is not a performance test tool?</b></div>
                        <form>
                            <div><input type="radio" name="gr2"/>Gatling</div>
                            <div><input type="radio" name="gr2"/>LoadRunner</div>
                            <div><input type="radio" name="gr2"/>Performer</div>
                            <div><input type="radio" name="gr2"/>Jmeter</div>
                        </form>
                    </div>
                </div>
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
                <h3>Spot 10 differences</h3>
                <SpotTheDifferences></SpotTheDifferences>
            </div>
        );
    }
}

export default App;
