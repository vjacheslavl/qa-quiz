export default function (state = {differences: {}, answers: {}, codeLines: [], personName: "", email: ""}, action) {
    switch (action.type) {
        case "ANSWERS_SAVED":
            return {
                ...state,
                answers: action.payload
            }
        case "CODELINES_SAVED":
            return {
                ...state,
                codeLines: action.payload
            }
        case "SPOT_THE_DIFFERENCES_SAVED":
            return {
                ...state,
                differences: action.payload
            }
        case "PERSON_SAVED":
            return {
                ...state,
                personName: action.payload.personName,
                email: action.payload.email,
            }
        default:
            return state;
    }
}