import { createGlobalStyle } from "styled-components";
import "./typography.scss";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: Inter, Verdana, sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text}
}

`;

export default GlobalStyles;
