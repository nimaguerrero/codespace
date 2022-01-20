import About from 'pages/About';
import Home from 'pages/Home';
import Pricing from 'pages/Pricing';
import Services from 'pages/Services';
import Contact from 'pages/Contact';
import Project from 'pages/Project';
import { Route, Routes } from 'react-router-dom';

function MRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default MRoutes;
