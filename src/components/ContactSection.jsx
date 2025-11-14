// src/components/ContactSection.jsx
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-12 px-6" style={{ backgroundColor: '#FFC940' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl text-gray-900 mb-8">¿Interesado en más información?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/20 rounded-lg p-6">
            <Phone className="w-8 h-8 mx-auto mb-3 text-gray-900" />
            <h4 className="text-gray-900 mb-2">Teléfono</h4>
            <p className="text-gray-800">0987-654-321</p>
          </div>
          <div className="bg-white/20 rounded-lg p-6">
            <Mail className="w-8 h-8 mx-auto mb-3 text-gray-900" />
            <h4 className="text-gray-900 mb-2">Email</h4>
            <p className="text-gray-800">info@thomsonschool.edu.ec</p>
          </div>
          <div className="bg-white/20 rounded-lg p-6">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-gray-900" />
            <h4 className="text-gray-900 mb-2">Ubicación</h4>
            <p className="text-gray-800">Quito, Ecuador</p>
          </div>
        </div>
      </div>
    </section>
  );
}
