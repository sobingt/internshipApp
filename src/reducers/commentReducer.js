import {FETCH_COMMENTS, ADD_COMMENT, CLEAR_COMMENT} from '../actions/types';

const initialState = {
    comments: [],
    likes: 0
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_COMMENTS:
            return {...state, comments: action.payload}
        case ADD_COMMENT:
            return {...state, comments: [...state.comments, action.payload]}
        case CLEAR_COMMENT:
            return {...state, comments: []}        
        default:
            return state;    
    }
}