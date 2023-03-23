import React, { ReactNode, MouseEvent } from 'react';

// components
import { Typography } from 'antd';
import styled from 'styled-components';

interface TextProps {
  color?: string;
  weight?: number;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const Text = ({ weight = 400, color = 'black', children, onClick }: TextProps) => {
  return (
    <StyledText weight={weight} color={color} onClick={onClick}>
      {children}
    </StyledText>
  );
};

const StyledText = styled(Typography)<{ weight: number; color: string }>`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
`;
export default Text;
