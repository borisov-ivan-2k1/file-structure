import { actionTypes } from './actionsTypes';
import { ItemReduxData } from 'utils/api/interfaces/structure';

export type Reducer = {
  data: { [key: number]: ItemReduxData } | null;
  rootDirId: number | null;
}

export type AInitStructure = { type: typeof actionTypes.INIT_STRUCTURE };
export type CInitStructure = () => AInitStructure;

export type PSetStructure = ItemReduxData;
export type ASetStructure = { type: typeof actionTypes.SET_STRUCTURE, payload: PSetStructure };
export type CSetStructure = (payload: PSetStructure) => ASetStructure;

export type ReducerActions = ASetStructure;