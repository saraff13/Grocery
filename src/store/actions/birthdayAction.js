import * as types from '../actionTypes';

export const addBirthdayItem = payload => ({
  type: types.ADD_BIRTHDAY_ITEM_SUCCESS,
  payload,
});

export const deleteBirthdayItem = payload => ({
  type: types.DELETE_BIRTHDAY_ITEM_SUCCESS,
  payload,
});

export const saveBirthdayData = payload => ({
  type: types.SAVE_BIRTHDAY_DATA,
  payload,
});

export const deleteBirthdayData = payload => ({
  type: types.DELETE_BIRTHDAY_DATA,
  payload,
});

export const setBirthdayData = payload => ({
  type: types.SET_BIRTHDAY_DATA,
  payload,
});
