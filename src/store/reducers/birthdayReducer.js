import AsyncStorage from '@react-native-community/async-storage';
import * as types from '../actionTypes';

const INITIAL_STATE = {
  itemList: [],
  error: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_BIRTHDAY_ITEM_START || types.DELETE_BIRTHDAY_ITEM_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };
    case types.ADD_BIRTHDAY_ITEM_SUCCESS:
      const params = action.payload;
      const updatedData = [
        ...params.itemList,
        {itemName: params.itemName, itemQuantity: params.itemQuantity},
      ];
      return {
        ...state,
        ...INITIAL_STATE,
        itemList: updatedData,
        loading: false,
      };
    case types.DELETE_BIRTHDAY_ITEM_SUCCESS:
      const newData = action.payload.itemList
        .slice(0, action.payload.index)
        .concat(action.payload.itemList.slice(action.payload.index + 1));
      return {
        ...state,
        ...INITIAL_STATE,
        itemList: newData,
        loading: false,
      };
    case types.ADD_BIRTHDAY_ITEM_FAIL || types.DELETE_BIRTHDAY_ITEM_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
