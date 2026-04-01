import React from 'react';

import { AfiliacionSection } from './components/AfiliacionSection';
import { ApoyosSection } from './components/ApoyosSection';
import { BuzonSection } from './components/BuzonSection';
import { ChatbotWidget } from './components/ChatbotWidget';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { TrayectoriaSection } from './components/TrayectoriaSection';
import { VideosSection } from './components/VideosSection';
import { AdminPanel } from './components/AdminPanel';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Menú de navegación */}
      <Navbar />

      <main>
        {/* 2. Sección Principal (Said Urbán + Perrito) */}
        <HeroSection />

        {/* 3. Lo más importante: Los Apoyos (Tarjetas) */}
        <ApoyosSection />

        {/* 4. Trayectoria (Línea de tiempo) */}
        <TrayectoriaSection />

        {/* 5. Videos estilo Shorts */}
        <VideosSection />

        {/* 6. Buzón de Propuestas (Aquí es donde la gente participa) */}
        <BuzonSection />

        {/* 7. Sección de Afiliación (Donde suben el INE después) */}
        <AfiliacionSection />

         {/*  seccion de adminpanel */}
          <AdminPanel />
      </main>

      {/* 8. Pie de página */}
      <Footer />

      {/* 9. El perrito flotante (Chatbot) */}
      <ChatbotWidget />

    

    </div>
  );
}

export default App;