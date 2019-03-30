import {combineReducers} from 'redux'
import postReducer from './postReducer'
import countReducer from './countReducer'

const rootReducer = combineReducers({
    poster:postReducer,
    counter:countReducer,
});

export default rootReducer;
