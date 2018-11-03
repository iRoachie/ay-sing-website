import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Futura';
    font-style: normal;
    font-weight: 500;
    src: url('/static/fonts/Futura-Medium.woff') format('woff');
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  * {
    font-weight: 500;
  }

  body {
    align-items: center;
    font-family: 'Trebuchet MS', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 10px;
    max-height: 100vh;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
