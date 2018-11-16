import React, {Component} from "react";
import {withRouter} from 'react-router-dom'

class StartQuiz extends Component {

    render() {
        return <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Start
            Quiz</button>
    }

    handleClick(e) {
        this.props.history.push('/quiz')
    }

}

export default withRouter(StartQuiz);