import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import quizQuestionsList from '../data/quizQuestions';
import wrongCodeLines from '../data/wrongCodeLines';

class ResultsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://quiz-backend-evo.herokuapp.com/allresults')
            .then(response => response.json())
            .then(data => this.setState({data: data, isLoading: false}));
    }


    render() {
        const {data, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                <table border="1">
                    <thead>
                    <tr>
                        <td>Participant</td>
                        <td>Answers</td>
                        <td>Code Lines</td>
                        <td>Differences</td>
                        <td>Total</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.drawTable(data)}
                    </tbody>
                </table>
            </div>
        );
    }


    drawTable(data) {
        let participants = [];
        for (let i = 0; i < data.length; i++) {

            const differences = data[i].differences.filter((item) => item.found === true).length;
            const answers = countCorrectQuestions(data[i]);
            const codeLine = countCodeLines(data[i]);
            const total = differences + answers + codeLine;

            participants.push(<tr key={i}>
                <td>{data[i].personName}</td>
                <td>{answers}</td>
                <td>{codeLine}</td>
                <td>{differences}</td>
                <td>{total}</td>
            </tr>)
        }
        return participants;

    }

}

function countCorrectQuestions(item) {
    return item.answers.filter((answer) => isCorrectAnswer(answer)).length;
}

function isCorrectAnswer(answerData) {
    const foundQuestion = quizQuestionsList.filter((questionItem) => questionItem.name === answerData.question)[0];
    const foundAnswer = foundQuestion.answers.filter((answerItem) => answerItem.id === answerData.answer);
    return foundAnswer.length === 0 ? false : foundAnswer[0].correct;
}

function countCodeLines(item) {
    return item.codeLines.filter((codeline) => isCorrectlyMarkedCodeline(codeline)).length;

}

function isCorrectlyMarkedCodeline(codelineData) {
    const foundCodeline = wrongCodeLines.filter((codelineItem) => (codelineItem.line - 1) === codelineData.key)[0];
    return foundCodeline.bad === codelineData.marked;
}

export default withRouter(ResultsPage);