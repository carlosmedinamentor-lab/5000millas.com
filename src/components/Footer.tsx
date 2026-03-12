export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#050505] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-light text-white mb-8 leading-relaxed">
          "No naciste para vivir dormido. <br className="hidden md:block" />
          No naciste para repetir patrones. <br className="hidden md:block" />
          Bienvenido al Club 5.000 Millas."
        </h2>
        
        <div className="text-xs uppercase tracking-[0.2em] text-gray-600 mt-16">
          &copy; {new Date().getFullYear()} 5.000 Millas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
