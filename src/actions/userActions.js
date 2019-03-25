import {ADD_USER} from './types';

export const registerAction = newUser => dispatch => {
        dispatch({
            type: ADD_USER,
            payload: newUser
        })
}