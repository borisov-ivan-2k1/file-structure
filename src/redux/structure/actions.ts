import { actionTypes } from './actionsTypes';
import * as types from './interfaces';

/********************************************
******************** TO SAGA ****************
********************************************/

export const initStructure: types.CInitStructure = () => ({
  type: actionTypes.INIT_STRUCTURE
})

export const getStructure: types.CGetStructure = (payload) => ({ 
  type: actionTypes.GET_STRUCTURE, payload 
});

/********************************************
****************** TO REDUCER ***************
********************************************/

export const setStructure: types.CSetStructure = (payload) => ({ 
  type: actionTypes.SET_STRUCTURE, payload 
});

export const changeItemData: types.CChangeItemData = (payload) => ({
   type: actionTypes.CHANGE_ITEM_DATA, payload 
})

export const setRootDirId: types.CSetRootDitId = (payload) => ({
  type: actionTypes.SET_ROOT_DIR_ID, payload
})