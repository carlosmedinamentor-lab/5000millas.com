import { motion } from 'motion/react';

export default function Invitation() {
  return (
    <section className="px-6 py-[100px]">
      <div className="max-w-[600px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-[10px] tracking-[5px] uppercase text-[#444440]"
        >
          Diagnóstico de identidad
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 font-serif text-[28px] md:text-[32px] text-[#FAFAF8]"
        >
          Conoce quién eres realmente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-2 font-serif text-[16px] italic text-[#888880]"
        >
          7 dimensiones. 7 minutos. Gratuito.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="https://club.5000millas.com"
            className="inline-block bg-[#D4A574] text-[#0A0A0A] font-sans text-[12px] font-semibold tracking-[3px] uppercase px-12 py-[18px] rounded-[2px] hover:opacity-90 transition-opacity"
          >
            Conocerme de verdad
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 font-mono text-[11px] text-[#444440]"
        >
          +1.000 personas ya lo han hecho
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-[60px] flex justify-center"
        >
          <div className="w-[200px] h-px bg-[#1A1A1A]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <p className="font-sans text-[13px] text-[#444440]">
            También puedes recibir un manifiesto diario a las 5:00 AM
          </p>
          <a
            href="https://blog.5000millas.com"
            className="inline-block mt-2 font-sans text-[13px] text-[#D4A574] hover:opacity-80 transition-opacity"
          >
            Suscribirme al Faro →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
