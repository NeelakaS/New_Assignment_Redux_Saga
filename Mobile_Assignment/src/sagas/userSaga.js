import {put, takeLatest} from 'redux-saga/effects';
import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
} from '../actions/actionCreators';
import getData from '../services/apiService';

function* fetchUser(action) {
  try {
    const data = yield getData(action.payload);
    yield put({type: FETCHING_USER_SUCCESS, data});
  } catch (error) {
    yield put({type: FETCHING_USER_FAILURE, error});
  }
}

function* resourceSaga() {
  yield takeLatest(FETCHING_USER, fetchUser);
}

export default resourceSaga;
