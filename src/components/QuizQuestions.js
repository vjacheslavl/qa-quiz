import React, {Component} from 'react';
import quizQuestionsList from '../data/quizQuestions';
import {bindActionCreators} from "redux";
import {saveAnswers} from "../actions/saveAnswers";
import connect from "react-redux/es/connect/connect";

class QuizQuestions extends Component {

    constructor() {
        super();
        const quizAnswers = quizQuestionsList.map((question) => questionToAnswers(question.name, ""));
        console.log(quizAnswers);
        this.state = {
            quizAnswers
        };
    }

    componentDidMount() {
        this.props.storeAnswers(this.state.quizAnswers);
    }


    handleClick(e) {
        this.state.quizAnswers = processAnswers(this.state.quizAnswers, e.target.getAttribute("name"), e.target.getAttribute("value"));
        this.props.storeAnswers(this.state.quizAnswers);
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
            let img;
            if (questions[i].image != undefined) {
                img = <img src={require("../images/" + questions[i].image)}/>;
            }
            quiz.push(<div key={i}>
                <legend key={i}>{i + 1}. {questions[i].question}</legend>
                {answers}{img}</div>)
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

function questionToAnswers(name, answer) {
    return {
        question: name,
        answer: answer
    }
}

function processAnswers(previousAnswers, question, newAnswer) {
    return previousAnswers.map((prevAnswer) => questionToAnswers(prevAnswer.question, prevAnswer.question === question ? newAnswer : prevAnswer.answer))
}

function mapStateToProps(state) {
    return {
        spotTheDifferencReduce: state.spotTheDifferencReduce
    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({storeAnswers: saveAnswers}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(QuizQuestions);