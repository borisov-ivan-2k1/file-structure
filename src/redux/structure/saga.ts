import { takeLeading } from 'redux-saga/effects';
import { actionTypes } from './actionsTypes';
import * as types from './interfaces';

function* initStructureSaga(action: types.AInitStructure): Generator {
  try {
    yield;
  } catch (e) {
    console.error('initStructureSaga error', e);
  }
}

const structure = function* () {
  yield takeLeading(actionTypes.INIT_STRUCTURE, initStructureSaga);
}

export default structure;
