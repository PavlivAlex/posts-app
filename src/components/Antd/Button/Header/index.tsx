import React from 'react';

// helpers
import styled from 'styled-components';
import { RoutesEnum } from '../../../../router/routes';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// components
import Text from '../../Text';
import Button from '..';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

const { Header: AntdHeader } = Layout;

const Header = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    if (location.pathname === RoutesEnum.Home) {
      navigate(RoutesEnum.Posts);
    } else {
      navigate(RoutesEnum.Home);
    }
  };

  return (
    <StyledHeader>
      <Text>Welcome!</Text>
      <ButtonsWrapper>
        {id && <Button onClick={() => navigate(RoutesEnum.Posts)}>Back to Posts</Button>}
        <Button onClick={handleNavigateClick}>{location.pathname === RoutesEnum.Home ? 'Go to Posts' : 'Go to Home'}</Button>
      </ButtonsWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled(AntdHeader)`
  position: fixed;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.dark};
  article {
    color: white;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizeXL};
  }
`;

const ButtonsWrapper = styled(Content)`
  flex: initial !important;
  button {
    margin-left: ${({ theme }) => theme.marginM};
  }
`;

export default Header;
