import {
  FETCHING_RESOURCE,
  FETCHING_RESOURCE_SUCCESS,
  FETCHING_RESOURCE_FAILURE,
} from '../actions/actionCreators';

const initialState = {
  resource: [],

  isFetching: false,
  isError: false,
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_RESOURCE:
      return {...state, resource: [], isFetching: true};
    case FETCHING_RESOURCE_SUCCESS:
      return {...state, resource: action.data, isFetching: false};
    case FETCHING_RESOURCE_FAILURE:
      return {...state, isError: true, isFetching: false};
    default:
      return state;
  }
}
