import * as types from '../actionTypes';

const INITIAL_STATE = {
  storeLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOADER_START:
      return {
        ...state,
        storeLoading: true,
      };
    case types.LOADER_STOP:
      return {
        ...state,
        storeLoading: false,
      };
    default:
      return state;
  }
};
