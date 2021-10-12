import { combineReducers } from 'redux';
import { store } from 'redux/configureStore';
import { structureReducer as structure } from './structure/reducer';


export const rootReducer = combineReducers({
  structure
});

export type State = ReturnType<typeof rootReducer>;