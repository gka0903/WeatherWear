// GlobalStyles.js (혹은 다른 이름의 스타일 파일)
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: black;
    color: white;
    width: 100%;
    height: 100vh;

  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

`;

export default GlobalStyles;
