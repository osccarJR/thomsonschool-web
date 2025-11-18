// src/components/Footer.jsx
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6" style={{ backgroundColor: '#2a6644' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-white mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/images/logo.png" alt="Thomson School Logo" className="w-8 h-8" />
            <h3 className="text-lg">Thomson School</h3>
          </div>
          <p className="text-white/80 mb-4">
            Formando líderes del futuro con excelencia educativa desde 1999
          </p>
        </div>

        {/* --- PARTE INFERIOR ACTUALIZADA --- */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-white/70">
              <span>© {currentYear} Thomson School</span>
              <span>•</span>
              <span>Quito, Ecuador</span>
            </div>

            <div className="flex flex-col md:flex-row items-center text-sm text-white/70 space-y-2 md:space-y-0 md:space-x-6">

              <a
                href="/#/proteccion-datos"
                className="hover:text-white transition-colors underline underline-offset-4"
              >
                Ley de Protección de Datos
              </a>

              <span className="hidden md:block">•</span>

              <a
                href="https://www.nivusoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Desarrollado por</span>
                <span className="font-semibold text-white">NivuSoftware</span>
              </a>
            </div>
          </div>
        </div>
        {/* --- FIN PARTE INFERIOR --- */}
      </div>
    </footer>
  );
}
