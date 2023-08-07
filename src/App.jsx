import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import FaqPage from "./pages/FaqPage";
import SkillPage from "./pages/SkillPage";

function App() {
    return (
        <div>
            <NavbarComponent />
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/project" Component={ProjectPage} />
                <Route path="/faq" Component={FaqPage} />
                <Route path="/skills" Component={SkillPage} />
            </Routes>
            <FooterComponent />
        </div>
    );
}

export default App;
