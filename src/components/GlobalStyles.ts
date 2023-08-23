import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f5f5f5;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover, &:focus, &:active, &:visited, &:link {
      color: inherit;
    }
  }
`;
