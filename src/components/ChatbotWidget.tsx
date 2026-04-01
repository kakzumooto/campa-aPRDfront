import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import miMascota from '../assets/perritoPRD.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuración de la IA
const genAI = new GoogleGenerativeAI("AIzaSyDd_Ln_5KKySVBTLjYqPCAPoaASgYMBdxc");

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "¡Hola! Soy el compañero de Said Urbán. 🐾 ¿En qué puedo ayudarte hoy en Melchor Ocampo?", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

const handleSendMessage = async () => {
  if (!input.trim() || isTyping) return;

  const userMessage = input;
  setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
  setInput('');
  setIsTyping(true);

  try {
    const API_KEY = "AIzaSyDd_Ln_5KKySVBTLjYqPCAPoaASgYMBdxc";
    
    const URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Eres la mascota oficial de la campaña de Said Urbán  en Melchor Ocampo y te llamas cenicito. 
            Tu misión es ser amigable, usar emojis de perritos 🐾 y explicar que Said es la mejor opción para el municipio. 
            Responde de forma breve y entusiasta. 
            Pregunta del ciudadano: ${userMessage}`
          }]
        }]
      })
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Extraemos la respuesta del modelo 2.5
    const botText = data.candidates[0].content.parts[0].text;
    setMessages(prev => [...prev, { text: botText, isBot: true }]);

  } catch (error) {
    console.error("Error con Gemini 2.5:", error);
    setMessages(prev => [...prev, { 
      text: "¡Guau! Mi conexión con el satélite perruno falló. ¿Me repites eso? 🐾", 
      isBot: true 
    }]);
  } finally {
    setIsTyping(false);
  }
};

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-[#FFD600] rounded-full shadow-2xl flex items-center justify-center z-50 border-4 border-black"
          >
            <img src={miMascota} alt="Chatbot" className="w-14 h-14 rounded-full object-cover" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-[#FFD600]"
            style={{ height: '500px', maxHeight: 'calc(100vh - 3rem)' }}
          >
            <div className="bg-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={miMascota} alt="Chatbot" className="w-10 h-10 rounded-full border-2 border-[#FFD600]" />
                <div>
                  <h3 className="font-bold text-[#FFD600]">Asistente de Said</h3>
                  <p className="text-[10px] text-green-400 uppercase font-black">En línea 🐾</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#FFD600] transition">
                <X size={24} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.isBot ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] px-4 py-2 rounded-2xl shadow-sm text-sm ${
                    message.isBot ? 'bg-white text-black' : 'bg-[#FFD600] text-black font-medium'
                  }`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 px-4 py-2 rounded-2xl animate-pulse text-xs italic">
                    El perrito está escribiendo... 🐾
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Pregunta sobre Said Urbán..."
                  className="flex-1 px-4 py-2 rounded-full border-2 border-gray-200 focus:border-black focus:outline-none text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping}
                  className="bg-black text-[#FFD600] rounded-full p-2 hover:scale-110 transition disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}