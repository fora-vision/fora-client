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

  input:focus {
    outline: 1px solid #F6D658
  }

  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #F5F5F50A;
    border-radius: 10px;
    border: 1px solid rgba(245, 245, 245, 0.04);
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #F5F5F514;
  }
  *::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  *::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`