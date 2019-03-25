import {ADD_USER} from '../actions/types';
const initialState = {
    user: {
        username: '',
        email: '',
        _id: ''
    }
}
export default function(state = initialState, action){
    switch(action.type){
        case ADD_USER:
        return {...state,
            user: action.payload
            }
        default:
            return state;    
    }
}