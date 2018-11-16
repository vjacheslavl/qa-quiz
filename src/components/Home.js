import React, {Component} from 'react';
import StartQuiz from "./StartQuiz";

class Home extends Component {
    render() {
        return <div className="container">
            <h1>Evolution QA quiz</h1>
            <div className="form-group">
                <StartQuiz/>
            </div>
        </div>
    }
}

export default Home;