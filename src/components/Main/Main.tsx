import { useEffect } from 'react';
import { Props, connector } from './Main.index';
import { Item } from 'components';
import styled from 'styled-components';

const StyledMain = styled.div `
  display: inline-block;
`

const Component: React.FC<Props> = ({
  initStructure
}) => {

  useEffect(() => {
    initStructure();
  }, [initStructure])

return <StyledMain>
  <Item />
</StyledMain>
}

export const Main = connector(Component);