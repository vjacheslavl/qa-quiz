import React, {Component} from 'react';
import quizQuestionsList from '../data/quizQuestions';
import scoreQuiz from "../images/scoreQuiz.jpg";

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
                answers.push(<div className="form-check"><label><input key={questions[i].answers[j].toString()}
                                                                       type="radio" className="form-check-input"
                                                                       name={questions[i].answers[j].name}/>{questions[i].answers[j].answer}
                </label></div>)
            }
            quiz.push(<div>
                <legend>{questions[i].question}</legend>
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
                    <legend>7. Some question for Baccarat scores
                    </legend>
                    <img width="800px" src={scoreQuiz}/>
                    <div className="form-check"><label><input type="radio" className="form-check-input"
                                                              name="{questions[i].answers[j].name}"/>14</label></div>
                    <div className="form-check"><label><input type="radio" className="form-check-input"
                                                              name="{questions[i].answers[j].name}"/>9</label></div>
                    <div className="form-check"><label><input type="radio" className="form-check-input"
                                                              name="{questions[i].answers[j].name}"/>1</label></div>
                    <div className="form-check"><label><input type="radio" className="form-check-input"
                                                              name="{questions[i].answers[j].name}"/>4</label></div>
                </div>
            </div>
    )
    }

    }

    export default QuizQuestions;