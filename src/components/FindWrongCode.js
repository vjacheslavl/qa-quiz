import React, {Component} from 'react';
import quizQuestionsList from '../data/quizQuestions';

class FindWrongCode extends Component {

    constructor(props) {
        super(props);

        this.state = {
            someText: ""
        };
    }

    componentDidMount() {
        const file = require('../data/wrongCode.txt');
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0)
                    var allText = rawFile.responseText;
                this.setState({
                    someText: allText
                });
            }
        };
        rawFile.send(null);
    }

    changeColor(e) {
        if (e.target.getAttribute("class") === "codeLine") {
            e.target.setAttribute("class", "codeLine redHighlight");
        }
        else {
            e.target.setAttribute("class", "codeLine");
        }
    }

    render() {
        return <div>
            <legend>{quizQuestionsList.length+1}. What is wrong with this code?</legend>
            click the lines that you don't like!
            <div>
                <div className="highlight">
                    {this.state.someText.split("\n").map((item, key) => {
                        return <span className="codeLine" key={key}
                                     onClick={this.changeColor.bind(this)}>{item}<br/></span>;
                    })}
                </div>
            </div>
        </div>
    }
}

export default FindWrongCode;