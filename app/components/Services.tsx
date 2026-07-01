import { Globe, Monitor, Smartphone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Smartphone size={26} />,
      title: 'Sites e Aplicativos',
      description:
        'Construímos do zero. Sites rápidos para vender mais e aplicativos completos (iOS e Android) criados etapa por etapa, lado a lado com você.',
    },
    {
      icon: <Monitor size={26} />,
      title: 'Sistemas Sob Medida',
      description:
        'Adeus planilhas confusas. Transformamos seus processos manuais em ferramentas web automatizadas, seguras e fáceis de usar.',
    },
    {
      icon: <Globe size={26} />,
      title: 'Resgate & Deploy de IA',
      description:
        'Criou seu sistema com ChatGPT ou Claude e não sabe o que fazer agora? Nós assumimos. Revisamos a segurança, arrumamos a casa e colocamos seu projeto no ar.',
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