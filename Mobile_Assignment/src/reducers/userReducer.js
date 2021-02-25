import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
} from '../actions/actionCreators';

const initialState = {
  user: [],
  isFetching: false,
  isError: false,
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER:
      return {...state, user: [], isFetching: true};
    case FETCHING_USER_SUCCESS:
      return {...state, user: action.data, isFetching: false};
    case FETCHING_USER_FAILURE:
      return {...state, isError: true, isFetching: false};
    default:
      return state;
  }
}
