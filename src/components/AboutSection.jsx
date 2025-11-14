// src/components/AboutSection.jsx
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-4">Sobre Thomson School</h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#3D9BE9' }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80"
              alt="Thomson School estudiantes"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl text-gray-900 mb-4">Excelencia Educativa desde 1998</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thomson School es una institución educativa bilingüe ubicada en Quito, Ecuador,
              con más de 25 años formando estudiantes íntegros y competentes. Ofrecemos una
              educación de calidad que combina excelencia académica con valores sólidos.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#1E7145' }}></div>
                <div>
                  <h4 className="text-gray-900 mb-1">Mi Pequeño Tesoro (CDI)</h4>
                  <p className="text-sm text-gray-600">Educación inicial y preescolar</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#3D9BE9' }}></div>
                <div>
                  <h4 className="text-gray-900 mb-1">Thomson School (Básica)</h4>
                  <p className="text-sm text-gray-600">Educación general básica bilingüe</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#7A1D2A' }}></div>
                <div>
                  <h4 className="text-gray-900 mb-1">Thomson High School (Bachillerato)</h4>
                  <p className="text-sm text-gray-600">Bachillerato internacional preparatorio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
