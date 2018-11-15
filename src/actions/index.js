export const saveAnswers = (answers) => {
    console.log("XXX");
    console.log(answers);
    return {
        type: "ANSWERS_SAVED",
        payload: answers
    }
}