// src/components/ContactSection.jsx
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Swal from "sweetalert2";

export function ContactSection() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    nombre_alumno: "",
    anio_lectivo: "",
    representante_legal: "",
    numero_contacto: "",
    colegio_actual: "",
    necesidades_especiales: "",
    nivel: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Enviar formulario con SweetAlert clásico
  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Enviando...",
      text: "Por favor espera un momento",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al enviar");

      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Tu solicitud fue enviada exitosamente.",
        confirmButtonColor: "#1E7145",
      });

      setFormData({
        nombre_alumno: "",
        anio_lectivo: "",
        representante_legal: "",
        numero_contacto: "",
        colegio_actual: "",
        necesidades_especiales: "",
        nivel: "",
        mensaje: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al enviar",
        text: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
        confirmButtonColor: "#7A1D2A",
      });
    }
  };

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#7A1D2A" }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-white mb-10 text-center font-semibold">
          Contáctanos
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT CARDS */}
          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-white mb-2 text-center">Teléfono</h4>
              <p className="text-white text-center">
                <a
                  href="https://wa.me/593984678269?text=Hola,%20quiero%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  098 467 8269
                </a>
                <br />
               <a
                href="tel:+59323280043"
                className="hover:text-gray-200"
              >
                02 328 0043
              </a>
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <Mail className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-white mb-2 text-center">Email</h4>
              <p className="text-white text-center">
                <a
                  href="mailto:info@thomsonschool.edu.ec"
                  className=" hover:text-gray-200"
                >
                  info@thomsonschool.edu.ec
                </a>
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="text-white mb-2 text-center">Ubicación</h4>
              <p className="text-white text-center">Quito, Ecuador</p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-md text-left border border-white/30"
          >
            <h4 className="text-xl font-semibold text-white mb-6 text-center">
              Formulario de contacto
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-1">Nombre del alumno</label>
                <input
                  name="nombre_alumno"
                  value={formData.nombre_alumno}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/80"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">Año lectivo que desea</label>
                <select
                  name="anio_lectivo"
                  value={formData.anio_lectivo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/80"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="2025-2026">2025-2026</option>
                  <option value="2026-2027">2026-2027</option>
                </select>
              </div>


              <div>
                <label className="block text-white mb-1">Representante legal</label>
                <input
                  name="representante_legal"
                  value={formData.representante_legal}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/80"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">Número de contacto</label>
                <input
                  name="numero_contacto"
                  value={formData.numero_contacto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/80"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">Colegio actual</label>
                <input
                  name="colegio_actual"
                  value={formData.colegio_actual}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/80"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-1">¿Necesidades especiales?</label>
                <select
                  name="necesidades_especiales"
                  value={formData.necesidades_especiales}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white/80"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-white mb-1">Nivel al que aplica</label>
                <input
                  name="nivel"
                  value={formData.nivel}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-white/80"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-white mb-1">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-white/80"
                />
              </div>

              <div className="text-center md:col-span-2 mt-2">
                <button
                  type="submit"
                  className="mt-4 bg-[#1E7145] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#155a36] transition"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
