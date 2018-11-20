import React, {Component} from 'react';

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

    render() {
        return <div>
            <h3> Whats wrong in this code?</h3>
            click the lines that you don't like!
            <div>
                <div className="highlight">
                        {this.state.someText.split("\n").map((item, key) => {
                            return <span className="codeLine" key={key}>{item}<br/></span>;
                        })}
                </div>
            </div>
        </div>
    }
}

export default FindWrongCode;