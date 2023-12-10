import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Skills from "../src/pages/skillsandtech/Skills";
import Services from "../src/pages/services/Services";
import WorkHistory from "../src/pages/work_history/WorkHistory";
import Projects from "../src/pages/projects/Projects";
import Contact from "../src/pages/contact/Contact";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Particle from "./utils/Particle";

function App() {
  const location = useLocation();
  console.log(location);

  const handleParticlesForHomeLocation = location.pathname === "/";

  const handleparticles = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* particles */}
      {handleParticlesForHomeLocation && (
        <Particles id="particles" options={Particle} init={handleparticles} />
      )}
      {/* particles end */}

      {/* Navbar start */}
      <Navbar />
      {/* Navbar end */}

      {/* Main Pages Start */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/workhistory" element={<WorkHistory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* Main Pages End */}
    </div>
  );
}

export default App;
