import { createGlobalStyle } from 'styled-components';

import font from './font';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0
  }


  html, body, #root {
    width: 100%;
    background:  ${({ theme }) => theme.colors.background};
    color:  ${({ theme }) => theme.colors.primary};
  }

  body, input, button {
    ${font}
  }

  body { -webkit-font-smoothing: antialiased; }

  a { text-decoration: none; }
  ul { list-style: none; }

  img, svg { width: 100% }
`;
