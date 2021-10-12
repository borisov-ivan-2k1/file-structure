import { State } from 'redux/rootReducer';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps  } from 'react-redux';

export const mapState = (state: State, props: any) => ({
  
})

export const mapDispatch = (dispatch: Dispatch<Action>) => bindActionCreators({
  
}, dispatch);


export const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>
export interface Props extends PropsFromRedux {}
