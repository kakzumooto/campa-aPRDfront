import {  IconBrandFacebook, IconBrandTwitter, IconBrandInstagram,IconX,IconMenu2,  IconHeart, IconMail  } from '@tabler/icons-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-black">PRD</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-black">Said Urbán</h1>
              <p className="text-xs text-gray-600">Presidente</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#FFD600] transition">
              Inicio
            </button>
            <button onClick={() => scrollToSection('apoyos')} className="text-gray-700 hover:text-[#FFD600] transition">
              Apoyos
            </button>
            <button onClick={() => scrollToSection('trayectoria')} className="text-gray-700 hover:text-[#FFD600] transition">
              Trayectoria
            </button>
            <button onClick={() => scrollToSection('videos')} className="text-gray-700 hover:text-[#FFD600] transition">
              Videos
            </button>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 ml-4">
              <a href="#" className="text-gray-600 hover:text-[#FFD600] transition">
                <IconBrandFacebook size={20} className="text-black" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FFD600] transition">
                <IconBrandInstagram size={20} className="text-black" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FFD600] transition">
                <IconBrandTwitter size={20} className="text-black" />
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('afiliacion')}
              className="bg-[#FFD600] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#FFB300] transition"
            >
              Afíliate
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#FFD600] transition text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('apoyos')} className="text-gray-700 hover:text-[#FFD600] transition text-left">
                Apoyos
              </button>
              <button onClick={() => scrollToSection('trayectoria')} className="text-gray-700 hover:text-[#FFD600] transition text-left">
                Trayectoria
              </button>
              <button onClick={() => scrollToSection('videos')} className="text-gray-700 hover:text-[#FFD600] transition text-left">
                Videos
              </button>
              
              <div className="flex items-center space-x-4 pt-2">
                <a href="#" className="text-gray-600 hover:text-[#FFD600] transition">
                  <IconBrandFacebook size={25} className="text-black" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FFD600] transition">
                  <IconBrandInstagram size={25} className="text-black" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FFD600] transition">
                  <IconBrandTwitter size={25} className="text-black" />
                </a>
              </div>

              <button 
                onClick={() => scrollToSection('afiliacion')}
                className="bg-[#FFD600] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#FFB300] transition w-full"
              >
                Afíliate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
