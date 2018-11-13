import React, {Component} from 'react';
import quizQuestionsList from '../data/answers';

class QuizQestions extends Component {

    constructor() {
        super();
        this.state = {
            quizQuestionsList
        };
    }

    /** Event handled for click events on images to spot differences
     *  @param {Object} click event
     *
     *  @return {undefined}
     * */
    handleClick(e) {
        const canvas = document.getElementById(e.target.id);
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
        let questions = this.state.quizQuestionsList;
        console.log(questions);

        for (let i = 0; i < questions.length; i++) {

        }
        return "XXX"
    }

}

export default QuizQestions;