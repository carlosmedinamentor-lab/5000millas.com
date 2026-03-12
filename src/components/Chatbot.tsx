import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Feather, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "¿Tienes una historia que el mundo necesita escuchar? En 5.000 Millas Editorial buscamos voces con propósito. Escribe 'Sí' para agendar una llamada exploratoria.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: 'user' }]);
    setInputValue('');

    // Simple bot logic
    setTimeout(() => {
      if (userMsg.toLowerCase() === 'sí' || userMsg.toLowerCase() === 'si' || userMsg.toLowerCase() === 'yes') {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: "Excelente. Elige tu fecha en nuestro calendario:", 
          sender: 'bot',
          action: true
        }]);
      } else {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: "Entendido. Si cambias de opinión o quieres explorar publicar tu mensaje, escribe 'Sí'.", 
          sender: 'bot' 
        }]);
      }
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[350px] bg-[#0a0a0a] border border-white/10 shadow-2xl z-50 flex flex-col rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#050505]">
              <div className="flex items-center gap-3">
                <Feather className="w-5 h-5 text-yellow-600/80" />
                <span className="text-sm tracking-widest uppercase text-white">Editorial</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto max-h-[400px] min-h-[300px] flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] p-4 text-sm font-light leading-relaxed rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-white text-black rounded-tr-sm'
                        : 'bg-[#111] text-gray-300 border border-white/5 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}

                    {msg.action && (
                      <a
                        href="https://calendly.com/carlosmedinamentor/llamada-de-30-minutos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block text-center bg-[#b8955a] text-black px-4 py-2 rounded text-sm font-bold tracking-wide hover:bg-[#d4af37] transition-all"
                      >
                        Agendar Llamada
                      </a>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-[#050505] flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-600 font-light"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:hover:bg-white"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-black z-50 hover:bg-gray-100 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Feather className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
