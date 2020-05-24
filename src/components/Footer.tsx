import React from 'react';
import styled from 'styled-components';

const Block = styled.footer`
  align-items: flex-end;
  background-color: #113f67;
  color: white;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  height: 75px;
  padding: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  :visited {
    color: white;
  }
`;

const Footer = () => (
  <Block>
    ©&nbsp;<Link href="https://github.com/mbchoa">mbchoa</Link>&nbsp;2020
  </Block>
);

export default Footer;
