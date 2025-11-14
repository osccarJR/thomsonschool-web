// src/components/Header.jsx
import { Mail, Phone, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#7A1D2A' }}
          >
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl text-gray-900">Thomson School</h1>
            <p className="text-sm text-gray-600">Excelencia Educativa</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            to="/proteccion-datos"
            className="text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Protección de Datos
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">0987-654-321</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@thomsonschool.edu.ec</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
