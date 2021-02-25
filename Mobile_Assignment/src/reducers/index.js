import {combineReducers} from 'redux';
import resourceReducer from './resourceReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  resourceReducer,
  userReducer,
});

export default reducers;
