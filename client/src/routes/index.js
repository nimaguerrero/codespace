import About from 'pages/About';
import Home from 'pages/Home';
import Pricing from 'pages/Pricing';
import Services from 'pages/Services';
import Contact from 'pages/Contact';
import Project from 'pages/Project';
import Login from 'auth/Login';
import Register from 'auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from 'auth/ForgotPassword';

function MRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MRoutes;
