import * as types from '../actionTypes';

export const startLoader = () => ({
  type: types.LOADER_START,
});

export const stopLoader = () => ({
  type: types.LOADER_STOP,
});
