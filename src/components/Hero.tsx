import { motion } from 'motion/react';

export default function Hero() {
  const scrollToAnthem = () => {
    document.getElementById('himno')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-white mb-8"
        >
          El viaje más importante de tu vida no es alrededor del mundo... <br className="hidden md:block" />
          <span className="italic text-gray-400">es hacia el interior de tu alma.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-wide"
        >
          Un viaje de 5.000 millas para abandonar el ego y despertar a tu león interior.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://club.5000millas.com"
            className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
          >
            Enfrenta tu Espejo
          </a>
          <button 
            onClick={scrollToAnthem}
            className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest hover:border-white/60 transition-colors w-full sm:w-auto text-center"
          >
            Escuchar el Himno
          </button>
        </motion.div>
      </div>
    </section>
  );
}
