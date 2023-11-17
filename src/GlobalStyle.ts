import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #F5F5F5;
    background: #11100C;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0
  }

  p{
    margin: 0;
  }

  a {
    color: #F5F5F5;
  } 

  ul {
    padding: 0 0 0 30px;
    margin: 0
  }

  ul::marker {
    padding: 0
  }

  *:focus {
    outline: 1px solid #F6D658
  }
`