import { createGlobalStyle } from "styled-components";
import PPObjectSansBold from "../fonts/PPObjectSans-Bold.woff"
import PPObjectSansBold2 from "../fonts/PPObjectSans-Bold.woff2"

const GlobalStyle = createGlobalStyle`

// FONT
@font-face {
  font-family: 'PPObjectSans Bold';
  src: url(${PPObjectSansBold2}) format('woff2'),
       url(${PPObjectSansBold}) format('woff');
}

html {
  font-size: 16px;
  font-family: "Helvetica", sans-serif;
  line-break: normal;
}

h1, h2 {
  font-family: 'PPObjectSans Bold';
}

// COLORS
:root{
    --background-green: #57ab80;
    --alert: #0075FF;
    --red: #FF5767;
    --dark-blue: #3b5866;
    --yellow: #FFFA69;
    --blue: #107CB3;
}

`;

export default GlobalStyle;