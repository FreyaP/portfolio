import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:project" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
