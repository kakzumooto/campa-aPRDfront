import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const hitos = [
  {
    year: '2010',
    title: 'Inició labor comunitaria',
    description: 'Comenzó trabajando directamente con las familias de Melchor Ocampo, escuchando sus necesidades.'
  },
  {
    year: '2014',
    title: 'Programas de vivienda',
    description: 'Impulsó la construcción de 500 viviendas dignas para familias de escasos recursos.'
  },
  {
    year: '2018',
    title: 'Mejoró escuelas',
    description: 'Renovó y equipó 15 escuelas del municipio, beneficiando a más de 3,000 estudiantes.'
  },
  {
    year: '2020',
    title: 'Apoyo durante la pandemia',
    description: 'Organizó despensas y atención médica gratuita para las familias más afectadas.'
  },
  {
    year: '2023',
    title: 'Espacios deportivos',
    description: 'Construyó canchas deportivas y parques recreativos en 8 colonias del municipio.'
  },
  {
    year: '2026',
    title: 'Presidente Municipal',
    description: '¡La lucha continúa! Comprometido con seguir transformando Melchor Ocampo.'
  }
];

export function TrayectoriaSection() {
  return (
    <section id="trayectoria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Trayectoria de <span className="text-[#FFD600]">Servicio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Años de trabajo constante por nuestra comunidad
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD600] hidden md:block" />

          <div className="space-y-12">
            {hitos.map((hito, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-[#F4F4F4] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                    <span className="inline-block bg-[#FFD600] text-black px-4 py-1 rounded-full font-bold text-sm mb-3">
                      {hito.year}
                    </span>
                    <h3 className="text-2xl font-bold text-black mb-2">{hito.title}</h3>
                    <p className="text-gray-700">{hito.description}</p>
                  </div>
                </div>

                {/* Icono central */}
                <div className="relative z-10">
                  <div className="bg-[#FFD600] rounded-full p-3 border-4 border-white shadow-lg">
                    <CheckCircle2 size={32} className="text-black" />
                  </div>
                </div>

                {/* Espacio vacío para alineación */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
