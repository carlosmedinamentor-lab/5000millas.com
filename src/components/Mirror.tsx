import { motion } from 'motion/react';

const phrases = [
  'Trabajas. Produces. Cumples. Pero por dentro sabes que esa no es tu vida real.',
  'Has intentado cambiar. Libros. Cursos. Terapia. Y siempre vuelves al mismo lugar.',
  'No es falta de esfuerzo. Es que estás operando desde una identidad que no es tuya.',
];

export default function Mirror() {
  return (
    <section className="px-6 py-[120px]">
      <div className="max-w-[600px] mx-auto text-center">
        {phrases.map((phrase, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className={`font-serif text-[20px] md:text-[24px] leading-[1.5] text-[#C8C4BC] font-normal${i < phrases.length - 1 ? ' mb-[60px]' : ''}`}
          >
            {phrase}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-[80px] flex justify-center"
        >
          <div className="w-[40px] h-[2px] bg-[#D4A574]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 font-serif text-[20px] text-[#FAFAF8]"
        >
          Hay un método para reconstruirla.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-sans text-[14px] text-[#888880] tracking-[2px]"
        >
          ⛵ Autoconocimiento + 💎 Transformación = 🦁 Tu verdadera identidad
        </motion.p>
      </div>
    </section>
  );
}
