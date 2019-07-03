import { combineReducers } from 'redux';
import logReducer from './log/logReducer'

export default combineReducers({
  log: logReducer,
});
