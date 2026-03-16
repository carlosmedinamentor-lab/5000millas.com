import { motion } from 'motion/react';

const links = [
  { label: 'Mentoría', href: 'https://mentoria.5000millas.com' },
  { label: 'Editorial', href: 'https://editorial.5000millas.com' },
  { label: 'Academia', href: 'https://academia.5000millas.com' },
  { label: 'Blog', href: 'https://blog.5000millas.com' },
  { label: 'Diagnóstico', href: 'https://club.5000millas.com' },
];

export default function Whisper() {
  return (
    <footer className="px-6 py-[80px] text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-[16px] italic text-[#444440] max-w-[500px] mx-auto leading-[1.6]"
      >
        El método BDL no pretende crear seguidores. Pretende despertar soberanos.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-6 text-[20px] text-[#888880]"
      >
        ⛵ + 💎 = 🦁
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6"
      >
        <p className="font-sans text-[14px] text-[#FAFAF8]">Carlos Medina</p>
        <p className="font-sans text-[11px] tracking-[3px] uppercase text-[#444440] mt-1">
          Fundador de 5.000 Millas
        </p>
        <a
          href="https://instagram.com/oficialcarlosmedina"
          className="inline-block mt-2 font-sans text-[13px] text-[#D4A574] hover:opacity-80 transition-opacity"
        >
          @oficialcarlosmedina
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 font-sans text-[12px] text-[#333]"
      >
        {links.map((link, i) => (
          <span key={link.label}>
            <a href={link.href} className="hover:text-[#D4A574] transition-colors">
              {link.label}
            </a>
            {i < links.length - 1 && <span className="mx-2">·</span>}
          </span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 font-mono text-[10px] text-[#2A2A2A] tracking-[2px] uppercase"
      >
        Erradicando la pobreza mental · © 2026
      </motion.p>
    </footer>
  );
}
