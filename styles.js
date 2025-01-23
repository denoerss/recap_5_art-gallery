import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: hotpink;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
