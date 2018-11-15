import React, {Component} from "react";
import {connect} from 'react-redux';

class SubmitAnswers extends Component {

    render() {
        return <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Submit quiz answers</button>
    }

    handleClick(e) {
    console.log(this.props.answers);
    }

}

function mapStateToProps(state) {
    return {
        answers: state.answers
    }

}
export default connect(mapStateToProps)(SubmitAnswers);