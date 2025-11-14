// src/App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';
import DataProtectionPage from './pages/DataProtectionPage'; 

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proteccion-datos" element={<DataProtectionPage />} /> {/* 👈 nueva ruta */}
      </Routes>
    </Router>
  );
}
