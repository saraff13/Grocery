import * as types from '../actionTypes';

export const addBirthdayItem = payload => ({
  type: types.ADD_BIRTHDAY_ITEM_SUCCESS,
  payload,
});

export const deleteBirthdayItem = payload => ({
  type: types.DELETE_BIRTHDAY_ITEM_SUCCESS,
  payload,
});
