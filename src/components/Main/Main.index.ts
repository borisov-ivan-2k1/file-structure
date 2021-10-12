import { Action, bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps  } from 'react-redux';
import { initStructure } from 'redux/structure/actions';

export const mapDispatch = (dispatch: Dispatch<Action>) => bindActionCreators({
  initStructure
}, dispatch);


export const connector = connect(undefined, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>
export interface Props extends PropsFromRedux {}
