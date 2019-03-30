import {FETCH_POST, NEW_POST} from '../action/types'

const initialState = {
    postList:[{id:0, title:'xxx', body:'ooo'} ],
    newPost:{}
}
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POST:
            return {
                ...state, // Spread Operator 
                postList: action.payload
            };

        case NEW_POST:
            return {
                ...state,
                newPost: action.payload
            };

        default:
            return state;
    }
}