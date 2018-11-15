import {combineReducers} from 'redux';
import SpotTheDifferenceReducer from './spotTheDifferenceReducer'
import AnswersReducers from './reducer-answers'

const allReducers = combineReducers({
    spotTheDifferencReduce: SpotTheDifferenceReducer,
    answers: AnswersReducers
});


export default allReducers;