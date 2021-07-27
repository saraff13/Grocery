import * as types from '../actionTypes';

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      };
    default:
      return state;
  }
};
