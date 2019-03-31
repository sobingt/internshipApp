import {REGISTER_USER, LOGIN_USER, SIGNOUT_USER} from '../actions/types';

const initialState = {
    user: { }
}
export default function(state = initialState, action){
    switch(action.type){
        case REGISTER_USER:
            return {...state,
                user: action.payload
                }
        
        case LOGIN_USER:
            return {...state,
                user: action.payload
                }
        case SIGNOUT_USER:
            return{
                ...state,
                user: action.payload
                }           
        default:
            return state;    
    }
}