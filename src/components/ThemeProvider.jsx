/* eslint-disable react/prop-types */
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useState } from "react";

// State for theme, function to toggle the theme. Rendered in App.jsx with all components as children.
const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <StyledThemeProvider theme={theme[currentTheme]}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
