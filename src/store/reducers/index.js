import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
  loginReducer,
  loaderReducer,
});
