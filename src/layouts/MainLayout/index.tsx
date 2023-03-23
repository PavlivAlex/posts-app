import React, { ReactNode } from 'react';

// helpers
import styled from 'styled-components';

// components
import Header from '../../components/Antd/Button/Header';
import { Content } from 'antd/es/layout/layout';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <LayoutContent>{children}</LayoutContent>
    </>
  );
};

const LayoutContent = styled(Content)`
  min-height: 100vh;
  padding: ${({ theme }) => theme.paddingXXL};
  background: ${({ theme }) => theme.lightGray};
`;

export default MainLayout;
