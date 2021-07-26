import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddle = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(sagaMiddle));
sagaMiddle.run(rootSaga);
