import {all, fork} from 'redux-saga/effects';
import resourceSaga from './resourceSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([fork(resourceSaga), fork(userSaga)]);
}
