import {FETCHING_RESOURCE, FETCHING_USER} from './actionCreators';

export function fetchResource(resource: string) {
  return {
    type: FETCHING_RESOURCE,
    payload: resource,
  };
}

export function fetchUser(user: string) {
  return {
    type: FETCHING_USER,
    payload: user,
  };
}
