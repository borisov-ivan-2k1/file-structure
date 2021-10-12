import { all } from 'redux-saga/effects';

import structure from './structure/saga';

function* rootSaga() {
  yield all([
    structure()
  ])
}

export default rootSaga;