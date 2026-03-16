import { motion } from 'motion/react';

export default function Question() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[28px] md:text-[42px] font-normal leading-[1.3] text-[#FAFAF8] max-w-[700px] mx-auto"
        >
          ¿Y si todo lo que crees saber sobre ti mismo estuviera equivocado?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-sans text-[15px] text-[#888880]"
        >
          Descúbrelo en 7 minutos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="https://club.5000millas.com"
            className="inline-block bg-[#D4A574] text-[#0A0A0A] font-sans text-[12px] font-semibold tracking-[3px] uppercase px-12 py-[18px] rounded-[2px] hover:opacity-90 transition-opacity"
          >
            Iniciar diagnóstico
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 font-mono text-[11px] text-[#2A2A2A] tracking-[4px]"
        >
          ⛵+💎=🦁 · 5.000 MILLAS
        </motion.p>
      </div>
    </section>
  );
}
