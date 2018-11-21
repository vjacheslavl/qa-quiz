import React, {Component} from 'react';
import quizQuestionsList from '../data/quizQuestions';

import {wrongCode} from '../data/wrongCode';
import {bindActionCreators} from "redux";
import {saveCodeLine} from "../actions/saveCodeLines.js";
import connect from "react-redux/es/connect/connect";

class FindWrongCode extends Component {

    constructor(props) {
        super(props);

        this.state = {
            markedLines: []
        };
    }

    componentDidMount() {
        this.setState({
            markedLines: wrongCode.split("\n").map((item, key) => {
                return {item: item, key: key, marked: false}
            }),
        });
    }

    handleClick(e) {
        var mark;

        if (e.target.getAttribute("class") === "codeLine") {
            e.target.setAttribute("class", "codeLine redHighlight");
            mark = true;
        }
        else {
            e.target.setAttribute("class", "codeLine");
            mark = false;
        }
        this.state.markedLines[e.target.getAttribute("rownum")].marked = mark;
        this.props.storeCodeLine(this.state.markedLines.map((item)=>{
            return {key: item.key, marked: item.marked}
        }));
    }

    render() {
        return <div className="singleQuestion">
            <legend>{quizQuestionsList.length + 1}. What is wrong with this code?</legend>
            Tap the lines that look wrong!
            <div className="highlight">
                {this.state.markedLines.map(item => {
                    return <div className="codeLine" rownum={item.key} key={item.key}
                                onClick={this.handleClick.bind(this)}>{item.item}<br/></div>;
                })}
            </div>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        spotTheDifferencReduce: state.spotTheDifferencReduce
    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({storeCodeLine: saveCodeLine}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FindWrongCode);