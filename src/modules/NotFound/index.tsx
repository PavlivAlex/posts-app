import React from 'react';

// helpers
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// components
import Button from '../../components/Antd/Button';
import { Content } from 'antd/es/layout/layout';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <CloudElement>
        <CloudElementBg>
          <CloudShadowElementFirst> </CloudShadowElementFirst>
          <CloudShadowElementSecond> </CloudShadowElementSecond>
          <CloudShadowElementThird> </CloudShadowElementThird>
        </CloudElementBg>
        <StyledTitleTypography>oops!</StyledTitleTypography>
        <StyledTypography>Error 404 : Page Not Found</StyledTypography>
        <Button onClick={() => navigate(-1)} size='large'>
          Go Back
        </Button>
      </CloudElement>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled(Content)`
  background: radial-gradient(#a7a7a7, transparent);
  ${({ theme }) => [theme.centerColumnSnippet, theme.fullWidthHeight]};
`;

const CloudElement = styled(Content)`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 520px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CloudElementBg = styled(Content)`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: -1;
`;

const CloudShadowElementFirst = styled(Content)`
  width: 100%;
  background: white;
  border-radius: 90px;
  height: 125px;
  -webkit-box-shadow: 5px 5px 0px 0px #f3f3f3;
  box-shadow: 5px 5px 0px 0px #f3f3f3;
`;

const CloudShadowElementSecond = styled(Content)`
  width: 100%;
  background: white;
  border-radius: 90px;
  height: 125px;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
  -webkit-box-shadow: 5px 5px 0px 0px #f3f3f3;
  box-shadow: 5px 5px 0px 0px #f3f3f3;
  position: relative;
  z-index: 10;
`;

const CloudShadowElementThird = styled(Content)`
  width: 100%;
  background: white;
  border-radius: 90px;
  height: 125px;
  -webkit-box-shadow: 5px 5px 0px 0px #f3f3f3;
  box-shadow: 5px 5px 0px 0px #f3f3f3;
  position: relative;
  z-index: 90;
`;

const StyledTitleTypography = styled.p`
  font-size: 86px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
`;

const StyledTypography = styled.p`
  font-size: 26px;
  margin: 0;
  font-weight: 700;
  margin-bottom: 20px;
`;

export default NotFound;
