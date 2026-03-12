import { motion } from 'motion/react';

export default function Anthem() {
  return (
    <section id="himno" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-600/70 mb-4">El Manifiesto Visual</h2>
          <h3 className="text-3xl md:text-5xl font-light text-white">El Canto de los Soberanos</h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.05)] border border-white/5"
        >
          <iframe 
            src="https://www.youtube.com/embed/H59iID0GKFs?si=21jzV2lXp0hRIu0B" 
            title="El Canto de los Soberanos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
