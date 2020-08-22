import React from 'react';
import styled from 'styled-components';

import space from '../enums/space';
import { size } from '../enums/typography';

const StyledHeader = styled.header`
  align-items: center;
  color: ${({ theme }) => theme.primary};
  font-size: ${size['bronto']};
  font-weight: 600;
  text-align: center;
  transition: ${({ theme }) => theme.transition};
`;

const Heading = styled.h1`
  margin-bottom: ${space['sp-48']};
`;

const Header = () => (
  <StyledHeader>
    <Heading>recipeek</Heading>
  </StyledHeader>
);

export default Header;
