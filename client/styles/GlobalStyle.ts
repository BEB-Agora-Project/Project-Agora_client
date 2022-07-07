import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  html,
  body,
  p {
    padding: 0;
    margin: 0;
    font-family: "Roboto", "Noto Sans KR", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;
