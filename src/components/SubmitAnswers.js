import React, {Component} from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

class SubmitAnswers extends Component {

    render() {
        return <div className="text-center m-5">
            <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Submit your answers
            </button>
        </div>
    }

    handleClick(e) {
        const requestBody = {
            personName: this.props.personName,
            answers: this.props.answers,
            differences: this.props.differences
        };
        console.log(requestBody);
        insertSomething(requestBody).then((result) => {
            console.log("Result is" + result)

        });
        this.props.history.push('/completed')
    }

}

async function insertSomething(params) {
    console.log("params are  " + params)
    try {
        let response = await fetch("https://quiz-backend-evo.herokuapp.com/savequiz", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        console.log("RJSON " + responseJson.personName)
        return responseJson.result;
    }
    catch (error) {
        console.log("Error is - " + error);
    }

}

function mapStateToProps(state) {
    return {
        personName: state.personName,
        differences: state.differences,
        answers: state.answers
    }

}

export default withRouter(connect(mapStateToProps)(SubmitAnswers));