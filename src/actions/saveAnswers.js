export const saveAnswers = (answers) => {
    return {
        type: "ANSWERS_SAVED",
        payload: answers
    }
}