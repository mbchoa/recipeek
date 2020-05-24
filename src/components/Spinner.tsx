import React from 'react';
import styled, { keyframes } from 'styled-components';

const svgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const Svg = styled.svg`
  animation: 2s linear infinite ${svgAnimation};
  max-width: 30px;
`;

const circleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

const Circle = styled.circle`
  animation: 1.4s ease-in-out infinite both ${circleAnimation};
  display: block;
  fill: transparent;
  stroke: white;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
`;

const Spinner = () => (
  <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="50" cy="50" r="45" />
  </Svg>
);

export default Spinner;
