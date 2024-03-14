import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import GlobalStyles from "./styles/globalStyles";
import ThemeProvider from "./components/ThemeProvider";
import styled from "styled-components";

const AppStyles = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppStyles>
      <ThemeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:project" element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppStyles>
  );
}

export default App;
