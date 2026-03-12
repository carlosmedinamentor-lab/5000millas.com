import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Ecosystem() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-600/70 mb-4">Las Ramas del Ecosistema</h2>
          <h3 className="text-3xl md:text-5xl font-light text-white">Elige tu Camino</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href="https://club.5000millas.com"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group block p-12 lg:p-16 border border-white/5 bg-[#050505] hover:border-white/20 transition-all duration-500"
          >
            <h4 className="text-2xl text-white mb-6 tracking-wide">El Club <span className="text-sm text-gray-500 ml-2 uppercase tracking-widest">(Diagnóstico IA)</span></h4>
            <p className="text-gray-400 font-light leading-relaxed mb-12 min-h-[80px]">
              Descubre tu obstáculo oculto y la raíz de tu comportamiento.
            </p>
            <div className="flex items-center text-sm uppercase tracking-widest text-white group-hover:text-yellow-600/80 transition-colors">
              Iniciar Diagnóstico <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>

          <motion.a
            href="https://editorial.5000millas.com"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group block p-12 lg:p-16 border border-white/5 bg-[#050505] hover:border-white/20 transition-all duration-500"
          >
            <h4 className="text-2xl text-white mb-6 tracking-wide">La Editorial</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-12 min-h-[80px]">
              Si ya conoces tu herida, necesitas sabiduría para sanarla. O si tienes un mensaje, nosotros te ayudamos a publicarlo.
            </p>
            <div className="flex items-center text-sm uppercase tracking-widest text-white group-hover:text-yellow-600/80 transition-colors">
              Explorar la Biblioteca <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
