export const savePerson = (data) => {
    return {
        type: "PERSON_SAVED",
        payload: data
    }
};