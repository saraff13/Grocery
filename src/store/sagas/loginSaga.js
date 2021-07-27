import * as types from '../actionTypes';
import {takeLatest, put} from 'redux-saga/effects';
import API from '../../utils/API';

export default function* loginSaga() {
  yield takeLatest(types.LOGIN_START, login);
}

function* login(action) {
  yield put({
    type: types.LOADER_START,
  });
  try {
    const api = new API();
    const response = yield api.call({
      type: 'post',
      params: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
      apiEndPoint: 'login',
    });

    // console.log('Saga response => ', response);

    yield put({
      type: types.LOGIN_SUCCESS,
      payload: action.payload,
    });
    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    console.log('Saga error => ', error);
    yield put({
      type: types.LOGIN_FAIL,
      payload: error,
    });
    yield put({
      type: types.LOADER_STOP,
    });
  }
}
