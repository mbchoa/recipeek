import React from 'react';
import styled from 'styled-components';

import space from '../enums/space';

import { ReactComponent as DarkModeIcon } from '../assets/dark-mode-icon.svg';

type DarkModeButtonProps = {
  onClick: () => void;
};

const Button = styled.button`
  border: 0;
  cursor: pointer;
  height: ${space['sp-24']};
  padding: 0;
  position: absolute;
  right: ${space['sp-24']};
  outline: none;
  top: ${space['sp-24']};
  width: ${space['sp-24']};

  > svg {
    fill: ${({ theme }) => theme.primary};
    height: 24px;
    transition: ${({ theme }) => theme.transition};
    width: 24px;
  }

  > svg > polygon {
    fill: ${({ theme }) => theme.secondary};
    transition: ${({ theme }) => theme.transition};
  }
`;

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ onClick }) => (
  <Button onClick={onClick} aria-label="Toggle Darkmode">
    <DarkModeIcon />
  </Button>
);

export default DarkModeButton;
