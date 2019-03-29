import {FETCH_COMMENTS, ADD_COMMENT, CLEAR_COMMENT} from './types';
import axios from 'axios';
export const getComments = id => dispatch => {
    const url = `https://user-api-intern.herokuapp.com/movies/${id}/comments`
    axios.get(url)
    .then(response => {
        dispatch({
            type: FETCH_COMMENTS,
            payload: response.data
        })
    })
    .catch(err => console.log(err));
}

export const AddComment = commentAndId => dispatch => {
    const id = commentAndId.id;
    const url = `https://user-api-intern.herokuapp.com/movies/${id}/comments`
    axios.post(url, commentAndId.comment)
    .then(response => {
        dispatch({
            type: ADD_COMMENT,
            payload: response.data
        })
    })
    .catch(err => console.log(err));
}

export const clearComments = () => dispatch => {
    dispatch({
        type: CLEAR_COMMENT
    })
}