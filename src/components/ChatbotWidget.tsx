import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import miMascota from '../assets/perritoPRD.jpeg';
import { motion, AnimatePresence } from 'framer-motion';

// Extraemos la API KEY de las variables de entorno de Vercel
const API_KEY = import.meta.env.VITE_GEMINI_KEY;

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "¡Hola! Soy Cenicito, el compañero de Said Urbán. 🐾 ¿En qué puedo ayudarte hoy en Melchor Ocampo?", 
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
      // Usamos v1beta para asegurar compatibilidad con modelos serie 2.0/2.5
      const modelName = "gemini-1.5-flash";
      const URL = `https://generativelanguage.googleapis.com/v1/models/${modelName}:generateContent?key=${API_KEY}`;

      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Eres Cenicito, la mascota oficial de la campaña de Said Urbán en Melchor Ocampo. 
              Eres un perrito entusiasta, amigable y leal. Tu misión es convencer a los ciudadanos de que Said 
              es la mejor opción para el municipio por su experiencia y compromiso. 
              Responde siempre en español, de forma breve y usa muchos emojis de perritos 🐾.
              Pregunta del ciudadano: ${userMessage}`
            }]
          }]
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const botText = data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { text: botText, isBot: true }]);

    } catch (error) {
      console.error("Error con Gemini:", error);
      setMessages(prev => [...prev, { 
        text: "¡Guau! Mi conexión perruna falló un poquito. ¿Me lo repites? 🐾", 
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
            {/* Header del Chat */}
            <div className="bg-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={miMascota} alt="Chatbot" className="w-10 h-10 rounded-full border-2 border-[#FFD600]" />
                <div>
                  <h3 className="font-bold text-[#FFD600]">Cenicito - Auxiliar</h3>
                  <p className="text-[10px] text-green-400 uppercase font-black">En línea 🐾</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#FFD600] transition">
                <X size={24} />
              </button>
            </div>

            {/* Cuerpo del Chat */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.isBot ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] px-4 py-2 rounded-2xl shadow-sm text-sm ${
                    message.isBot ? 'bg-white text-black border border-gray-200' : 'bg-[#FFD600] text-black font-medium'
                  }`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 px-4 py-2 rounded-2xl animate-pulse text-xs italic text-gray-600">
                    Cenicito está pensando... 🐾
                  </div>
                </div>
              )}
            </div>

            {/* Input del Chat */}
            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Pregúntale a Cenicito..."
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