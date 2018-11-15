import React, {Component} from 'react';
import quizQuestionsList from '../data/quizQuestions';

class QuizQuestions extends Component {

    constructor() {
        super();
        this.state = {
            quizQuestionsList
        };
    }

    createQuiz = () => {
        let quiz = []
        let questions = this.state.quizQuestionsList;
      //  console.log(questions);
        for (let i = 0; i < questions.length; i++) {
            let answers = []
            for (let j = 0; j < questions[i].answers.length; j++) {
                answers.push(<div className="form-check"><label><input key="{questions[i].answers[j].toString()}" type="radio" className="form-check-input" name="{questions[i].answers[j].name}"/>{questions[i].answers[j].answer}</label></div>)
            }
            quiz.push(<div><legend>{questions[i].question}</legend>
                {answers}</div>)
        }

        return quiz
    }

    render() {



        return (
            <div>
            <h3>Some theoretical questions!</h3>
            <form>
                <fieldset clasname="form-group">
                {this.createQuiz()}
                </fieldset>
            </form>
            </div>
        )
    }

}

export default QuizQuestions;