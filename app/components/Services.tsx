'use client'

import { useState } from 'react'
import { Globe, Monitor, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      icon: <Smartphone size={48} />,
      title: 'Sites e Aplicativos',
      description:
        'Construímos do zero. Sites rápidos para vender mais e aplicativos completos (iOS e Android) criados etapa por etapa, lado a lado com você.',
    },
    {
      icon: <Monitor size={48} />,
      title: 'Sistemas Sob Medida',
      description:
        'Adeus planilhas confusas. Transformamos seus processos manuais em ferramentas web automatizadas, seguras e fáceis de usar.',
    },
    {
      icon: <Globe size={48} />,
      title: 'Resgate & Deploy de IA',
      description:
        'Criou seu sistema com ChatGPT, Lovable ou Bolt e não sabe o que fazer agora? Nós assumimos. Revisamos a arquitetura, arrumamos a casa e colocamos seu projeto no ar.',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <div id="services" className="bg-[#0a0214] text-slate-50 pt-24 pb-12 flex flex-col justify-center min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D4FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col h-full">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#00D4FF] mb-3">
            O que a Plazas Tech faz
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Nossos Serviços
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex-grow flex items-center justify-center min-h-[400px]">

          {/* Main Slide Content */}
          <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 sm:px-12 transition-all duration-500 ease-in-out">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-[#00D4FF] bg-[#00D4FF]/10 p-5 rounded-3xl mb-8 shadow-inner">
                {services[currentSlide].icon}
              </div>
              <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 text-slate-50 tracking-tight transition-all duration-300">
                {services[currentSlide].title}
              </h3>
              <p className="text-indigo-100/70 font-light text-lg sm:text-xl leading-relaxed max-w-lg">
                {services[currentSlide].description}
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 transition-all duration-500 transform scale-100">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00D4FF]/20 to-[#6B21C8]/20 blur-[50px] animate-pulse" />
                <div className="absolute inset-6 rounded-full border border-white/10 backdrop-blur-sm bg-white/[0.02] flex items-center justify-center">
                  <div className="text-white/20 scale-150 transform transition-transform">
                    {services[currentSlide].icon}
                  </div>
                </div>
                <div className="absolute inset-12 rounded-full border border-white/5 backdrop-blur-md bg-white/[0.01]" />
              </div>
            </div>
          </div>

          {/* Navigation Controls (Arrows) */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#00D4FF]/20 hover:border-[#00D4FF]/50 text-white transition-all shadow-lg z-20 focus:outline-none"
            aria-label="Serviço anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#00D4FF]/20 hover:border-[#00D4FF]/50 text-white transition-all shadow-lg z-20 focus:outline-none animate-bounce"
            aria-label="Próximo serviço"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators (Dots) & Swipe Hint */}
        <div className="flex flex-col items-center mt-12 gap-4">
          <div className="flex justify-center gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${currentSlide === index
                  ? 'w-10 h-2 bg-[#00D4FF]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Ir para o serviço ${index + 1}`}
              />
            ))}
          </div>
          <span className="text-white/40 text-xs tracking-widest uppercase flex items-center gap-2">
            Passe para o lado <ChevronRight size={14} className="inline" />
          </span>
        </div>

      </div>
    </div>
  )
}