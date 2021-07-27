import * as types from '../actionTypes';

export const initLogin = payload => ({
  type: types.LOGIN_SUCCESS,
  payload,
});
