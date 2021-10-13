import { combineReducers } from 'redux';
import { structureReducer as structure } from './structure/reducer';


export const rootReducer = combineReducers({
  structure
});

export type State = ReturnType<typeof rootReducer>;