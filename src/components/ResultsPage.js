import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {countCodeLines, countCorrectQuestions, countDifferences} from "../utils/CalculateScore";

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

            const differences = countDifferences(data[i].differences);
            const answers = countCorrectQuestions(data[i].answers);
            const codeLine = countCodeLines(data[i].codeLines);
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


export default withRouter(ResultsPage);
