import quizQuestionsList from "../data/quizQuestions";
import wrongCodeLines from "../data/wrongCodeLines";


export function countCorrectQuestions(answers) {
    return answers.filter((answer) => isCorrectAnswer(answer)).length;
}

function isCorrectAnswer(answerData) {
    const foundQuestion = quizQuestionsList.filter((questionItem) => questionItem.name === answerData.question)[0];
    const foundAnswer = foundQuestion.answers.filter((answerItem) => answerItem.id === answerData.answer);
    return foundAnswer.length === 0 ? false : foundAnswer[0].correct;
}

export function countCodeLines(codeLines) {
    return codeLines.filter((codeline) => isCorrectlyMarkedCodeline(codeline)).length;

}

function isCorrectlyMarkedCodeline(codelineData) {
    const foundCodeline = wrongCodeLines.filter((codelineItem) => (codelineItem.line - 1) === codelineData.key)[0];
    return foundCodeline.bad === codelineData.marked;
}


export function countDifferences(differences) {
    return differences.filter((item) => item.found === true).length;
}