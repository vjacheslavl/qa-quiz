import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class CompletedPage extends Component {
    render() {
        return <div className="text-center m-5">
            <h2>Thank you for taking our quiz and Good Luck!</h2>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Back to start
            </button>
        </div>
    }

    handleClick(e) {
        this.props.history.push('/')
    }
}
export default withRouter(CompletedPage);