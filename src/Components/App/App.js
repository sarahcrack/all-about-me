import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../../Pages/Homepage";
import AboutMe from "../../Pages/AboutMe";
import Projects from "../../Pages/Projects";
import MyCodingJourney from "../../Pages/MyCodingJourney";
import ContactMe from "../../Pages/ContactMe";
import Journal from "../../Pages/Journal";
import ComingSoon from "../../Pages/ComingSoon";

import Navbar from "../Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mycodingjourney" element={<MyCodingJourney />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
