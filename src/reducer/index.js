import {combineReducers} from 'redux'
import postReducer from './postReducer'

const rootReducer = combineReducers({
    poster:postReducer
});

export default rootReducer;
