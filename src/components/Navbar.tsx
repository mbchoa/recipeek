import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  align-items: center;
  background-color: #113f67;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-size: 18px;
  height: 45px;
  padding: 0 16px;
`;

const Navbar = () => (
  <Header>
    recipeek
  </Header>
);

export default Navbar;
