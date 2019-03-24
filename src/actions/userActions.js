import {ADD_USER} from './types';
export const userActions = newUser => dispatch => {
        dispatch({
            type: ADD_USER,
            payload: newUser
        })
}