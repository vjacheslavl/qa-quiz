import React, {Component} from 'react';
import leftImage from "../images/mw7.jpg";
import rightImage from "../images/mw8.jpg";
import answersCoords from '../data/answers';
import quizQuestionsList from '../data/quizQuestions';
import {bindActionCreators} from 'redux';
import {saveDifferences} from '../actions/saveDifferences';
import {connect} from 'react-redux';

class SpotTheDifferences extends Component {

    constructor() {
        super();
        this.state = {
            answersCoords
        };
    }

    componentDidMount() {
        this.handleCanvas();
        this.props.storeDifferences(answersCoords);
    }

    /** Event handled for click events on images to spot differences
     *  @param {Object} click event
     *
     *  @return {undefined}
     * */
    handleClick(e) {
        const mousePos = {
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        };
        console.log('x is ' + mousePos.x);
        console.log('y is ' + mousePos.y);

        console.log(this.props.spotTheDifferencReduce)


        let answers = this.state.answersCoords;
        console.log(answers);
        for (let i = 0; i < answers.length; i++) {
            if (!answers[i].found) {
                if ((answers[i].coords[0] - answers[i].coords[2]) < mousePos.x && mousePos.x < (answers[i].coords[0] + answers[i].coords[2])) {
                    if ((answers[i].coords[1] - 15) < mousePos.y && mousePos.y < (answers[i].coords[1] + 15)) {
                        answers[i].found = true;
                        this.setState({
                            answersCoords: answers
                        });
                        this.drawEllipse('left-canvas', answers[i].coords[0], answers[i].coords[1], 60, 60);
                        this.drawEllipse('right-canvas', answers[i].coords[0], answers[i].coords[1], 60, 60);
                        break;
                    }
                }
            }
        }
        this.props.storeDifferences(answers);
    }

    render() {
        return <div className="singleQuestion">
            <legend>{quizQuestionsList.length+2}. Spot {this.countQuestions()} differences between 2 pictures!</legend>
            Tap the difference when you found it!
            <div className="canvas-container">
                <canvas id="left-canvas" width="437" height="777" onClick={this.handleClick.bind(this)}/>
                <canvas id="right-canvas" width="437" height="777" onClick={this.handleClick.bind(this)}/>
            </div>
        </div>
    }

    /** Function get the canvas elements and make the appropriate calls to drawImg function
     *
     *  @return {undefined}
     * */
    handleCanvas() {
        let lcanvas = document.getElementById('left-canvas'),
            rcanvas = document.getElementById('right-canvas'),
            lcontext = lcanvas.getContext('2d'),
            rcontext = rcanvas.getContext('2d');

        this.loadImg(leftImage, lcontext);
        this.loadImg(rightImage, rcontext);
    }

    // Draws oval shape on <canvas> elements
    // (modified from: http://bit.ly/2bBPWHm)
    drawEllipse(id, centerX, centerY, width, height) {
        var canv = document.getElementById(id);
        var ctx = canv.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(centerX, centerY - height / 2); // startpoint top

        ctx.bezierCurveTo( // half an oval
            centerX + width / 2, centerY - height / 2, // CP top right
            centerX + width / 2, centerY + height / 2, // CP bottom right
            centerX, centerY + height / 2); // endpoint bottom

        ctx.bezierCurveTo( // 2nd half
            centerX - width / 2, centerY + height / 2, // CP bottom left
            centerX - width / 2, centerY - height / 2, // CP top left
            centerX, centerY - height / 2); // startpoint top

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#00ff99';
        ctx.stroke();
    }

    /** Function to draw an image on a canvas element
     *  @param {String} tmpImg, the path to the appropriate image to be loaded
     *  @param {Object} context the Canvas element on which we want an image to be loaded
     *
     *  @return {undefined}
     * */
    loadImg(tmpImg, context) {
        let base_image = new Image();
        base_image.src = tmpImg;
        base_image.onload = function () {
            context.drawImage(base_image, 0, 0);
        }
    }

    countQuestions() {
        return this.state.answersCoords.length;
    }
}

function mapStateToProps(state) {
    return {
        spotTheDifferencReduce: state.spotTheDifferencReduce
    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({storeDifferences: saveDifferences}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SpotTheDifferences);