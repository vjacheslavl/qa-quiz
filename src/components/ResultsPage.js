import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

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
            const total = 20;
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

function countCorrectQuestions(datum) {
    return 44;
}
function countCodeLines(datum) {
    return 33;
}

export default withRouter(ResultsPage);