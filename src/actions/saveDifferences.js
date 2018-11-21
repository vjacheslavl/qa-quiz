export const saveDifferences = (answers) => {
    return {
        type: "SPOT_THE_DIFFERENCES_SAVED",
        payload: answers
    }
};