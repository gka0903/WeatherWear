import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<{ darkMode: boolean }>`
:root {
  --primary: ${(props) => (props.darkMode ? '#1e2329' : 'white')};
  --secondary: ${(props) => (props.darkMode ? 'white' : '#1e2329')};
  --border: 1px solid var(--secondary);
}
  html, body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
    font-size: 18px;
    background-color: var(--primary);
    color: var(--secondary);
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: var(--secondary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
  
  ul {
    padding: 0px;
  }
`;