import {
    FETCH_COMMENTS, 
    ADD_COMMENT, 
    CLEAR_COMMENT, 
    LIKE_COMMENT,
    GET_COMMENT} from '../actions/types';

const initialState = {
    comments: [],
    comment: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_COMMENTS:
            return {...state, comments: action.payload}
        case ADD_COMMENT:
            return {...state, comments: [...state.comments, action.payload]}
        case CLEAR_COMMENT:
            return {...state, comments: []} 
        case GET_COMMENT:
            return {...state, comment: action.payload}                   
        default:
            return state;    
    }
}