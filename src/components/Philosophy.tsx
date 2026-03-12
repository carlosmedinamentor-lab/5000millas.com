import { motion } from 'motion/react';
import { Ship, Gem, Crown } from 'lucide-react';

export default function Philosophy() {
  const cards = [
    {
      id: 'B',
      title: 'Barco',
      subtitle: 'Autoconocimiento',
      description: 'No podemos aprender algo que creemos que ya sabemos.',
      icon: Ship
    },
    {
      id: 'D',
      title: 'Diamante',
      subtitle: 'Transformación',
      description: 'El carbón que soportó presión extraordinaria. La presión no destruye, revela.',
      icon: Gem
    },
    {
      id: 'L',
      title: 'León',
      subtitle: 'Verdadera Identidad',
      description: 'Amor, poder y dominio propio. Un león no necesita demostrar su fuerza; su presencia lo dice todo.',
      icon: Crown
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-600/70 mb-4">El Método BDL</h2>
          <h3 className="text-3xl md:text-5xl font-light text-white">La Ecuación del Despertar Humano</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative p-8 md:p-10 border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500 flex flex-col items-center text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-4">
                <span className="text-2xl font-serif italic text-yellow-600/50">{card.id}</span>
              </div>
              
              <card.icon className="w-8 h-8 text-gray-500 mb-8 group-hover:text-yellow-600/70 transition-colors duration-500" strokeWidth={1} />
              
              <h4 className="text-xl text-white mb-2 tracking-wide">{card.title}</h4>
              <h5 className="text-xs uppercase tracking-widest text-gray-500 mb-6">{card.subtitle}</h5>
              
              <p className="text-gray-400 font-light leading-relaxed">
                "{card.description}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
