import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    title: 'Nuestro Compromiso',
    thumbnail: 'https://images.unsplash.com/photo-1761666520005-3ffcf13e74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBncm91cCUyMG1lZXRpbmd8ZW58MXx8fHwxNzc0ODI0MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '0:45'
  },
  {
    title: 'Programas de Apoyo',
    thumbnail: 'https://images.unsplash.com/photo-1674584233496-e77a8aed9ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzY2hvbGFyc2hpcCUyMHN0dWRlbnRzJTIwbWV4aWNvfGVufDF8fHx8MTc3NDkwNDkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '1:00'
  },
  {
    title: 'Juntos por Melchor Ocampo',
    thumbnail: 'https://images.unsplash.com/photo-1714408585797-498bd6a1ea6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwY29tbXVuaXR5JTIwbWV4aWNvfGVufDF8fHx8MTc3NDkwNDkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '0:55'
  }
];

export function VideosSection() {
  return (
    <section id="videos" className="py-20 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nuestros <span className="text-[#FFD600]">Videos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Conoce más sobre nuestro trabajo y propuestas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#FFD600] rounded-full p-6 group-hover:scale-110 transition-transform shadow-2xl">
                    <Play size={40} className="text-black fill-black" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                  <span className="inline-block bg-[#FFD600] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {video.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <button className="bg-black text-[#FFD600] px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition">
            Ver Más Videos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
