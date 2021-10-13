import React from 'react';
import styled from 'styled-components';

interface Props {
  size?: number;
}
interface StyledProps {
  size: number;
}

const StyledLoader = styled.div<StyledProps>`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 3px solid rgba(0,0,0,.3);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
`

export const Loader: React.FC<Props> = ({ size=50 }) => 
  <StyledLoader id='spin' size={size} />