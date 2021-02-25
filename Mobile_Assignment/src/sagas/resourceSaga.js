import {put, takeLatest} from 'redux-saga/effects';
import {
  FETCHING_RESOURCE,
  FETCHING_RESOURCE_SUCCESS,
  FETCHING_RESOURCE_FAILURE,
} from '../actions/actionCreators';
import getData from '../services/apiService';

function* fetchResoure(action) {
  try {
    const data = yield getData(action.payload);
    yield put({type: FETCHING_RESOURCE_SUCCESS, data});
  } catch (error) {
    yield put({type: FETCHING_RESOURCE_FAILURE, error});
  }
}

function* resourceSaga() {
  yield takeLatest(FETCHING_RESOURCE, fetchResoure);
}

export default resourceSaga;
