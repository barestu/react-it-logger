import { combineReducers } from 'redux';
import logReducer from './log/logReducer';
import techReducer from './tech/techReducer';

export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
