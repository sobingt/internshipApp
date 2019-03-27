import {FETCH_MOVIES, GET_MOVIE} from './types';

export const fetchMovies = movies => dispatch => {
    dispatch({
        type: FETCH_MOVIES,
        payload: movies
    })
}

export const getMovie = movie => dispatch => {
    dispatch({
        type: GET_MOVIE,
        payload: movie
    })
}