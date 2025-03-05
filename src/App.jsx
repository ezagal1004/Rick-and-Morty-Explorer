import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetails from "./pages/CharacterDetails";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";


function App() {
  return (
    <div>
      <ScrollToTop />
      {/* 🏠 Navigation Bar */}
      <NavBar />
      {/* 🌍 Page Routes */}
      <Routes>
        <Route path="/" element={<Home style={{ overflow: "hidden" }}/>} />
        <Route path="/character/:id" element={<CharacterDetails style={{ overflow: "hidden" }}/>} />
      </Routes>
      <BackToTopButton />
    </div>
  );
}

export default App;
