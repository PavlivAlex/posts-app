import React, { ReactNode } from 'react';

// components
import { Content } from 'antd/es/layout/layout';
import { Tooltip as AntdTooltip } from 'antd';

type PlacmentType = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  title: string;
  placement?: PlacmentType;
  children: ReactNode;
}

const Tooltip = ({ title, children, placement = 'top' }: TooltipProps) => {
  return (
    <AntdTooltip trigger='hover' title={title} placement={placement}>
      <Content>{children}</Content>
    </AntdTooltip>
  );
};

export default Tooltip;
