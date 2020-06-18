import { combineReducers } from "redux";
import articlesReducer from './articles/articlesReducer';
import authReducer from '../reducers/auth/authReducer';


export default combineReducers({
  auth: authReducer,
  articles: articlesReducer,
});