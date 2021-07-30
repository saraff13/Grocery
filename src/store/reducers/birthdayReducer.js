import AsyncStorage from '@react-native-community/async-storage';
import * as types from '../actionTypes';

const INITIAL_STATE = {
  name: '',
  birthdayDate: '',
  shoppingDate: new Date(),
  itemList: [],
  error: null,
  loading: false,
  edit: false,
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
        itemList: updatedData,
        loading: false,
      };
    case types.DELETE_BIRTHDAY_ITEM_SUCCESS:
      const modifiedData = action.payload.itemList
        .slice(0, action.payload.index)
        .concat(action.payload.itemList.slice(action.payload.index + 1));
      return {
        ...state,
        itemList: modifiedData,
        loading: false,
      };
    case types.ADD_BIRTHDAY_ITEM_FAIL || types.DELETE_BIRTHDAY_ITEM_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case types.SAVE_BIRTHDAY_DATA:
      // console.log(action.payload);
      const {edit, newData, oldData, index} = action.payload;
      if (edit) {
        oldData[index] = newData;
        AsyncStorage.removeItem('birthdayData');
        AsyncStorage.setItem('birthdayData', JSON.stringify(oldData));
      } else {
        AsyncStorage.getItem('birthdayData')
          .then(data => {
            AsyncStorage.setItem(
              'birthdayData',
              JSON.stringify([...JSON.parse(data), newData]),
            );
          })
          .catch(error => {
            console.log('reducer error => ', error);
            AsyncStorage.setItem('birthdayData', JSON.stringify([newData]));
          });
      }
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
      };
    case types.DELETE_BIRTHDAY_DATA:
      AsyncStorage.setItem(
        'birthdayData',
        JSON.stringify(
          action.payload.data
            .slice(0, action.payload.index)
            .concat(action.payload.data.slice(action.payload.index + 1)),
        ),
      );
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
      };
    case types.SET_BIRTHDAY_DATA:
      return {
        ...state,
        ...INITIAL_STATE,
        itemList: action.payload.itemList,
        name: action.payload.name,
        birthdayDate: action.payload.birthdayDate,
        shoppingDate: action.payload.shoppingDate,
        edit: action.payload.edit,
      };

    case types.CHANGE_BIRTHDAY_PERSON_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case types.CHANGE_BIRTHDAY_DATE:
      return {
        ...state,
        birthdayDate: action.payload,
      };
    case types.CHANGE_BIRTHDAY_SHOPPING_DATE:
      return {
        ...state,
        shoppingDate: action.payload,
      };
    default:
      return state;
  }
};
