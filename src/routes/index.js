import About from 'pages/About';
import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from '../pages/Contact';

function MRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default MRoutes;
