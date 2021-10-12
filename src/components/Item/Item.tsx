import { Props, connector } from './Item.index';
import { Tree } from 'components';

const Component: React.FC<Props> = ({
  data
}) => {

  if (!data) return <></>;

  return <div style={{ paddingLeft: '20px' }}>
    <span>
       {data.title}
    </span>

    {data.children && <Tree data={data.children} />}
  </div>
}

export const Item = connector(Component);