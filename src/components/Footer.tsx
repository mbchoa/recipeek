import React from 'react';
import styled from 'styled-components';

import space from '../enums/space';

const Block = styled.footer`
  align-items: flex-end;
  background-color: #113f67;
  color: white;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  font-size: 14px;
  height: 75px;
  padding: ${space['sp-16']};
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  :hover,
  :visited {
    color: inherit;
  }
`;

const Footer = () => (
  <Block>
    ©&nbsp;
    <Link
      href="https://github.com/mbchoa"
      target="_blank"
      rel="noopener noreferrer"
    >
      mbchoa
    </Link>
    &nbsp;2020
  </Block>
);

export default Footer;
