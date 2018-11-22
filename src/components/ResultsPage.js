import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {countCodeLines, countCorrectQuestions, countDifferences, calculateTotal} from "../utils/CalculateScore";

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
                <table className="table table-active table-responsive table-hover">
                    <thead>
                    <tr>
                        <th>Participant</th>
                        <th>Answers</th>
                        <th>Code Lines</th>
                        <th>Differences</th>
                        <th>Total</th>
                        <th>Time (sec.)</th>
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

            let differences = countDifferences(data[i].differences);
            let answers = countCorrectQuestions(data[i].answers);
            let codeLine = countCodeLines(data[i].codeLines);
            let total = calculateTotal(answers, differences, codeLine);
            let seconds = data[i].secondsRemaining;

            participants.push({
                personName: data[i].personName,
                answers: answers,
                codeLine: codeLine,
                differences: differences,
                total: total,
                seconds: seconds
            })
        }

        let sortedParticipants = participants.sort((a, b) => b.total - a.total);
        let printedParticipants = [];
        for (let i = 0; i < sortedParticipants.length; i++) {
            printedParticipants.push(<tr key={i}>
                <td>{sortedParticipants[i].personName}</td>
                <td>{sortedParticipants[i].answers}</td>
                <td>{sortedParticipants[i].codeLine}</td>
                <td>{sortedParticipants[i].differences}</td>
                <td>{sortedParticipants[i].total}</td>
                <td>{sortedParticipants[i].seconds}</td>
            </tr>)
        }

        return printedParticipants;

    }

}


export default withRouter(ResultsPage);
