import { GraduationCap, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const apoyos = [
  {
    icon: GraduationCap,
    title: 'Becas Escolares Urbán',
    description: 'Apoyo económico directo para estudiantes desde primaria hasta universidad. Porque la educación es el futuro de Melchor Ocampo.',
    image: 'https://images.unsplash.com/photo-1674584233496-e77a8aed9ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzY2hvbGFyc2hpcCUyMHN0dWRlbnRzJTIwbWV4aWNvfGVufDF8fHx8MTc3NDkwNDkxNHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Heart,
    title: 'Bienestar Familiar',
    description: 'Programas de salud, alimentación y vivienda para fortalecer a las familias de nuestra comunidad. Juntos somos más fuertes.',
    image: 'https://images.unsplash.com/photo-1714408585797-498bd6a1ea6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwY29tbXVuaXR5JTIwbWV4aWNvfGVufDF8fHx8MTc3NDkwNDkxNHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Sparkles,
    title: 'Jóvenes con Futuro',
    description: 'Capacitación laboral, apoyo al emprendimiento y espacios deportivos para que nuestra juventud alcance todo su potencial.',
    image: 'https://images.unsplash.com/photo-1758270703662-b7d58bf0a8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHlvdW5nJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc3NDkwNDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function ApoyosSection() {
  return (
    <section id="apoyos" className="py-20 bg-gradient-to-br from-[#FFD600] via-[#FFB300] to-[#FFD600]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Nuestros Programas de Apoyo
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Comprometidos con el bienestar de cada familia en Melchor Ocampo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {apoyos.map((apoyo, index) => {
            const Icon = apoyo.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={apoyo.image} 
                    alt={apoyo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-[#FFD600] rounded-full p-3">
                    <Icon size={32} className="text-black" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{apoyo.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{apoyo.description}</p>
                  <button className="mt-4 bg-black text-[#FFD600] px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
                    Más Información
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-black text-[#FFD600] inline-block px-8 py-4 rounded-full font-bold text-xl shadow-2xl">
            ¡Estos apoyos son para TI y tu familia!
          </div>
        </motion.div>
      </div>
    </section>
  );
}
