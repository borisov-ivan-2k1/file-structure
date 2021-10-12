import { actionTypes } from './actionsTypes';
import { Reducer, ReducerActions } from './interfaces';

const baseState: Reducer = {
  data: null,
  rootDirId: null,
}

export const structureReducer = (state = baseState, action: ReducerActions): Reducer => {
  switch (action.type) {

    case actionTypes.SET_STRUCTURE: {

      const item = action.payload;
      const addData = item.children?.reduce((acc, child) => ({...acc, [child.id]: child}), {});

      return {
        data: {
          ...state.data,
          [item.id]: item,
          ...addData,
        },
        rootDirId: item.id
      };
    }
    
    default: {
      return state
    }
  }
}