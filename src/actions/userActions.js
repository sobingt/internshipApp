import {REGISTER_USER, LOGIN_USER} from './types';
export const registerAction = newUser => dispatch => {
        dispatch({
            type: REGISTER_USER,
            payload: newUser
        })
}

export const loginAction = user => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: user
    })
}