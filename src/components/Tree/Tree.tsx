import { Props } from './Tree.index';
import { Item } from 'components';

const Component: React.FC<Props> = ({ data }) => {

return <div>
  {data.map(el => <Item id={el.id} />)}
</div>
}

export const Tree = Component;