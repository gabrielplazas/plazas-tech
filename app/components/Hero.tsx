import { siteConfig } from '@/config/site'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex flex-col justify-center px-6 md:px-12 py-20 bg-white">
      {/* Decorative SaaS dot-grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative glowing gradient mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#00D4FF]/15 to-[#6B21C8]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-400 mb-6 flex items-center gap-3 justify-center">
          <span className="inline-block w-6 h-0.5 bg-[#00D4FF]"></span>
          Software House — Brasil
        </p>
        
        <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-[#1E0A5C] mb-6 max-w-4xl">
          Conectamos sua ideia <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#1E0A5C] via-[#6B21C8] to-[#00D4FF] bg-clip-text text-transparent">
            ao código de alta performance.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-gray-500 font-light max-w-2xl mb-10 leading-relaxed mx-auto">
          A Plazas Tech transforma conceitos inovadores em sites rápidos, sistemas robustos e 
          aplicativos fluidos — com transparência, clareza e alto nível técnico do início ao fim.
        </p>

        <div className="flex justify-center w-full">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#00D4FF] hover:bg-[#00D4FF]/95 text-[#1E0A5C] font-bold px-8 py-4 rounded-full shadow-lg shadow-[#00D4FF]/25 hover:shadow-xl hover:shadow-[#00D4FF]/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            Vamos conversar →
          </a>
        </div>
      </div>
    </section>
  )
}