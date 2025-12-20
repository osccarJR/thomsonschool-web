// src/pages/DataProtectionPage.tsx
import { Shield, ArrowLeft, BookOpen, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataProtectionPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

          <Link
            to="/"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: '#7A1D2A' }} />
            {/* ✅ Mantener el título */}
            <h1 className="text-4xl text-gray-900 mb-4">
              LEY ORGÁNICA DE PROTECCIÓN DE DATOS PERSONALES
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#7A1D2A' }}></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="prose max-w-none text-gray-700">
              {/* ✅ Nuevo contenido (reemplazo total) */}
              <h2 className="text-2xl text-gray-900 mb-6">Protección de Datos Personales</h2>

              <p className="mb-6">
                En <strong>JJ Thomson Education C.L.</strong>, respetamos y garantizamos el derecho fundamental a la
                protección de datos personales, reconocido en la Constitución de la República del Ecuador y desarrollado
                en la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong> y su Reglamento.
              </p>

              <p className="mb-6">
                Como titular de sus datos personales, usted tiene derecho a <strong>acceder</strong>,{' '}
                <strong>rectificar</strong>, <strong>actualizar</strong>, <strong>oponerse</strong>,{' '}
                <strong>solicitar la eliminación</strong>, la <strong>portabilidad</strong> y la{' '}
                <strong>limitación del tratamiento</strong> de su información, entre otros derechos reconocidos
                legalmente.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <p className="mb-0 text-gray-700">
                  Para conocer a fondo cómo tratamos sus datos personales, le invitamos a consultar y descargar nuestras{' '}
                  <strong>Políticas de Protección de Datos Personales</strong>, disponibles en los documentos adjuntos
                  en esta sección.
                </p>
              </div>

              {/* ✅ Mantener archivos descargables */}
              <section className="mt-10">
                <h2 className="text-2xl text-gray-900 mb-4">Formularios y documentos</h2>
                <p className="mb-4 text-sm text-gray-600">
                  Aquí puede descargar la política completa de protección de datos personales y, en caso de ser
                  necesario, otros formularios relacionados.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* PDF #1 */}
                  <a
                    href="/docs/05-politica-proteccion-datos-personales.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
                        <FileText className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Política de Protección de Datos Personales
                        </p>
                        <p className="text-xs text-gray-500">PDF · descarga directa</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-500" />
                  </a>

                  {/* PDF #2 */}
                  <a
                    href="/docs/06-aviso-privacidad-institucional.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
                        <FileText className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Aviso de Privacidad Institucional</p>
                        <p className="text-xs text-gray-500">PDF · descarga directa</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-500" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 mt-12" style={{ backgroundColor: '#2a6644' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen className="text-white w-4 h-4" />
            </div>
            <h3 className="text-lg">Thomson School</h3>
          </div>
          <p className="text-white/80 mb-4">
            Formando líderes del futuro con excelencia educativa desde 1999
          </p>
          <div className="flex justify-center space-x-6 text-sm text-white/70">
            <span>© {currentYear} Thomson School</span>
            <span>•</span>
            <span>Quito, Ecuador</span>
          </div>
          <div className="mt-4 text-sm text-white/70 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
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
      </footer>
    </div>
  );
}
