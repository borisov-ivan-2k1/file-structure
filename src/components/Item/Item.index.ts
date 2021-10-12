import { State } from 'redux/rootReducer';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps  } from 'react-redux';
import { selectData, selectRootDirId } from 'redux/structure/selectors';

export const mapState = (state: State, { id }: IOwnProps) => {
  const rootDirId = selectRootDirId(state);
  const dirId = id || rootDirId;
  return {
    data: selectData(dirId)(state)
  }
}

export const mapDispatch = (dispatch: Dispatch<Action>) => bindActionCreators({
  
}, dispatch);


export const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

interface IOwnProps {
  id?: number;
}

export interface Props extends IOwnProps, PropsFromRedux {}
