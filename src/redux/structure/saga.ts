import { takeLeading, call, put, CallEffect, PutEffect } from 'redux-saga/effects';
import { actionTypes } from './actionsTypes';
import { setStructure } from './actions';
import * as types from './interfaces';

import * as api from 'utils/api/requests/structure';
import { IStructureResponse } from 'utils/api/interfaces/structure';
import { prepareRootDir } from 'utils/helpers/structure'; 

function* initStructureSaga(action: types.AInitStructure): Generator {
  try {
    const data: any = yield call(api.getStructure);
    yield put(setStructure(prepareRootDir(data)))
  } catch (e) {
    console.error('initStructureSaga error', e);
  }
}

const structure = function* () {
  yield takeLeading(actionTypes.INIT_STRUCTURE, initStructureSaga);
}

export default structure;
