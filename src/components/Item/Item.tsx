import { Props, StyledWrapperProps, connector } from './Item.index';
import { Tree } from 'components';
import styled from 'styled-components';
import { CaretRight, CaretDown, FileEarmark, Folder } from 'react-bootstrap-icons';
import { Loader } from 'ui';

const StyledWrapper = styled.div<StyledWrapperProps>`
  padding-left: ${props => props.isRoot ? 0 : '20px'};
`

const StyledItem = styled.div`
  padding: 3px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`

const StyledStub = styled.span`
  width: 16px;
`

const Component: React.FC<Props> = ({
  data,
  rootDirId,
  getStructure,
  changeItemData
}) => {

  if (!data) return <></>;

  const isRootDir = rootDirId === data.id;

  const handleOpenItem = () => {
    if (!data.isFolder) return;

    changeItemData({ id: data.id, data: { isOpen: !data.isOpen } });
    if (!data.isLoaded && !isRootDir) getStructure(data.id);
  }

  return <StyledWrapper isRoot={isRootDir}>

    <StyledItem onClick={handleOpenItem}>
      {
        data.isFolder ?
          data.isLoading ?
            <Loader size={16} /> :
            data.isOpen ?
              <CaretDown /> :
              <CaretRight /> :
          <StyledStub />
      }

      {
        data.isFolder ?
          <Folder /> :
          <FileEarmark />
      }

      <span>
        {data.title}
      </span>
    </StyledItem>


    {(data.isOpen && data.children) && <Tree data={data.children} />}
  </StyledWrapper>
}

export const Item = connector(Component);