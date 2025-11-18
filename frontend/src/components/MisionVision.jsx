// src/components/MisionVision.jsx
import { HeartHandshake, ShieldCheck, HandHeart, Users } from "lucide-react";

export function MisionVision() {
  return (
    <section id="mision-vision" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Misión & Visión
          </h2>
          <div className="w-24 h-1 bg-[#3D9BE9] mx-auto mt-4"></div>
        </div>

        {/* GRID 2 COLUMNAS */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* VISIÓN */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E7145]">Visión</h3>
            <div className="w-16 h-1 bg-[#1E7145] mt-2 mb-4"></div>

            <p className="text-gray-700 leading-relaxed text-lg">
              En la Unidad Educativa Joseph Jhon Thomson se proyecta a ser una institución 
              líder en servicios educativos, mediante una enseñanza de calidad con calidez, 
              humanista, personal, integral y responsable en todos los procesos educativos, 
              promoviendo el desarrollo positivo e íntegro de los alumnos y su entorno.
            </p>
          </div>

          {/* MISIÓN */}
          <div>
            <h3 className="text-2xl font-bold text-[#7A1D2A]">Misión</h3>
            <div className="w-16 h-1 bg-[#7A1D2A] mt-2 mb-4"></div>

            <p className="text-gray-700 leading-relaxed text-lg">
              La Unidad Educativa Joseph Jhon Thomson tiene como misión brindar un servicio 
              eficiente y de calidad, promoviendo una educación íntegra y el desarrollo del 
              carácter moral, valores familiares, liderazgo, pensamiento crítico, trabajo en 
              equipo y adaptación responsable al entorno social.
            </p>
          </div>

        </div>

        {/* =========================
            VALORES INSTITUCIONALES
        ========================== */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            VALORES INSTITUCIONALES
          </h3>

          <div className="flex flex-wrap justify-center gap-6">

            {/* Respeto */}
            <div className="flex items-center gap-3 bg-[#1E7145]/10 text-[#1E7145] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition cursor-default">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium">Respeto</span>
            </div>

            {/* Responsabilidad */}
            <div className="flex items-center gap-3 bg-[#3D9BE9]/10 text-[#3D9BE9] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition cursor-default">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-lg font-medium">Responsabilidad</span>
            </div>

            {/* Honestidad */}
            <div className="flex items-center gap-3 bg-[#7A1D2A]/10 text-[#7A1D2A] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition cursor-default">
              <HandHeart className="w-6 h-6" />
              <span className="text-lg font-medium">Honestidad</span>
            </div>

            {/* Solidaridad */}
            <div className="flex items-center gap-3 bg-yellow-600/10 text-yellow-700 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition cursor-default">
              <HeartHandshake className="w-6 h-6" />
              <span className="text-lg font-medium">Solidaridad</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
