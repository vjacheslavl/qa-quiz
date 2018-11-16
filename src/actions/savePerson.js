export const savePerson = (personName) => {
    return {
        type: "PERSON_SAVED",
        payload: personName
    }
}