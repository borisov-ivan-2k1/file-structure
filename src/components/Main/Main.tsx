import { useEffect } from 'react';
import { Props, connector } from './Main.index';
import { Item } from 'components';

const Component: React.FC<Props> = ({
  initStructure
}) => {

  useEffect(() => {
    initStructure();
  }, [])

return <div>
  <Item />
</div>
}

export const Main = connector(Component);