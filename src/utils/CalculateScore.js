import quizQuestionsList from "../data/quizQuestions";
import wrongCodeLines from "../data/wrongCodeLines";


export function countCorrectQuestions(answers) {
    return parseFloat(answers.filter((answer) => isCorrectAnswer(answer)).length).toPrecision(2);
}

function isCorrectAnswer(answerData) {
    const foundQuestion = quizQuestionsList.filter((questionItem) => questionItem.name === answerData.question)[0];
    const foundAnswer = foundQuestion.answers.filter((answerItem) => answerItem.id === answerData.answer);
    return foundAnswer.length === 0 ? false : foundAnswer[0].correct;
}

export function countCodeLines(codeLines) {
    return parseFloat(9 * codeLines.filter((codeline) => isCorrectlyMarkedCodeline(codeline)).length / 28).toPrecision(2);

}

function isCorrectlyMarkedCodeline(codelineData) {
    const foundCodeline = wrongCodeLines.filter((codelineItem) => (codelineItem.line - 1) === codelineData.key)[0];
    return foundCodeline.bad === codelineData.marked;
}


export function countDifferences(differences) {
    return parseFloat(9 * differences.filter((item) => item.found === true).length / differences.length).toPrecision(2);
}

export function calculateTotal(answers, differences, codeLine) {
    return parseFloat(differences) + parseFloat(answers) + parseFloat(codeLine);
}