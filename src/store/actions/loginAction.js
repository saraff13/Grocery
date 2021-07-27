import * as types from '../actionTypes';

export const initLogin = payload => ({
  type: types.LOGIN_START,
  payload,
});

export const setUserData = payload => ({
  type: types.SET_USER_DATA,
  payload,
});
