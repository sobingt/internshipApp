import {REGISTER_USER, LOGIN_USER, SIGNOUT_USER} from './types';
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

export const logoutAction = () => dispatch => {
    dispatch({
        type: SIGNOUT_USER,
        payload: {}
    })
}