import { motion } from 'framer-motion';
import miMascota from '../assets/perritoPRD.jpeg';


export function HeroSection() {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
              Said Urbán: <span className="text-[#FFD600]">Presidente</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              ¡Melchor Ocampo, la Lucha Continúa!
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabajando por un futuro mejor para nuestras familias, nuestros jóvenes y nuestra comunidad. 
              Juntos construiremos un Melchor Ocampo más próspero, justo y lleno de oportunidades para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('apoyos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#FFD600] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFB300] transition shadow-lg"
              >
                Conoce Nuestros Programas
              </button>
              <button 
                onClick={() => document.getElementById('buzon')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-lg"
              >
                Envía tu Propuesta
              </button>
            </div>
          </motion.div>

          {/* Mascota */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#FFD600] to-[#FFB300] rounded-3xl p-8 shadow-2xl">
              <img 
                src={miMascota} 
                alt="Mascota La Lucha Continúa" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-black text-[#FFD600] px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                ¡Únete a la Lucha!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
