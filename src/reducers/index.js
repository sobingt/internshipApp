import { combineReducers } from 'redux';
import userReducer from './userReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  user : userReducer,
  movie: movieReducer
});