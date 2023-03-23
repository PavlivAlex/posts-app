import React, { MouseEvent } from 'react';

// helpers
import styled from 'styled-components';

// components
import { Content } from 'antd/es/layout/layout';

interface IconProps {
  size?: number;
  color?: string;
  component: any;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Icon = ({ size = 18, color = '#1d1d1de6', component, onClick }: IconProps) => {
  return (
    <StyledWrapper size={size} color={color} onClick={onClick}>
      {component}
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Content)<{ size: number; color: string }>`
  flex: initial !important;
  margin: 0 ${({ theme }) => theme.marginS};
  &:hover {
    cursor: pointer;
    span {
      svg {
        path {
          color: ${({ theme }) => theme.blue};
        }
      }
    }
  }
  span {
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    svg {
      height: 100%;
      width: 100%;
      path {
        color: ${({ color }) => color};
      }
    }
  }
`;

export default Icon;
