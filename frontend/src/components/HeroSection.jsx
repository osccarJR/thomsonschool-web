// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import { Clock, Users, Award, BookOpen } from "lucide-react";

const HERO_IMAGES = [
  "/images/hero1.jpeg",
  "/images/hero2.jpeg",
  "/images/hero3.jpeg",
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambio automático de imagen cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative py-16 px-6 overflow-hidden"
    >
      {/* Fondo con imágenes en carrusel */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl mb-6">
          UNIDAD EDUCATIVA PARTICULAR{" "}
        </h1>
        <h1 className="text-4xl md:text-5xl mb-6 font-bold">"JOSEPH JHON THOMSON"</h1>

       
      </div>
    </section>
  );
}
