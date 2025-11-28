// src/components/AboutSection.jsx
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Título principal */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Sobre Thomson School
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#3D9BE9' }}
          ></div>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* Imagen */}
          <div>
            <ImageWithFallback
              src="/images/logo_t.jpeg"
              alt="Thomson School estudiantes"
              className="rounded-lg shadow-lg w-full h-95 object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Excelencia Educativa desde 1999
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Thomson School es una institución educativa ubicada en Quito, Ecuador,
              con más de 25 años de experiencia educativa.<br /> Formando estudiantes con habilidades cognitivas para la vida y desarrollo crítico, resolución de problemas y comunicación asertiva.
              Ofrecemos una educación de calidad que combina excelencia académica con valores. <br /> Contamos con tres sedes:
            </p>

            <div className="space-y-6">

              {/* CDI */}
              <div className="flex items-start space-x-3">
                <div
                  className="w-3 h-3 rounded-full mt-2"
                  style={{ backgroundColor: '#1E7145' }}
                ></div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900">
                    CDI Mi Pequeño Tesoro – Sede Kids
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Dirección:</strong> Calle José Bustos E13-42 y Guayacanes
                  </p>
                </div>
              </div>

              {/* Escuela */}
              <div className="flex items-start space-x-3">
                <div
                  className="w-3 h-3 rounded-full mt-2"
                  style={{ backgroundColor: '#3D9BE9' }}
                ></div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900">
                    Thomson School – Sede Escuela
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Dirección:</strong> Calle De los Nopales N62-156 y los Helechos
                  </p>
                </div>
              </div>

              {/* Colegio */}
              <div className="flex items-start space-x-3">
                <div
                  className="w-3 h-3 rounded-full mt-2"
                  style={{ backgroundColor: '#7A1D2A' }}
                ></div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900">
                    Thomson High School – Sede Colegio
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Dirección:</strong> Calle De los Helechos N62-114 y Nopales
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
