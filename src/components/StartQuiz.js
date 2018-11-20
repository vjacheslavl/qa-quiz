import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from "redux";
import {savePerson} from "../actions/savePerson";
import connect from "react-redux/es/connect/connect";

class StartQuiz extends Component {

    constructor() {
        super();
        this.state = {
            personName: ''
        };
    }

    handleChange(e) {
        this.setState({personName: e.target.value});
    }


    render() {
        return <div className="text-center m-5">
            <label>Take our QA quiz to test your knowledge and win a prize!</label>
            <input type="email" className="form-control" id="personName"
                   onChange={this.handleChange.bind(this)}
                   placeholder="Enter email"/>
            <input type="checkbox" id="scales" name="scales"/> <label>I accept the terms and conditions </label>
            <br/>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Start
                Quiz
            </button>
        </div>
    }

    handleClick(e) {
        this.props.storePerson(this.state.personName);
        this.props.history.push('/quiz')
    }

}

function mapStateToProps(state) {
    return {
        personName: state.personName
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({storePerson: savePerson}, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(StartQuiz));