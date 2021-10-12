import { Props, connector } from './Item.index';
import { Tree } from 'components';

const Component: React.FC<Props> = ({
  data,
  getStructure,
  changeItemData
}) => {

  if (!data) return <></>;

  const handleOpenItem = () => {
    if (!data.isFolder) return;

    changeItemData({id: data.id, data: { isOpen: !data.isOpen }});
    if (!data.isLoaded) getStructure(data.id);
  }

  return <div style={{ paddingLeft: '20px' }}>

    <div onClick={handleOpenItem}>
      <span>
        {data.title}
      </span>
    </div>
    

    {(data.isOpen) && <Tree data={data.children} />}
  </div>
}

export const Item = connector(Component);