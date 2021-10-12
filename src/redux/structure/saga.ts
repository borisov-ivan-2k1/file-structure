import { takeLeading, takeEvery, call, put, select } from 'redux-saga/effects';
import { actionTypes } from './actionsTypes';
import { setStructure, changeItemData, setRootDirId } from './actions';
import * as types from './interfaces';

import * as api from 'utils/api/requests/structure';
import { IStructureResponse } from 'utils/api/interfaces/structure';
import { prepareDir, prepareRootDir } from 'utils/helpers/structure'; 
import { selectData } from './selectors';

function* initStructureSaga(action: types.AInitStructure): Generator {
  try {
    const data: any = yield call(api.getStructure);
    yield put(setRootDirId(data.id));
    yield put(setStructure(prepareRootDir(data)))
  } catch (e) {
    console.error('initStructureSaga error', e);
  }
}

function* getStructureSaga(action: types.AGetStructure): Generator {
  try {
    const dirId = action.payload;
    yield put(changeItemData({ id: dirId, data: { isLoading: true } }));
    const data: any = yield call(api.getStructure, dirId);
    const dir: any = yield select(selectData(dirId));

    yield put(setStructure(prepareDir(dir, data.children)));
    yield put(changeItemData({ id: dirId, data: { isLoading: false, isLoaded: true } }));
  } catch (e) {
    console.error('getStructureSaga error', e);
  }
}

const structure = function* () {
  yield takeLeading(actionTypes.INIT_STRUCTURE, initStructureSaga);
  yield takeEvery(actionTypes.GET_STRUCTURE, getStructureSaga);
}

export default structure;
