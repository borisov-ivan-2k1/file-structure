import { actionTypes } from './actionsTypes';
import { ItemReduxData } from 'utils/api/interfaces/structure';

export type Reducer = {
  data: { [key: number]: ItemReduxData } | null;
  rootDirId: number | null;
}

// SAGA

export type AInitStructure = { type: typeof actionTypes.INIT_STRUCTURE };
export type CInitStructure = () => AInitStructure;

export type PGetStructure = number;
export type AGetStructure = { type: typeof actionTypes.GET_STRUCTURE, payload: PGetStructure };
export type CGetStructure = (payload: PGetStructure) => AGetStructure;

// REDUCER

export type PSetStructure = ItemReduxData;
export type ASetStructure = { type: typeof actionTypes.SET_STRUCTURE, payload: PSetStructure };
export type CSetStructure = (payload: PSetStructure) => ASetStructure;

export type PChangeItemData = { id: number, data: Partial<ItemReduxData> };
export type AChangeItemData = { type: typeof actionTypes.CHANGE_ITEM_DATA, payload: PChangeItemData };
export type CChangeItemData = (payload: PChangeItemData) => AChangeItemData;

export type PSetRootDitId = number;
export type ASetRootDitId = { type: typeof actionTypes.SET_ROOT_DIR_ID, payload: PSetRootDitId };
export type CSetRootDitId = (payload: PSetRootDitId) => ASetRootDitId;

export type ReducerActions = ASetStructure | ASetRootDitId | AChangeItemData;