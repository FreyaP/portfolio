/* eslint-disable react/prop-types */

import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import theme from "../styles/theme";
import { useState } from "react";
import bulb from "../assets/images/bulb.png";

const LightBulbStyles = styled.img`
  width: 5rem;
  height: 5rem;
  align-self: end;
`;

// State for theme, function to toggle the theme. Rendered in App.jsx with all components as children.
const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <StyledThemeProvider theme={theme[currentTheme]}>
      <LightBulbStyles
        src={bulb}
        alt="Light or dark mode icon"
        onClick={toggleTheme}
      />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
