import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {countCodeLines, countCorrectQuestions, countDifferences} from "../utils/CalculateScore";
import connect from "react-redux/es/connect/connect";

class CompletedPage extends Component {
    constructor(props) {
        super(props);

        const differences = countDifferences(this.props.differences);
        const answers = countCorrectQuestions(this.props.answers);
        const codeLine = countCodeLines(this.props.codeLines);
        const total = differences + answers + codeLine;

        this.state = {
            total: total
        };
    }


    render() {
        return <div className="text-center m-5">
            <h2>Your score is {this.state.total} !</h2>
            <h2>Thank you for taking our quiz and Good Luck!</h2>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Back to start
            </button>
        </div>
    }

    handleClick(e) {
        this.props.history.push('/');
        window.location.reload();
    }
}

function mapStateToProps(state) {
    return {
        codeLines: state.codeLines,
        differences: state.differences,
        answers: state.answers
    }

}

export default withRouter(connect(mapStateToProps)(CompletedPage));