import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import loaderReducer from './loaderReducer';
import birthdayReducer from './birthdayReducer';

export default combineReducers({
  loginReducer,
  loaderReducer,
  birthdayReducer,
});
