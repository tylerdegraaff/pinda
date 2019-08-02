import { createGlobalStyle } from 'styled-components';
import Chicago from 'fonts/pixChicago.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Chicago';
    src: url(${Chicago}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;

  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Chicago';
    font-size: 16px;
  }
`;
