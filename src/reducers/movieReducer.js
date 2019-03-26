import {FETCH_MOVIES} from '../actions/types';

const initialState = {
    movies: [],
    movie: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_MOVIES:
            return {...state, movies: action.payload}          
        default:
            return state;    
    }
}