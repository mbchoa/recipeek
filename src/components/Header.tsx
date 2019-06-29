import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background-color: #113f67;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-size: 18px;
  height: 60px;
  padding: 0 16px;
`;

const Header = () => (
  <StyledHeader>
    recipeek
  </StyledHeader>
);

export default Header;
