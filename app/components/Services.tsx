import { Globe, Monitor, Smartphone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Globe size={24} />,
      title: 'Sites & landing pages',
      description:
        'Presença online que representa bem o seu negócio — rápida, bonita e fácil de encontrar.',
    },
    {
      icon: <Monitor size={24} />,
      title: 'Sistemas web',
      description:
        'Processos manuais viram fluxos automatizados. Planilhas viram ferramentas. Ideias viram produtos.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Aplicativos',
      description:
        'Do protótipo à versão funcional. A Plazas Tech constrói junto com você, etapa por etapa.',
    },
  ]

  return (
    <section className="px-8 py-20">
      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">
        O que a Plazas Tech faz
      </p>
      <h2 className="text-3xl font-bold text-[#1E0A5C] tracking-tight mb-12">
        Nossos serviços
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 hover:shadow-md transition-shadow group"
          >
            <div className="text-[#6B21C8] mb-4 group-hover:text-[#00D4FF] transition-colors">
              {service.icon}
            </div>
            <h3 className="font-bold text-[#1E0A5C] text-lg mb-3">
              {service.title}
            </h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}