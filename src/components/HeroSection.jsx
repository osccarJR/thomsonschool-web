// src/components/HeroSection.jsx
import { Clock, Users, Award, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="py-16 px-6"
      style={{ background: 'linear-gradient(135deg, #7A1D2A 0%, #1E7145 100%)' }}
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl mb-6">
          Bienvenidos a <span className="font-bold">Thomson School</span>
        </h1>
        <p className="text-xl mb-8 text-white/90">
          Formando líderes del futuro con educación bilingüe de calidad en Quito
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl mb-1">25+</div>
            <div className="text-sm text-white/80">Años de experiencia</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl mb-1">500+</div>
            <div className="text-sm text-white/80">Estudiantes</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl mb-1">100%</div>
            <div className="text-sm text-white/80">Bilingüe</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl mb-1">3</div>
            <div className="text-sm text-white/80">Niveles educativos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
