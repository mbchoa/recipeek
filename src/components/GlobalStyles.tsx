import { createGlobalStyle } from 'styled-components';

import { Theme } from '../theme';

export default createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${({ theme }) => theme.body};
    transition: ${({ theme }) => theme.transition};
  }
`;
