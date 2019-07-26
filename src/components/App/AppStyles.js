import styled, { createGlobalStyle } from "styled-components";

export const SWrapper = styled.div`
  width: 500px;
  margin: 200px;
`;

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Regular.ttf");
  }

  body {
    font-family: Roboto, serif;
    font-size: 14px;
  }
`;
