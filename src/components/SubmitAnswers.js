import React, {Component} from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

class SubmitAnswers extends Component {

    render() {
        return <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Submit quiz
            answers</button>
    }

    handleClick(e) {
        console.log(this.props.personName);
        insertSomething(this.props.personName).then((result) => {
            console.log("Result is" + result)

        });
        this.props.history.push('/')
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
        console.log("RJSON "+responseJson.personName)
        return responseJson.result;
    }
    catch (error) {
        console.log("Error is - " + error);
    }

}

function mapStateToProps(state) {
    return {
        personName: state.personName
    }

}

export default withRouter(connect(mapStateToProps)(SubmitAnswers));