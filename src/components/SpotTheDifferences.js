import React, {Component} from 'react';
import leftImage from "../images/mw5.png";
import rightImage from "../images/mw6.png";
import answersCoords from '../data/answers';

class SpotTheDifferences extends Component {

    constructor() {
        super();
        this.state = {
            answersCoords
        };
    }

    componentDidMount() {
        this.handleCanvas();
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

        let answers = this.state.answersCoords;
        let correctAnswer = false;
        console.log(answers);
        for (let i = 0; i < answers.length; i++) {
            if (!answers[i].found) {
                if ((answers[i].coords[0] - 15) < mousePos.x && mousePos.x < (answers[i].coords[0] + 15)) {
                    if ((answers[i].coords[1] - 15) < mousePos.y && mousePos.y < (answers[i].coords[1] + 15)) {
                        correctAnswer = true;
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
        if (!correctAnswer) {
          //  this.stop();
            if (this.state > 5000) {
                this.setState({time: (this.state.time - 5000)}, () => this.tick());
            }

        }
    }

    render() {
        return <div>
            <h3>Spot {this.countQuestions()} differences</h3>
        <div className="canvas-container">
            <canvas id="left-canvas" width="520" height="922" onClick={this.handleClick.bind(this)}></canvas>
            <canvas id="right-canvas" width="520" height="922" onClick={this.handleClick.bind(this)}></canvas>
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
            console.log('img loaded');
            context.drawImage(base_image, 0, 0);
        }
    }

    countQuestions() {
        return this.state.answersCoords.length;
    }
}

export default SpotTheDifferences;