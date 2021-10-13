import { State } from 'redux/rootReducer';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { selectData, selectRootDirId } from 'redux/structure/selectors';
import { getStructure, changeItemData } from 'redux/structure/actions';

export const mapState = (state: State, { id }: IOwnProps) => {
  const rootDirId = selectRootDirId(state);
  const dirId = id || rootDirId;
  return {
    data: selectData(dirId)(state),
    rootDirId
  }
}

export const mapDispatch = (dispatch: Dispatch<Action>) => bindActionCreators({
  getStructure,
  changeItemData
}, dispatch);


export const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

interface IOwnProps {
  id?: number;
}

export interface Props extends IOwnProps, PropsFromRedux {}
export interface StyledWrapperProps {
  isRoot: boolean;
}
