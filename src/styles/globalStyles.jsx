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
a {
    color: ${(props) => props.theme.text};
    transition: transform 1s ease-in-out;
}
a:hover {
   transform: rotate(360deg);
    
}



`;

export default GlobalStyles;
