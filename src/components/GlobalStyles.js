import { createGlobalStyle } from "styled-components"
import IBMPlexSansReg from "../fonts/IBMPlexSans-Regular.woff"
import IBMPlexSansReg2 from "../fonts/IBMPlexSans-Regular.woff2"
import IBMPlexSansCondensedReg from "../fonts/IBMPlexSansCondensed-Regular.woff"
import IBMPlexSansCondensedReg2 from "../fonts/IBMPlexSansCondensed-Regular.woff2"
import IBMPlexSansLight from "../fonts/IBMPlexSans-Light.woff"
import IBMPlexSansSemiBold from "../fonts/IBMPlexSans-SemiBold.woff"
import IBMPlexSansBold from "../fonts/IBMPlexSans-Bold.woff"

const GlobalStyle = createGlobalStyle`

// FONT
@font-face {
  font-family: 'IBMPlexSansCondensedReg';
  src: url(${IBMPlexSansCondensedReg2}) format('woff2'),
       url(${IBMPlexSansCondensedReg}) format('woff');
}

@font-face {
  font-family: 'IBMPlexSansReg';
  src: url(${IBMPlexSansReg}) format('woff');
}

@font-face {
  font-family: 'IBMPlexSansReg';
  src: url(${IBMPlexSansSemiBold}) format('woff2'),
       url(${IBMPlexSansSemiBold}) format('woff');
       font-weight: bold;
}
/* 
@font-face {
  font-family: 'IBMPlexSansReg';
  src: url(${IBMPlexSansLight}) format('woff2'),
       url(${IBMPlexSansLight}) format('woff');
       font-weight: lighter;
} */

html {
  font-size: 16px;
  font-family: "IBMPlexSansReg", sans-serif;
  line-break: normal;
}

h1 {
    text-transform: uppercase;
  }

h2{
  font-family: 'IBMPlexSansCondensedReg';
  font-size: 1.5rem;
}

h3{
  font-family: 'IBMPlexSansCondensedReg';
  font-size: 3rem;
  padding: 0;
  margin-top:0.25rem;
  margin-bottom:0.25rem;
  text-transform: uppercase;
}

h4{
  font-family: 'IBMPlexSansCondensedReg';
  font-size: 1.25rem;
  padding: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
}

h5{
  font-family: 'IBMPlexSansCondensedReg';
  font-size: 1.45rem;
  padding: 0;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-family: 'IBMPlexSansReg';
  line-height: 1.6rem;
}


a:link{
  color: #515151;
  text-decoration: none;
  font-weight: 550;
}

a:visited{
  color: #515151;
}

a:hover{
 color: #515151;
 text-decoration: underline;
} 

a:active{
  color: #515151;
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

`

export default GlobalStyle
