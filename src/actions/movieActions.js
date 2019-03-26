import {FETCH_MOVIES} from './types';

export const fetchMovies = movies => dispatch => {
    dispatch({
        type: FETCH_MOVIES,
        payload: movies
    })
}