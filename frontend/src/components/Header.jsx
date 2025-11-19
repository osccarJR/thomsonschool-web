// src/components/Header.jsx
import { useState } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* IZQUIERDA: LOGO + NOMBRE */}
        <div className="flex items-center space-x-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#7A1D2A" }}
          >
            <img src="/images/logo.png" alt="Thomson School Logo" className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-xl text-gray-900">Thomson School</h1>
            <p className="text-sm text-gray-600">Crecemos juntos desde 1999</p>
          </div>
        </div>

        {/* CENTRO: MENÚ + CONTACTOS */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
          <Link
            to="/proteccion-datos"
            className="text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            Protección de Datos
          </Link>

          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="w-4 h-4" />
            <a
              href="https://wa.me/593984678269?text=Hola,%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-green-600 transition"
            >
              098 467 8269
            </a>
          </div>

          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:info@thomsonschool.edu.ec"
              className="text-sm hover:text-blue-600 transition"
            >
              info@thomsonschool.edu.ec
            </a>
          </div>
        </div>

        {/* DERECHA: NUEVO LOGO */}
        <div className="hidden md:flex items-center">
          <img
            src="/images/logo2.png"
            alt="Logo Secundario"
            className="w-32 object-contain"
          />
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={toggleMenu}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4 space-y-6 animate-fadeIn">
          
          <Link
            to="/proteccion-datos"
            className="block text-gray-700 text-lg hover:text-gray-900 transition"
            onClick={toggleMenu}
          >
            Protección de Datos
          </Link>

          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-600" />
            <a
              href="tel:+593984678269"
              className="text-gray-700 hover:text-green-600 text-lg"
              onClick={toggleMenu}
            >
              098 467 8269
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <a
              href="mailto:info@thomsonschool.edu.ec"
              className="text-gray-700 hover:text-blue-600 text-lg"
              onClick={toggleMenu}
            >
              info@thomsonschool.edu.ec
            </a>
          </div>

          {/* Logo derecho también visible en mobile */}
          <div className="pt-4 flex justify-center">
            <img
              src="/images/logo2.png"
              alt="Logo Secundario"
              className="w-32 object-contain"
            />
          </div>
        </div>
      )}
    </header>
  );
}
