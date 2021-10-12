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
        ...state,
        data: {
          ...state.data,
          [item.id]: item,
          ...addData,
        },
      };
    }

    case actionTypes.SET_ROOT_DIR_ID: {
      return {
        ...state,
        rootDirId: action.payload
      }
    }

    case actionTypes.CHANGE_ITEM_DATA: {

      const { id, data } = action.payload;
      if (!state.data) return state;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...state.data[id],
            ...data
          }
        }
      }
    }
    
    
    default: {
      return state
    }
  }
}