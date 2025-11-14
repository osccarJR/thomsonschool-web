// src/components/Footer.jsx
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6" style={{ backgroundColor: '#7A1D2A' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-white mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen className="text-white w-4 h-4" />
            </div>
            <h3 className="text-lg">Thomson School</h3>
          </div>
          <p className="text-white/80 mb-4">
            Formando líderes del futuro con excelencia educativa desde 1998
          </p>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-white/70">
              <span>© {currentYear} Thomson School</span>
              <span>•</span>
              <span>Quito, Ecuador</span>
            </div>

            <Link
              to="/proteccion-datos"
              className="text-sm text-white/90 hover:text-white underline underline-offset-4 transition-colors"
            >
              Ley de Protección de Datos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
