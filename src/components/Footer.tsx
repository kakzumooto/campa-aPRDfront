import {  IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconHeart, IconMail  } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">PRD</span>
              </div>
              <div>
                <h3 className="font-bold">Said Urbán</h3>
                <p className="text-sm text-gray-400">Presidente Municipal</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Trabajando por un Melchor Ocampo más justo, próspero y lleno de oportunidades para todos.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold text-[#FFD600] mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#FFD600] transition">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('apoyos')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#FFD600] transition">
                  Programas de Apoyo
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('trayectoria')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#FFD600] transition">
                  Trayectoria
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#FFD600] transition">
                  Videos
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('afiliacion')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#FFD600] transition">
                  Afiliarse
                </button>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-bold text-[#FFD600] mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-[#FFD600] rounded-full flex items-center justify-center hover:bg-[#FFB300] transition">
                <IconBrandFacebook size={20} className="text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD600] rounded-full flex items-center justify-center hover:bg-[#FFB300] transition">
                <IconBrandInstagram size={20} className="text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD600] rounded-full flex items-center justify-center hover:bg-[#FFB300] transition">
                <IconBrandTwitter size={20} className="text-black" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Melchor Ocampo, Estado de México
              <br />
              Dirección Municipal Ejecutiva
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Hecho con <IconHeart size={16} className="text-[#FFD600] fill-[#FFD600]" /> para Melchor Ocampo
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2026 Said Urbán - PRD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
