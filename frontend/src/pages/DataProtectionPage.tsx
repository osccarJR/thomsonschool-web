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
            <h1 className="text-4xl text-gray-900 mb-4">Ley de Protección de Datos</h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#7A1D2A' }}></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="prose max-w-none text-gray-600">
              <h2 className="text-2xl text-gray-900 mb-6">Tratamiento de Datos Personales</h2>

              <p className="mb-6">
                En cumplimiento de la <strong>Ley Orgánica de Protección de Datos Personales del Ecuador</strong>,
                la Unidad Educativa Thomson – CDI Mi Pequeño Tesoro informa que los datos personales
                proporcionados por estudiantes, padres de familia y/o representantes legales serán tratados
                de manera confidencial, segura y responsable.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl text-gray-900 mb-4">Finalidad del Tratamiento</h3>
                <p className="mb-3">Los datos personales recopilados serán utilizados exclusivamente para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestión de procesos de admisión, matrícula y seguimiento académico</li>
                  <li>Comunicación institucional con padres de familia y representantes legales</li>
                  <li>Envío de información educativa, eventos y actividades escolares</li>
                  <li>Cumplimiento de obligaciones legales y reglamentarias del sector educativo</li>
                  <li>Gestión administrativa y financiera relacionada con la prestación del servicio educativo</li>
                </ul>
              </div>

              <h3 className="text-xl text-gray-900 mb-4">Principios de Tratamiento</h3>
              <p className="mb-4">
                Thomson School se compromete a tratar sus datos personales bajo los siguientes principios:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Licitud:</strong> Los datos serán tratados de manera lícita y transparente</li>
                <li><strong>Finalidad:</strong> Solo para los fines específicos informados</li>
                <li><strong>Confidencialidad:</strong> Protección y seguridad de la información</li>
                <li><strong>Calidad:</strong> Datos exactos, actualizados y veraces</li>
                <li><strong>Proporcionalidad:</strong> Solo se recopilan datos necesarios</li>
              </ul>

              <div
                className="bg-blue-50 rounded-lg p-6 mb-6 border-l-4"
                style={{ borderColor: '#3D9BE9' }}
              >
                <h3 className="text-xl text-gray-900 mb-4">Derechos del Titular de los Datos</h3>
                <p className="mb-3">Conforme a la legislación vigente, usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Acceso:</strong> Conocer qué datos personales posee la institución</li>
                  <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                  <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos personales</li>
                  <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias</li>
                  <li><strong>Portabilidad:</strong> Obtener una copia de sus datos en formato estructurado</li>
                </ul>
              </div>

              <h3 className="text-xl text-gray-900 mb-4">Seguridad de los Datos</h3>
              <p className="mb-6">
                Thomson School implementa medidas técnicas, organizativas y de seguridad apropiadas
                para proteger los datos personales contra acceso no autorizado, pérdida, destrucción
                o alteración. El acceso a la información está limitado exclusivamente al personal
                autorizado que requiere conocer dichos datos para el cumplimiento de sus funciones.
              </p>

              <h3 className="text-xl text-gray-900 mb-4">Compartición de Datos</h3>
              <p className="mb-6">
                Thomson School no compartirá, venderá ni cederá sus datos personales a terceros,
                excepto cuando sea necesario para cumplir con obligaciones legales, reglamentarias
                o cuando sea requerido por autoridades competentes.
              </p>

              <h3 className="text-xl text-gray-900 mb-4">Conservación de Datos</h3>
              <p className="mb-6">
                Los datos personales serán conservados durante el tiempo necesario para cumplir con
                las finalidades para las cuales fueron recopilados, y posteriormente durante el plazo
                establecido por las disposiciones legales aplicables en materia de archivo y conservación
                de documentos.
              </p>

              <div
                className="bg-green-50 rounded-lg p-6 mb-6 border-l-4"
                style={{ borderColor: '#1E7145' }}
              >
                <h3 className="text-xl text-gray-900 mb-4">Ejercicio de Derechos y Contacto</h3>
                <p className="mb-4">
                  Para ejercer cualquiera de los derechos mencionados o para consultas relacionadas
                  con el tratamiento de sus datos personales, puede contactarnos a través de:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@thomsonschool.edu.ec</p>
                  <p><strong>Teléfono:</strong> 098 467 8269</p>
                  <p><strong>Dirección:</strong> Quito, Ecuador</p>
                </div>
                <p className="mt-4 text-sm">
                  Su solicitud será atendida en un plazo máximo de 15 días hábiles desde su recepción.
                </p>
              </div>

              <h3 className="text-xl text-gray-900 mb-4">Consentimiento</h3>
              <p className="mb-6">
                Al proporcionar sus datos personales a Thomson School, usted otorga su consentimiento
                expreso para el tratamiento de los mismos conforme a lo establecido en la presente
                política y la normativa vigente. Este consentimiento podrá ser revocado en cualquier
                momento, sin efectos retroactivos.
              </p>

              {/* Formularios / documentos descargables */}
              <section className="mt-10">
                <h2 className="text-2xl text-gray-900 mb-4">Formularios y documentos</h2>
                <p className="mb-4 text-sm text-gray-600">
                  Aquí puede descargar la política completa de protección de datos personales y, en caso de
                  ser necesario, otros formularios relacionados.
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
                        <p className="text-sm font-medium text-gray-900">
                          Aviso de Privacidad Institucional
                        </p>
                        <p className="text-xs text-gray-500">PDF · descarga directa</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-gray-500" />
                  </a>

                </div>
              </section>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong>Última actualización:</strong> Octubre 2025<br />
                  <strong>Responsable del tratamiento:</strong> Unidad Educativa Thomson – CDI Mi Pequeño Tesoro<br />
                  <strong>Normativa aplicable:</strong> Ley Orgánica de Protección de Datos Personales del Ecuador
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="py-4 text-lg font-medium text-gray-900">Contacto Delegado de Protección de Datos</h2>
                <p className="text-sm text-gray-700">
                  <strong>Telefono:</strong> 0991091585<br />
                  <strong>Correo:</strong> dpd@thomsonschool.edu.ec<br />
                </p>
              </div>
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
