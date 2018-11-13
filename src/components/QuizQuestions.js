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
        console.log(questions);
        for (let i = 0; i < questions.length; i++) {
            let answers = []
            for (let j = 0; j < questions[i].answers.length; j++) {
                console.log(questions[i].answers);
                answers.push(<div><input type="radio" name="{questions[i].answers[j].name}"/>{questions[i].answers[j].answer}</div>)
            }
            quiz.push(<div className='question'>
                <div><b>{questions[i].question}</b></div>
                {answers}
                </div>)
        }

        return quiz
    }

    render() {



        return (
            <div>
                <h3>Some theoretical questions!</h3>
                {this.createQuiz()}
            </div>
        )
    }

}

export default QuizQuestions;