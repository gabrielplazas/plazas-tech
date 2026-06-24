import { Globe, Monitor, Smartphone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Globe size={26} />,
      title: 'Sites & Landing Pages',
      description:
        'Criamos páginas de alta conversão, rápidas, otimizadas para SEO e com design responsivo sob medida para o seu público.',
    },
    {
      icon: <Monitor size={26} />,
      title: 'Sistemas Web',
      description:
        'Automatizamos processos internos, organizamos fluxos de dados complexos e desenvolvemos painéis administrativos sob medida.',
    },
    {
      icon: <Smartphone size={26} />,
      title: 'Aplicativos Mobile',
      description:
        'Desenvolvimento sob medida para iOS e Android. Projetamos interfaces intuitivas que geram engajamento real.',
    },
  ]

  return (
    <section id="services" className="relative overflow-hidden px-6 md:px-12 py-24 min-h-screen flex flex-col justify-center bg-[#0a0214]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#00D4FF] mb-3">
            O que a Plazas Tech faz
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-indigo-100/70 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Construímos soluções tecnológicas com foco em usabilidade, performance e objetivos de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/[0.02] p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-[#00D4FF]/30 hover:bg-white/[0.04] shadow-lg hover:shadow-2xl hover:shadow-[#00D4FF]/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start"
            >
              <div className="text-[#00D4FF] bg-[#00D4FF]/10 p-4 rounded-2xl mb-6 group-hover:bg-[#00D4FF]/20 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-bold text-slate-50 text-xl mb-4 group-hover:text-[#00D4FF] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-indigo-100/70 font-light text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}