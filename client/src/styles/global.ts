import { css } from "@emotion/react";

const global = css`
  html,
  body,
  p {
    padding: 0;
    margin: 0;
  }

  *,
  body {
    font-family: "Roboto", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default global;
