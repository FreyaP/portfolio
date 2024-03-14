import { createGlobalStyle } from "styled-components";
import "./typography.scss";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: Inter, Verdana, sans-serif
}

`;

export default GlobalStyle;
