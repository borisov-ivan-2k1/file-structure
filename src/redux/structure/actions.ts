import { actionTypes } from './actionsTypes';
import * as types from './interfaces';

/********************************************
******************** TO SAGA ****************
********************************************/

export const initStructure: types.CInitStructure = () => ({
  type: actionTypes.INIT_STRUCTURE
})


/********************************************
****************** TO REDUCER ***************
********************************************/

export const setStructure: types.CSetStructure = (payload) => ({ 
  type: actionTypes.SET_STRUCTURE, payload 
});