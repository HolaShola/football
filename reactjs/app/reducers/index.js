import { combineReducers } from 'redux';
import ComandReducer from './ComandReducer';
import PlayerReducer from './PlayerReducer';
import AuthReducer from './AuthReducer'; 

const appReducer = combineReducers({
  comands: ComandReducer,
  players: PlayerReducer,
  auth: AuthReducer
});

export default appReducer;