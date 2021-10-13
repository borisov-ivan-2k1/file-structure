import { Props } from './Tree.index';
import { Item } from 'components';

const Component: React.FC<Props> = ({ data }) => {

  if (!data.length) return <></>;

  return <>
    {data.map(el => <Item key={el.id} id={el.id} />)}
  </>
}

export const Tree = Component;