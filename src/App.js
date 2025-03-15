import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AtliQPresenceInsights from './components/projectPages/AtliQPresenceInsights';
import BechdelAnalysis from './components/projectPages/BechdelAnalysis';
import CarAnalysis from './components/projectPages/CarAnalysis'; 
import FinanceDashboard from './components/projectPages/FinanceDashboard'; 
import HateCrime from './components/projectPages/HateCrime'; 
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main landing page route */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </>
          }
        />
        <Route path="/finance-dashboard" element={<FinanceDashboard />} />
        <Route path="/hate-crime" element={<HateCrime/>} />
        <Route path="/atliq-presence" element={<AtliQPresenceInsights />} />
        <Route path="/car-analysis" element={<CarAnalysis />} />
        <Route path="/bechdel-analysis" element={<BechdelAnalysis />} />
      </Routes>
    </Router>
  );
}