import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100vw;
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
  }

  p {
    margin: 0
  }
`
