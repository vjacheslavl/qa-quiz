export default function (state = {differences: {}, answers: {}, personName: ""}, action) {
    switch (action.type) {
        case "ANSWERS_SAVED":
            return {
                ...state,
                answers: action.payload
            }
        case "SPOT_THE_DIFFERENCES_SAVED":
            return {
                ...state,
                differences: action.payload
            }
        case "PERSON_SAVED":
            return {
                ...state,
                personName: action.payload,
            }
    }
    return state;
}