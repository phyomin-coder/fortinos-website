// Main App component with Routing
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FotinosNavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import BusinessFooter from './components/Footer';
import AboutPage from './pages/AboutUsPage';
import ServicePage from './pages/ServicePage';
import CasePage from './pages/CaseStudy/CasesPage';
import CaseStudyDetail from './pages/CaseStudy/CaseStudyDetail';
import ContactUs from './pages/ContactUsPage';

export default function App() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-gray-50">
        <FotinosNavBar activeLink={activeLink} setActiveLink={setActiveLink} />

        {/* Routing Area */}
        <Box >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/cases" element={<CasePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cases/:id" element={<CaseStudyDetail />} />
          </Routes>
        </Box>
        <BusinessFooter />
      </div>
    </>
  );
}
