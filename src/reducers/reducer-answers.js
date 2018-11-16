export default function (state = {spotTheDifferencReduce: {}, answers: {}, personName: ""}, action) {
    switch (action.type) {
        case "ANSWERS_SAVED":
            return {
                ...state,
                answers: action.payload
            }
        case "PERSON_SAVED":
            return {
                ...state,
                personName: action.payload,
            }
    }
    return state;
}