import { State } from 'redux/rootReducer';

export const selectData = (dirId: number) => 
  (state: State) => state?.structure?.data?.[dirId];

export const selectRootDirId = (state: State) => state.structure.rootDirId || 0; 