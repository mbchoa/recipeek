import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.article`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%;
`;

const Card = ({ children }) => <CardContainer>{children}</CardContainer>;

export default Card;
