import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  padding-bottom: 20px;
}
li {
    list-style-type: none;
}
`;

export default GlobalStyled;