import { combineReducers } from 'redux';
import userReducer from './userReducer';
import movieReducer from './movieReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  user : userReducer,
  movie: movieReducer,
  comment: commentReducer
});