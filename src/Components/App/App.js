import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../../Pages/Homepage";
import AboutMe from "../../Pages/AboutMe";
import ContactMe from "../../Pages/ContactMe";
import MyCodingJourney from "../../Pages/MyCodingJourney";
import Projects from "../../Pages/Projects";
import Navbar from "../Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/mycodingjourney" element={<MyCodingJourney />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
