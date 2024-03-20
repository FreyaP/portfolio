/* eslint-disable react/prop-types */
import styled, {
  ThemeProvider as StyledThemeProvider,
  keyframes,
} from "styled-components";
import theme from "../styles/theme";
import { useState } from "react";
import bulb from "../assets/images/bulb.png";

const swing = keyframes`
  0% {
    transform-origin: top;
    transform: rotateZ(0deg);
  }
  25% {
    transform-origin: top;
    transform: rotateZ(30deg)
  }
  75% {
    transform-origin: top;
    transform: rotateZ(-30deg)
  }
100% {
  transform-origin: top;
  transform: rotateZ(0deg)
}
`;

const Container = styled.div`
  overflow: hidden;
  align-self: end;
  position: absolute;
`;

const LightBulbStyles = styled.img`
  width: 5rem;
  height: 5rem;
  animation: ${swing} 6s linear infinite;

  &:hover {
    cursor: pointer;
  }
`;

// State for theme, function to toggle the theme. Rendered in App.jsx with all components as children.
const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <StyledThemeProvider theme={theme[currentTheme]}>
      <Container>
        <LightBulbStyles
          src={bulb}
          alt="Light or dark mode icon"
          onClick={toggleTheme}
        />
      </Container>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
