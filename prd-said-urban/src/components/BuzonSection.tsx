import { Send, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function BuzonSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    propuesta: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.nombre}! Tu propuesta ha sido recibida. Trabajaremos juntos por Melchor Ocampo.`);
    setFormData({ nombre: '', propuesta: '' });
  };

  return (
    <section id="buzon" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F4F4F4] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD600] rounded-full mb-4">
              <Lightbulb size={32} className="text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              ¿Qué necesita tu comunidad?
            </h2>
            <p className="text-xl text-gray-700">
              Déjanos tu propuesta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-lg font-semibold text-black mb-2">
                Tu Nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#FFD600] focus:outline-none text-lg"
                placeholder="¿Cómo te llamas?"
              />
            </div>

            <div>
              <label htmlFor="propuesta" className="block text-lg font-semibold text-black mb-2">
                Tu Idea
              </label>
              <textarea
                id="propuesta"
                value={formData.propuesta}
                onChange={(e) => setFormData({ ...formData, propuesta: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[#FFD600] focus:outline-none text-lg resize-none"
                placeholder="Cuéntanos tu idea o propuesta para mejorar nuestra comunidad..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFD600] text-black px-8 py-4 rounded-full font-bold text-xl hover:bg-[#FFB300] transition shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={24} />
              Enviar Propuesta
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Tu voz es importante. Construyamos juntos el Melchor Ocampo que queremos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
