import { combineReducers } from 'redux';
import ComandReducer from './ComandReducer';
import PlayerReducer from './PlayerReducer';

const appReducer = combineReducers({
  comands: ComandReducer,
  players: PlayerReducer
});

export default appReducer;