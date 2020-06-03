import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Montserrat', sans-serif;
    background: rgb(50, 43, 35);
  background: radial-gradient(
    circle,
    rgba(50, 43, 35, 1) 0%,
    rgba(25, 22, 17, 1) 100%
  );
    color: white;
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
