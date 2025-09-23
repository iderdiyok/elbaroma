import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import ContactPage from '@/pages/ContactPage';
import ImpressumPage from '@/pages/ImpressumPage';
import DatenschutzPage from '@/pages/DatenschutzPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Placeholder routes for future pages */}
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
