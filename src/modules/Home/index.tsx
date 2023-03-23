import React from 'react';

// helpers
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../router/routes';

// components
import Text from '../../components/Antd/Text';
import { Content } from 'antd/es/layout/layout';

const Home = () => {
  return (
    <StyledContent>
      <Text>In this application you can see, create, update, delete posts!</Text>
      <Text>Also you can see and add comments to posts!</Text>
      <Link to={RoutesEnum.Posts}>Lets try!</Link>
    </StyledContent>
  );
};

const StyledContent = styled(Content)`
  ${({ theme }) => [theme.centerColumnSnippet, theme.fullWidthHeight]};
  article,
  a {
    font-size: ${({ theme }) => theme.fontSizeXL};
  }
`;

export default Home;
