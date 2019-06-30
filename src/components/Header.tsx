import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background-color: #113f67;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  padding: 0 16px;
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Header = () => (
  <StyledHeader>
    <Title>recipeek</Title>
  </StyledHeader>
);

export default Header;
