import React, {Component} from 'react';
import quizQuestionsList from '../data/quizQuestions';
import scoreQuiz from "../images/scoreQuiz.jpg";

class QuizQuestions extends Component {

    constructor() {
        super();
        const quizAnswers = quizQuestionsList.map((question) => questionToAnswers(question.name, ""))
        console.log(quizAnswers)
        this.state = {
            quizAnswers
        };
    }

    handleClick(e) {
        this.state.quizAnswers = processAnswers(this.state.quizAnswers, e.target.getAttribute("name"), e.target.getAttribute("value"))
        console.log(this.state.quizAnswers)
    }

    createQuiz = () => {
        let quiz = []
        let questions = quizQuestionsList;
        for (let i = 0; i < questions.length; i++) {
            let answers = []
            for (let j = 0; j < questions[i].answers.length; j++) {
                answers.push(<div className="form-check" key={j}><label key={j}>
                    <input key={j}
                           type="radio"
                           className="form-check-input"
                           value={questions[i].answers[j].id}
                           name={questions[i].name}
                           onClick={this.handleClick.bind(this)}/>
                    {questions[i].answers[j].answer}
                </label></div>)
            }
            quiz.push(<div key={i}>
                <legend key={i}>{questions[i].question}</legend>
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
                <div>
                    <legend>9. Baccarat is a comparing card game played between two hands, the Player and the Banker.
                        Would you calculate the value of last hand on the picture?
                    </legend>
                    <img width="800px" src={scoreQuiz}/>
                    <div className="form-check"><label><input type="radio" className="form-check-input"
                                                              name="{questions[i].answers[j].name}"/>18</label></div>
                    <div className="form-check"><label><input type="radio" className="form-check-input"
                                                              name="{questions[i].answers[j].name}"/>1</label></div>
                    <div className="form-check"><label><input type="radio" className="form-check-input"
                                                              name="{questions[i].answers[j].name}"/>8</label></div>
                    <div className="form-check"><label><input type="radio" className="form-check-input"
                                                              name="{questions[i].answers[j].name}"/>9</label></div>
                </div>
            </div>
        )
    }

}

function questionToAnswers(name, answer) {
    return {
        question: name,
        answer: answer
    }
}

function processAnswers(previousAnswers, question, newAnswer) {
    return previousAnswers.map((prevAnswer) => questionToAnswers(prevAnswer.question, prevAnswer.question === question ? newAnswer : prevAnswer.answer))
}

export default QuizQuestions;