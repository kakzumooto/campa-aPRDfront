import { Camera, UserPlus, Award, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function AfiliacionSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email: '', // Agregado para coincidir con tu Backend
    ine: null as File | null
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.ine) {
      alert("Por favor, selecciona una foto de tu INE.");
      return;
    }

    setLoading(true);

    // Creamos el paquete multimedia
    const dataToSend = new FormData();
    dataToSend.append('nombre', formData.nombre);
    dataToSend.append('telefono', formData.telefono);
    dataToSend.append('direccion', formData.direccion);
    dataToSend.append('email', formData.email); // Asegúrate de pedirlo en el input o mandarlo vacío
    dataToSend.append('foto', formData.ine); // "foto" coincide con @RequestParam en Java

    try {
      const response = await fetch('https://campa-aprd.onrender.com/api/afiliados/registrar', {
        method: 'POST',
        body: dataToSend,
        // Importante: No ponemos Headers de Content-Type, el navegador lo pone solo
      });

      if (response.ok) {
        alert(`¡Bienvenido al equipo, ${formData.nombre}! Tu registro ha sido exitoso.`);
        setFormData({ nombre: '', telefono: '', direccion: '', email: '', ine: null });
      } else {
        const errorData = await response.json();
        alert("Error en el servidor: " + (errorData.message || "No se pudo registrar"));
      }
    } catch (error) {
      console.error("Error conectando con el backend:", error);
      alert("No se pudo conectar con el servidor. ¿Está encendido tu Backend en Java?");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, ine: e.target.files[0] });
    }
  };

  return (
    <section id="afiliacion" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFD600] rounded-full mb-6">
            <Award size={40} className="text-black" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#FFD600] mb-4">
            Suscríbete al Partido
          </h2>
          <p className="text-2xl text-white mb-2">para obtener beneficios</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Beneficios */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black mb-4">Beneficios al afiliarte:</h3>
              <div className="space-y-3">
                {[
                  'Prioridad en todos los programas de apoyo',
                  'Acceso a becas escolares para tus hijos',
                  'Asesoría legal y gestión de trámites gratis',
                  'Invitaciones a eventos y actividades del partido'
                ].map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FFD600] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700">{beneficio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre Completo *"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#FFD600] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Teléfono (10 dígitos) *"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#FFD600] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico (Opcional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#FFD600] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Dirección completa *"
                  value={formData.direccion}
                  onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#FFD600] focus:outline-none"
                />

                <div className="relative">
                  <input
                    type="file"
                    id="ine"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor="ine"
                    className="w-full px-4 py-4 rounded-xl border-2 border-dashed border-[#FFD600] bg-yellow-50 hover:bg-yellow-100 transition cursor-pointer flex items-center justify-center gap-3"
                  >
                    <Camera size={24} className="text-[#FFD600]" />
                    <span className="font-semibold text-black overflow-hidden text-ellipsis">
                      {formData.ine ? formData.ine.name : 'Subir foto de INE (Frente) *'}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FFD600] text-black px-8 py-4 rounded-full font-bold text-xl hover:bg-[#FFB300] transition shadow-lg flex items-center justify-center gap-2 mt-6 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <UserPlus size={24} />
                  )}
                  {loading ? 'Procesando registro...' : 'Registrarme Ahora'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}