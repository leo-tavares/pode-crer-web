import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  sub, sup {
    font-size: inherit;
    vertical-align: sub;
    line-height: normal;
    top: 0;
    bottom: 0;
  }
`;

export default GlobalStyle;
