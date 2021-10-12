import { actionTypes } from './actionsTypes';
import { Reducer, ReducerActions } from './interfaces';

const baseState: Reducer = {
  data: {},
}

export const structureReducer = (state = baseState, action: ReducerActions) => {
  switch (action.type) {
    
    default: {
      return state
    }
  }
}