import React from 'react';
import styled from 'styled-components';

import { space } from '../enums/space';

const StyledHeader = styled.header`
  align-items: center;
  background-color: #113f67;
  display: flex;
  padding: ${space['sp-16']};
`;

const Link = styled.a`
  text-decoration: none;
`;

const Heading = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <Heading>recipeek</Heading>
    </Link>
  </StyledHeader>
);

export default Header;
