import { actionTypes } from './actionsTypes';

export type Reducer = {
  data: any;
}

export type AInitStructure = { type: typeof actionTypes.INIT_STRUCTURE };
export type CInitStructure = () => AInitStructure;

export type ReducerActions = any;