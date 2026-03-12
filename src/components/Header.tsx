import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl tracking-[0.2em] font-light text-white">
          5.000 MILLAS
        </div>
        <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-gray-400">
          <a href="https://club.5000millas.com" className="hover:text-white transition-colors">El Club</a>
          <a href="https://editorial.5000millas.com" className="hover:text-white transition-colors">La Editorial</a>
        </nav>
      </div>
    </motion.header>
  );
}
