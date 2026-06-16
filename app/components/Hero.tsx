export default function Hero() {
  return (
    <section className="px-8 max-w-4xl min-h-[calc(100vh-5rem)] flex flex-col justify-center">
      <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-6 flex items-center gap-3">
        <span className="inline-block w-6 h-0.5 bg-[#00D4FF]"></span>
        Software House — Brasil
      </p>
      <h1 className="font-bold text-5xl leading-tight tracking-tight text-[#1E0A5C] mb-6">
        Conectamos sua ideia <span className="text-[#00D4FF]">ao código.</span>
      </h1>
      <p className="text-lg text-gray-500 font-light max-w-lg mb-10 leading-relaxed">
        A Plazas Tech transforma ideias em sites, sistemas e aplicativos —
        com atenção, clareza e comprometimento do início ao fim.
      </p>
      <a
        href="https://wa.me/5517981629037"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00D4FF] text-[#1E0A5C] font-medium px-4 py-2.5 hover:opacity-90 transition-opacity inline-block"
      >
        Vamos conversar →
      </a>
    </section>
  )
}