import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from "redux";
import {savePerson} from "../actions/savePerson";
import connect from "react-redux/es/connect/connect";

class StartQuiz extends Component {

    constructor() {
        super();
        this.state = {
            personName: '',
            accepted: false,
        };
    }

    handleChange(e) {
        this.setState({personName: e.target.value});
    }


    render() {
        return <div className="text-center m-5">
            <label>Take our QA quiz to test your knowledge and win a prize!</label>
            <input type="email"
                   className="form-control"
                   id="personName"
                   onChange={this.handleChange.bind(this)}
                   placeholder="Enter email"
                   required={true}
            />
            <div className="termsAndConditions">
Privacy policy <br />
Data Controller – SIA Evolution Latvia (Latvia), registration No. 40003815611 <br />
Data Collection Purpose – to be informed about carrier opportunities in Evolution Latvia and its group companies <br />
Data collected - name, surname, e-mail, mobile phone no. <br />
Data storage – 30 days or until revocation. <br />
Data Subject rights – To acess data, revoke the consent and change data upon request. <br />
Please contact: dpo@evolutiongaming.com <br />
            </div>
            <input id="accept" type="checkbox" onClick={() => this.setState({accepted: !this.state.accepted})}/>
            <label for="accept" style={{ paddingLeft: "5px" }}> I accept the terms and conditions </label>
            <br/>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Start
                Quiz
            </button>
        </div>
    }

    handleClick(e) {
        if(this.state.personName && this.state.accepted) {
            this.props.storePerson(this.state.personName);
            this.props.history.push('/quiz')
        }
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
