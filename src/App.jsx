import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [homeActiveSection, setHomeActiveSection] = useState(0);

  return (
    <div className="relative bg-[#050505] text-white/90 min-h-screen">
      <Navbar activeSection={homeActiveSection} />

      <Routes>
        <Route path="/" element={<Home onSectionChange={setHomeActiveSection} />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
